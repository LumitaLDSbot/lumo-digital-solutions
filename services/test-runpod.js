/**
 * Test Script - RunPod ComfyUI Integration
 * Verifica que la API Key y endpoint funcionan correctamente
 */

require('dotenv').config({ path: __dirname + '/.env' });

const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY;
const RUNPOD_ENDPOINT = process.env.RUNPOD_ENDPOINT || 'f848cy1mvburyj';
const RUNPOD_API_URL = `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT}/run`;

console.log('🧪 Testeando conexión con RunPod ComfyUI...\n');
console.log('Endpoint:', RUNPOD_ENDPOINT);
console.log('API Key:', RUNPOD_API_KEY ? '✅ Configurada' : '❌ No configurada');
console.log('');

async function testConnection() {
  try {
    console.log('📡 Enviando request de prueba...\n');
    
    const response = await fetch(RUNPOD_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RUNPOD_API_KEY}`
      },
      body: JSON.stringify({
        input: {
          prompt: 'test image, simple shape, blue circle on white background',
          steps: 10,
          width: 512,
          height: 512
        }
      })
    });

    console.log('📊 Respuesta recibida:\n');
    console.log('Status:', response.status, response.statusText);
    
    const result = await response.json();
    console.log('\n📄 Response JSON:\n');
    console.log(JSON.stringify(result, null, 2));
    
    if (result.status === 'completed' || result.id) {
      console.log('\n✅ ¡CONEXIÓN EXITOSA!\n');
      console.log('Tu endpoint de ComfyUI está funcionando correctamente.');
      console.log('');
      
      if (result.output && result.output.image_url) {
        console.log('🖼️  Imagen generada:', result.output.image_url);
      } else if (result.id) {
        console.log('⏳ Job ID:', result.id);
        console.log('El job está en progreso. Usá el endpoint de status para verificar.');
      }
      
      return true;
    } else {
      console.log('\n⚠️  Respuesta inesperada. Verificar configuración.\n');
      return false;
    }
    
  } catch (error) {
    console.error('\n❌ ERROR DE CONEXIÓN:\n');
    console.error(error.message);
    console.error('\nPosibles causas:');
    console.error('1. API Key inválida');
    console.error('2. Endpoint no existe o no está activo');
    console.error('3. Problema de red o firewall');
    console.error('4. Endpoint no tiene GPU disponible\n');
    return false;
  }
}

// Ejecutar test
testConnection().then(success => {
  process.exit(success ? 0 : 1);
});
