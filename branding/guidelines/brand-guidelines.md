# Lumo Digital Solutions - Brand Guidelines

**Versión:** 1.0  
**Fecha:** 1 de abril de 2026  
**Uso:** Interno y externos (clientes, partners)

---

## 📖 **INTRODUCCIÓN**

Este manual define los lineamientos de uso de la marca **Lumo Digital Solutions**. Su propósito es asegurar la consistencia visual y comunicacional en todos los puntos de contacto con clientes y el mercado.

---

## 🎯 **IDENTIDAD DE MARCA**

### **Nombre**
- **Razón Social:** Lumo Digital Solutions
- **Nombre Corto:** Lumo
- **Pronunciación:** LOO-mo

### **Misión**
Proporcionar soluciones digitales innovadoras que transformen negocios mediante diseño web profesional, automatización con inteligencia artificial y estrategias digitales efectivas.

### **Visión**
Ser el partner digital de confianza para negocios emergentes y PYMES, democratizando el acceso a tecnología de punta.

### **Valores**
1. **Compromiso** - Acompañamos desde el briefing hasta la entrega
2. **Transparencia** - Términos 100% claros y por escrito
3. **Planificación** - Cada proyecto es único y estratégico
4. **Innovación** - Siempre a la vanguardia tecnológica
5. **Accesibilidad** - Tecnología premium a precios justos

---

## 🎨 **COLORES CORPORATIVOS**

### **Paleta Principal**

| Color | Nombre | HEX | RGB | CMYK | Uso Principal |
|-------|--------|-----|-----|------|---------------|
| ![#4D5EFF](https://via.placeholder.com/50/4D5EFF/000000?text=+) | **Lumo Blue** | `#4D5EFF` | 77, 94, 255 | 70, 63, 0, 0 | Logo, headers, CTAs |
| ![#00FFCE](https://via.placeholder.com/50/00FFCE/000000?text=+) | **Lumo Cyan** | `#00FFCE` | 0, 255, 206 | 100, 0, 19, 0 | Acentos, hover, detalles |

### **Paleta Secundaria**

| Color | Nombre | HEX | RGB | CMYK | Uso |
|-------|--------|-----|-----|------|-----|
| ![#1A1A2E](https://via.placeholder.com/50/1A1A2E/FFFFFF?text=+) | **Midnight** | `#1A1A2E` | 26, 26, 46 | 44, 44, 0, 82 | Fondos oscuros |
| ![#485568](https://via.placeholder.com/50/485568/FFFFFF?text=+) | **Steel** | `#485568` | 72, 85, 104 | 31, 18, 0, 59 | Texto secundario |
| ![#FFFFFF](https://via.placeholder.com/50/FFFFFF/000000?text=+) | **Pure White** | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | Fondos, texto sobre oscuro |

### **Gradientes Oficiales**

**Gradiente Principal:**
```css
background: linear-gradient(135deg, #4D5EFF 0%, #00FFCE 100%);
```

**Gradiente Suave:**
```css
background: linear-gradient(135deg, #4D5EFF 0%, #6B7BFF 100%);
```

**Gradiente Oscuro:**
```css
background: linear-gradient(135deg, #1A1A2E 0%, #4D5EFF 100%);
```

---

## 🔤 **TIPOGRAFÍAS**

### **Tipografía Principal**
**Inter** (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

**Pesos Disponibles:**
- Light (300) - Texto secundario
- Regular (400) - Cuerpo de texto
- Medium (500) - Subtítulos
- SemiBold (600) - Títulos pequeños
- Bold (700) - Títulos principales
- ExtraBold (800) - Impacto
- Black (900) - Máximo impacto

### **Tipografía Secundaria**
**System Fonts** (para carga rápida)

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### **Jerarquía Tipográfica**

| Elemento | Familia | Peso | Tamaño | Color |
|----------|---------|------|--------|-------|
| H1 | Inter | 900 | 56px | #1A1A2E |
| H2 | Inter | 800 | 42px | #1A1A2E |
| H3 | Inter | 700 | 28px | #1A1A2E |
| H4 | Inter | 600 | 22px | #1A1A2E |
| Body | Inter | 400 | 16px | #485568 |
| Small | Inter | 400 | 14px | #485568 |
| Button | Inter | 700 | 18px | #FFFFFF |

---

## 🖼️ **LOGOTIPO**

### **Versiones Disponibles**

1. **Logo Horizontal** (Principal)
   - Uso: Header, firma de email, documentos
   - Espacio mínimo: 20px alrededor
   - Tamaño mínimo: 120px de ancho

2. **Logo Icon/Cara** (Redes sociales)
   - Uso: Avatar, favicon, app icon
   - Espacio mínimo: 10px alrededor
   - Tamaño mínimo: 40x40px

3. **Logo Cuadrado** (Favicon)
   - Uso: Browser tab, app icon
   - Formatos: SVG, PNG (16x16, 32x32, 180x180)

### **Espacio Mínimo**

El logo debe tener siempre un espacio mínimo de respeto:

```
   ← 20px →
┌─────────────┐
│             │ ↑
│    LOGO     │ 20px
│             │ ↓
└─────────────┘
   ← 20px →
```

### **Tamaños Mínimos**

| Versión | Digital | Impreso |
|---------|---------|---------|
| Horizontal | 120px | 30mm |
| Icon | 40px | 10mm |
| Cuadrado | 32px | 8mm |

### **Usos Incorrectos**

❌ **NO hacer:**
- No cambiar colores del logo
- No deformar o estirar
- No rotar
- No agregar efectos (sombras, brillos)
- No usar sobre fondos de bajo contraste
- No usar versiones pixeladas

✅ **SÍ hacer:**
- Usar versiones oficiales en SVG
- Mantener proporciones originales
- Usar sobre fondos contrastantes
- Respetar espacio mínimo

---

## 📐 **SISTEMA DE DISEÑO**

### **Bordes y Radios**

```css
/* Botones y cards */
border-radius: 50px; /* Pill shape */

/* Cards y contenedores */
border-radius: 20px;

/* Inputs y campos */
border-radius: 12px;

/* Iconos */
border-radius: 16px;
```

### **Sombras**

```css
/* Sombra suave */
box-shadow: 0 4px 12px rgba(77, 94, 255, 0.1);

/* Sombra media */
box-shadow: 0 10px 40px rgba(77, 94, 255, 0.15);

/* Sombra hover */
box-shadow: 0 20px 60px rgba(77, 94, 255, 0.25);
```

### **Espaciado**

Usar múltiplos de 4:

```css
/* Padding */
padding: 8px;   /* 2 */
padding: 16px;  /* 4 */
padding: 24px;  /* 6 */
padding: 32px;  /* 8 */
padding: 48px;  /* 12 */
padding: 64px;  /* 16 */

/* Gap */
gap: 16px;
gap: 24px;
gap: 32px;
```

---

## 🎭 **TONO DE COMUNICACIÓN**

### **Personalidad de Marca**

| Atributo | Descripción |
|----------|-------------|
| **Profesional** | Lenguaje claro y preciso |
| **Accesible** | Explicaciones simples, sin jerga técnica excesiva |
| **Cercano** | Trato amable y empático |
| **Innovador** | Mirada hacia el futuro, tecnológico |
| **Confiable** | Transparente, cumple lo que promete |

### **Voz**

**SÍ usar:**
- ✅ "Te ayudamos a..."
- ✅ "Creamos soluciones..."
- ✅ "Tu éxito es nuestro..."
- ✅ Lenguaje inclusivo
- ✅ Frases cortas y directas

**NO usar:**
- ❌ "Somos los mejores..."
- ❌ Promesas exageradas
- ❌ Jerga técnica sin explicar
- ❌ Lenguaje demasiado formal
- ❌ Frases largas y complejas

### **Ejemplos**

**✅ Correcto:**
> "Creamos páginas web modernas que venden por vos. Te acompañamos en cada paso."

**❌ Incorrecto:**
> "Somos la empresa líder en desarrollo web con tecnología de punta."

---

## 📱 **APLICACIONES DIGITALES**

### **Website**

**Header:**
- Logo horizontal a la izquierda
- Navegación clara y simple
- CTA principal: "Empezar Ahora"

**Colores:**
- Fondo: Blanco (#FFFFFF) o gradiente suave
- Texto: Midnight (#1A1A2E)
- CTAs: Gradiente Lumo Blue → Lumo Cyan

### **Redes Sociales**

**Instagram/Facebook:**
- Avatar: Logo Icon
- Posts: Usar gradiente de marca
- Historias: Mantener paleta de colores

**LinkedIn:**
- Logo: Horizontal
- Posts: Más formales, mantener profesionalismo

### **Email Marketing**

**Firma de Email:**
```
[Tu Nombre]
[Cargo]
Lumo Digital Solutions

📧 email@lumo.pt
📱 +351 969 984 915
🌐 lumo.pt
```

---

## 📄 **PLANTILLAS**

### **Presentaciones**

- Fondo: Blanco o gradiente suave
- Títulos: Inter Bold, #1A1A2E
- Acentos: Lumo Blue y Lumo Cyan
- Logo: Esquina inferior derecha

### **Documentos**

- Logo: Header (izquierda o centro)
- Títulos: Inter, #1A1A2E
- Cuerpo: Inter Regular, #485568
- Footer: Información de contacto

### **Propuestas**

- Portada: Logo + título del proyecto
- Colores: Mantener paleta corporativa
- Incluir: Timeline, presupuesto, términos

---

## ✅ **CHECKLIST DE APLICACIÓN**

Antes de publicar cualquier material, verificar:

- [ ] Logo en versión correcta
- [ ] Colores según paleta oficial
- [ ] Tipografías correctas
- [ ] Espacio mínimo respetado
- [ ] Tono de comunicación adecuado
- [ ] Información de contacto actualizada
- [ ] Archivos en formato correcto (SVG para logo)

---

## 📞 **CONTACTO PARA DUDAS**

¿Tenés dudas sobre el uso de la marca?

**Email:** lumitadigitalsolutions@gmail.com  
**WhatsApp:** +351 969 984 915

---

*Lumo Digital Solutions © 2026 - Todos los derechos reservados*

*Este documento es confidencial y de uso interno. No compartir sin autorización.*
