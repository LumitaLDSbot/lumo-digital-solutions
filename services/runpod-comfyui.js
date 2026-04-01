/**
 * RunPod ComfyUI Integration
 * Servicio de generación de imágenes con ComfyUI en RunPod Serverless
 * 
 * Documentación: https://docs.runpod.io/docs/serverless-api
 */

const RUNPOD_ENDPOINT = 'f848cy1mvburyj';
const RUNPOD_API_URL = `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT}/run`;

// API Key se carga desde variables de entorno
const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY || 'YOUR_API_KEY';

/**
 * Generar imagen con ComfyUI
 * @param {string} prompt - Descripción de la imagen a generar
 * @param {object} options - Opciones adicionales
 * @returns {Promise<{imageUrl: string, seed: number, time: number}>}
 */
async function generateImage(prompt, options = {}) {
  const {
    negativePrompt = '',
    steps = 30,
    cfg = 7,
    width = 1024,
    height = 1024,
    seed = -1,
    sampler = 'euler_ancestral',
    model = 'sd_xl_base_1.0.safetensors'
  } = options;

  try {
    const response = await fetch(RUNPOD_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RUNPOD_API_KEY}`
      },
      body: JSON.stringify({
        input: {
          prompt: prompt,
          negative_prompt: negativePrompt,
          steps: steps,
          cfg_scale: cfg,
          width: width,
          height: height,
          seed: seed,
          sampler_name: sampler,
          checkpoint_name: model
        }
      })
    });

    if (!response.ok) {
      throw new Error(`RunPod API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    
    // RunPod devuelve el resultado en diferentes formatos según el estado
    if (result.status === 'completed' && result.output) {
      return {
        imageUrl: result.output.image_url || result.output[0],
        seed: result.output.seed || seed,
        time: result.execution_time || 0
      };
    } else if (result.id) {
      // Si es async, necesitamos hacer polling
      return await waitForCompletion(result.id);
    } else {
      throw new Error('Respuesta inesperada de RunPod API');
    }

  } catch (error) {
    console.error('Error generando imagen:', error);
    throw error;
  }
}

/**
 * Esperar a que se complete una generación asíncrona
 * @param {string} jobId - ID del job
 * @returns {Promise<{imageUrl: string, seed: number, time: number}>}
 */
async function waitForCompletion(jobId) {
  const statusUrl = `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT}/status/${jobId}`;
  
  const maxAttempts = 60; // 5 minutos máximo
  const delay = 5000; // 5 segundos entre intentos
  
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    await new Promise(resolve => setTimeout(resolve, delay));
    
    const response = await fetch(statusUrl, {
      headers: {
        'Authorization': `Bearer ${RUNPOD_API_KEY}`
      }
    });
    
    const status = await response.json();
    
    if (status.status === 'completed' && status.output) {
      return {
        imageUrl: status.output.image_url || status.output[0],
        seed: status.output.seed || -1,
        time: status.execution_time || 0
      };
    } else if (status.status === 'failed') {
      throw new Error(`Job failed: ${status.error}`);
    }
  }
  
  throw new Error('Timeout: La generación tardó demasiado');
}

/**
 * Generar múltiples imágenes (batch)
 * @param {string} prompt 
 * @param {number} count - Cantidad de imágenes
 * @param {object} options 
 * @returns {Promise<Array<{imageUrl: string, seed: number}>>}
 */
async function generateImageBatch(prompt, count = 5, options = {}) {
  const results = [];
  
  for (let i = 0; i < count; i++) {
    try {
      const result = await generateImage(prompt, {
        ...options,
        seed: options.seed === -1 ? Math.floor(Math.random() * 1000000) : options.seed + i
      });
      results.push(result);
    } catch (error) {
      console.error(`Error generando imagen ${i + 1}:`, error);
    }
  }
  
  return results;
}

/**
 * Workflows predefinidos para casos de uso comunes
 */
const workflows = {
  /**
   * Product Photography - Fotos profesionales de productos
   */
  productPhotography: async (productDescription, background = 'professional studio') => {
    return await generateImage(
      `professional product photography of ${productDescription}, ${background}, studio lighting, high detail, commercial quality, 8k`,
      {
        negativePrompt: 'blurry, low quality, distorted, ugly, deformed',
        steps: 40,
        cfg: 8,
        width: 1024,
        height: 1024
      }
    );
  },

  /**
   * Social Media Post - Posts para redes sociales
   */
  socialMediaPost: async (topic, style = 'modern minimalist') => {
    return await generateImage(
      `${style} social media post about ${topic}, vibrant colors, eye-catching, professional design, instagram worthy`,
      {
        negativePrompt: 'text, watermark, signature, blurry',
        steps: 30,
        width: 1080,
        height: 1080
      }
    );
  },

  /**
   * Logo Design - Generación de logos
   */
  logoDesign: async (companyName, industry, style = 'modern') => {
    return await generateImage(
      `${style} logo design for ${companyName}, ${industry} industry, clean, professional, vector style, white background`,
      {
        negativePrompt: 'photograph, realistic, 3d, shading, gradient',
        steps: 35,
        width: 1024,
        height: 1024
      }
    );
  },

  /**
   * Website Hero Image - Imágenes para headers de websites
   */
  websiteHero: async (topic, mood = 'professional') => {
    return await generateImage(
      `${mood} website hero image about ${topic}, wide angle, professional, modern, high quality`,
      {
        negativePrompt: 'text, watermark, signature',
        steps: 30,
        width: 1920,
        height: 1080
      }
    );
  },

  /**
   * Real Estate - Fotos de propiedades
   */
  realEstate: async (propertyType, style = 'luxury') => {
    return await generateImage(
      `${style} ${propertyType} real estate photography, professional, bright, spacious, modern interior design, high detail`,
      {
        negativePrompt: 'dark, cluttered, old, dirty, blurry',
        steps: 35,
        width: 1024,
        height: 768
      }
    );
  }
};

/**
 * Calcular costo estimado de generación
 * @param {number} seconds - Segundos de GPU estimados
 * @returns {object} Costo en diferentes GPUs
 */
function calculateCost(seconds) {
  const gpuRates = {
    'RTX 3090': 0.00019,
    'RTX 4090': 0.00034,
    'A100 40GB': 0.00074,
    'A100 80GB': 0.00148
  };

  const costs = {};
  for (const [gpu, rate] of Object.entries(gpuRates)) {
    costs[gpu] = (seconds * rate).toFixed(4);
  }

  return {
    seconds,
    costs,
    recommended: 'RTX 4090',
    recommendedCost: costs['RTX 4090']
  };
}

// Exportar funciones
module.exports = {
  generateImage,
  generateImageBatch,
  waitForCompletion,
  workflows,
  calculateCost,
  RUNPOD_ENDPOINT
};
