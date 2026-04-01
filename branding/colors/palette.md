# Lumo Digital Solutions - Paleta de Colores Oficial

**Versión:** 2.0  
**Fecha:** 1 de abril de 2026  
**Basado en:** Manual de Estilo y Guía de Comunicación

---

## 🎨 **COLORES PRIMARIOS**

### **Lumo Blue** 💙
```
HEX: #4D5EFF
RGB: 77, 94, 255
CMYK: 70, 63, 0, 0
```
**Uso:** Logo, headers, botones primarios, enlaces, CTAs

---

### **Lumo Cyan** 💚
```
HEX: #00FFCE
RGB: 0, 255, 206
CMYK: 100, 0, 19, 0
```
**Uso:** Acentos, hover states, detalles del logo, iconos

---

## 🎨 **Colores de Soporte**

### **Blanco**
```
#FFFFFF
```
**Uso:** Fondos, texto sobre colores oscuros

---

### **Gris Oscuro**
```
#1A1A2E (Azul noche muy oscuro)
```
**Uso:** Fondos oscuros, texto principal

---

### **Gris Medio**
```
#485568 (Gris azulado)
```
**Uso:** Texto secundario, bordes sutiles

---

## 🎯 **Aplicaciones**

### **Para Landing Pages:**
- **Fondo:** Blanco (#FFFFFF) o Gris muy claro
- **Headers:** Gradiente #4D5EFF → #00FFCE
- **Botones CTA:** #4D5EFF con hover #00FFCE
- **Texto:** #1A1A2E

### **Para Dashboard:**
- **Sidebar:** #1A1A2E con logo en blanco
- **Header:** Blanco con acentos #4D5EFF
- **Botones:** #4D5EFF
- **Iconos:** #00FFCE

### **Para Redes Sociales:**
- **Fondo de posts:** Gradiente suave #4D5EFF
- **Texto:** Blanco
- **Acentos:** #00FFCE

---

## 📐 **Gradientes Oficiales**

### **Gradiente Principal**
```css
background: linear-gradient(135deg, #4D5EFF 0%, #00FFCE 100%);
```

### **Gradiente Suave**
```css
background: linear-gradient(135deg, #4D5EFF 0%, #6B7BFF 100%);
```

### **Gradiente Oscuro**
```css
background: linear-gradient(135deg, #1A1A2E 0%, #4D5EFF 100%);
```

---

## ✅ **Buenas Prácticas**

### **Sí Usar:**
- ✅ Contraste alto entre texto y fondo
- ✅ Color primario para CTAs principales
- ✅ Color secundario para acentos y hover
- ✅ Gradientes para headers y backgrounds especiales

### **No Usar:**
- ❌ Demasiados colores en una sola página
- ❌ Texto #00FFCE sobre fondo blanco (poco contraste)
- ❌ Gradientes en todo el diseño
- ❌ Modificar los colores oficiales

---

## 🖼️ **Ejemplos de Uso**

### **Botón CTA:**
```css
.btn-primary {
  background: #4D5EFF;
  color: #FFFFFF;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #00FFCE;
  transform: translateY(-2px);
}
```

### **Header con Gradiente:**
```css
.header {
  background: linear-gradient(135deg, #4D5EFF 0%, #00FFCE 100%);
  color: #FFFFFF;
}
```

### **Tarjeta de Servicio:**
```css
.card {
  background: #FFFFFF;
  border-left: 4px solid #4D5EFF;
  box-shadow: 0 4px 6px rgba(77, 94, 255, 0.1);
}
```

---

*Esta paleta está basada en los colores oficiales del logo de Lumo Digital Solutions.*
