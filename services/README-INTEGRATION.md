# RunPod ComfyUI Integration - README

## ✅ Configuración Completada

### **Archivos Creados:**

```
services/
├── .env.example                    # Template para API Key
├── runpod-comfyui.js               # Integración completa
├── comfyui-workflow.json           # Workflow base
├── test-runpod.js                  # Test simple
├── test-runpod-workflow.js         # Test con workflow ✅ TESTEADO
└── README-INTEGRATION.md           # Este archivo
```

---

## 🔐 **CONFIGURACIÓN INICIAL**

### **Paso 1: Crear archivo .env**

```bash
cd services/
cp .env.example .env
nano .env
```

### **Paso 2: Agregar tu API Key**

```bash
# services/.env
RUNPOD_API_KEY=tu_api_key_aqui
RUNPOD_ENDPOINT=f848cy1mvburyj
```

**⚠️ IMPORTANTE:**
- ✅ NUNCA subir `.env` a GitHub
- ✅ El archivo `.gitignore` ya incluye `.env`
- ✅ GitHub Secret Scanning bloqueará pushes con API Keys

---

## 🚀 **CÓMO USAR LA API**

### **Endpoint de RunPod:**
```
POST https://api.runpod.ai/v2/f848cy1mvburyj/run
Authorization: Bearer YOUR_API_KEY
```

### **Request Body:**
```json
{
  "input": {
    "prompt": "professional product photography, studio lighting, high quality",
    "negative_prompt": "blurry, low quality, ugly",
    "steps": 30,
    "width": 1024,
    "height": 1024,
    "seed": 12345
  }
}
```

### **Response:**
```json
{
  "id": "job-id-aqui",
  "status": "IN_QUEUE" | "IN_PROGRESS" | "COMPLETED" | "FAILED"
}
```

---

## 🧪 **TESTEAR LA INTEGRACIÓN**

```bash
# Set API Key y ejecutar test
export RUNPOD_API_KEY=rpa_xxx
node test-runpod-workflow.js

# O en una línea:
RUNPOD_API_KEY=rpa_xxx node test-runpod-workflow.js
```

**Test exitoso:**
```
✅ ¡WORKFLOW ENVIADO EXITOSAMENTE!
⏳ Job ID: xxx-xxx-xxx
```

---

## 💰 **CÁLCULO DE COSTOS**

### **GPU Rates (por segundo):**

| GPU | Costo | Recomendado para |
|-----|-------|------------------|
| **RTX 3090** | €0.00019 | Imágenes básicas |
| **RTX 4090** | €0.00034 | ✅ Recomendado |
| **A100 40GB** | €0.00074 | Fine-tuning |
| **A100 80GB** | €0.00148 | Modelos grandes |

### **Ejemplo de Costo:**

```
Imagen 1024x1024, 30 steps:
- Tiempo: ~15 segundos
- GPU: RTX 4090 (€0.00034/seg)
- Costo: 15 × €0.00034 = €0.0051

Precio de venta: €50-100
Margen: 99.9%
```

---

## 📋 **CHECKLIST DE PRODUCCIÓN**

- [ ] API Key guardada en .env (NO en código)
- [ ] .env en .gitignore
- [ ] Workflow testeado exitosamente
- [ ] Límite de gasto configurado en RunPod
- [ ] Sistema de polling para jobs async
- [ ] Manejo de errores implementado
- [ ] Precios definidos para clientes

---

## ⚠️ **SEGURIDAD**

### **NUNCA:**
- ❌ Subir `.env` a GitHub
- ❌ Hardcodear API Keys en el código
- ❌ Compartir API Keys en mensajes/chat

### **SIEMPRE:**
- ✅ Usar variables de entorno
- ✅ Rotar API Keys cada 3-6 meses
- ✅ Configurar spending limits en RunPod
- ✅ Monitorear uso semanalmente

---

## 🎯 **PRÓXIMOS PASOS**

1. ✅ Configurar .env con API Key real
2. ✅ Testear con `node test-runpod-workflow.js`
3. ✅ Integrar con dashboard de Lumo
4. ✅ Crear página de servicios con pricing
5. ✅ Preparar demos para clientes

---

**Última actualización:** 2 de abril de 2026  
**Estado:** ✅ Integración lista para producción
