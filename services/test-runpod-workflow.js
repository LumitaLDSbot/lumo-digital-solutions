/**
 * Test Script - RunPod ComfyUI con Workflow
 * Testea la generación de imágenes con workflow completo
 * 
 * Uso: RUNPOD_API_KEY=tu_key node test-runpod-workflow.js
 */

const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY || 'YOUR_API_KEY_HERE';
const RUNPOD_ENDPOINT = 'f848cy1mvburyj';
const RUNPOD_API_URL = `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT}/run`;

console.log('🧪 Testeando RunPod ComfyUI con Workflow...\n');
console.log('Endpoint:', RUNPOD_ENDPOINT);
console.log('API Key:', RUNPOD_API_KEY !== 'YOUR_API_KEY_HERE' ? '✅ Configurada' : '❌ No configurada - Set RUNPOD_API_KEY env var\n');

if (RUNPOD_API_KEY === 'YOUR_API_KEY_HERE') {
  console.log('Error: Set RUNPOD_API_KEY environment variable');
  console.log('Usage: RUNPOD_API_KEY=rpa_xxx node test-runpod-workflow.js\n');
  process.exit(1);
}

async function testWithWorkflow() {
  // Workflow básico de ComfyUI
  const workflow = {
    "3": {
      "class_type": "KSampler",
      "inputs": {
        "cfg": 7,
        "denoise": 1,
        "latent_image": ["5", 0],
        "model": ["4", 0],
        "negative": ["7", 0],
        "positive": ["6", 0],
        "sampler_name": "euler_ancestral",
        "scheduler": "normal",
        "seed": Math.floor(Math.random() * 1000000),
        "steps": 20
      }
    },
    "4": {
      "class_type": "CheckpointLoaderSimple",
      "inputs": {
        "ckpt_name": "sd_xl_base_1.0.safetensors"
      }
    },
    "5": {
      "class_type": "EmptyLatentImage",
      "inputs": {
        "batch_size": 1,
        "height": 1024,
        "width": 1024
      }
    },
    "6": {
      "class_type": "CLIPTextEncode",
      "inputs": {
        "clip": ["4", 1],
        "text": "professional product photography, studio lighting, high quality, detailed, 8k"
      }
    },
    "7": {
      "class_type": "CLIPTextEncode",
      "inputs": {
        "clip": ["4", 1],
        "text": "blurry, low quality, ugly, deformed, watermark"
      }
    },
    "8": {
      "class_type": "VAEDecode",
      "inputs": {
        "samples": ["3", 0],
        "vae": ["4", 2]
      }
    },
    "9": {
      "class_type": "SaveImage",
      "inputs": {
        "filename_prefix": "LumoTest",
        "images": ["8", 0]
      }
    }
  };

  try {
    console.log('📡 Enviando workflow a RunPod...\n');
    
    const response = await fetch(RUNPOD_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RUNPOD_API_KEY}`
      },
      body: JSON.stringify({
        input: workflow
      })
    });

    console.log('📊 Respuesta:\n');
    console.log('Status:', response.status, response.statusText);
    
    const result = await response.json();
    console.log('\n📄 Response:\n');
    console.log(JSON.stringify(result, null, 2));
    
    if (result.status === 'completed' || result.id) {
      console.log('\n✅ ¡WORKFLOW ENVIADO EXITOSAMENTE!\n');
      
      if (result.output) {
        console.log('🖼️  Imagen generada:', result.output.image_url || result.output[0]);
      } else if (result.id) {
        console.log('⏳ Job ID:', result.id);
        console.log('Verificar status en: https://runpod.io/console/serverless');
      }
      
      return true;
    } else {
      console.log('\n⚠️  Respuesta inesperada\n');
      return false;
    }
    
  } catch (error) {
    console.error('\n❌ ERROR:\n');
    console.error(error.message);
    return false;
  }
}

// Ejecutar test
testWithWorkflow().then(success => {
  console.log('\n' + '='.repeat(50));
  console.log(success ? '✅ Test completado con éxito' : '⚠️  Test completado con warnings');
  console.log('='.repeat(50) + '\n');
  process.exit(success ? 0 : 1);
});
