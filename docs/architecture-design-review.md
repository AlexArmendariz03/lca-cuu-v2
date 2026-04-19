# Revisión rápida de arquitectura y diseño (Landing LCA)

## 1) Validación de arquitectura actual

### Fortalezas
- Proyecto simple y liviano con Next.js App Router.
- Separación básica por componentes (`Navigation`, `HomePage`, `Invitation`).
- Uso de Tailwind para iteración rápida de UI.

### Riesgos para salida a producción
- Mezcla de responsabilidades: `Invitation` tenía solo una imagen y no funcionaba como sección de contenido.
- Navegación con enlaces incompletos (`#`) y sin anclas reales.
- Datos críticos de una iglesia (ubicación, horarios, contacto, ministerios) no estaban visibles.
- Faltaban señales de estructura semántica para SEO local (landing pública).

## 2) Ajustes implementados para despliegue rápido
- Secciones reales para landing:
  - Quiénes somos
  - Ministerios
  - Horarios y eventos
  - Contacto
- Navegación actualizada con anclas funcionales.
- Hero con propuesta de valor visible desde el primer pantallazo.
- `lang="es"` en layout para mejorar accesibilidad y SEO en español.

## 3) Pendientes recomendados antes de deploy
1. Sustituir placeholders de teléfono/correo/dirección por datos oficiales.
2. Agregar Google Maps embebido o enlace directo a ubicación.
3. Definir identidad visual final (paleta, tipografías, espaciado consistente).
4. Migrar imágenes `<img>` a `next/image` para performance.
5. Añadir sección de testimonios y formulario de contacto (o WhatsApp CTA).
6. Configurar metadatos OpenGraph y favicon final.
7. Revisar ortografía de assets (ejemplo: `igleisa.jpg`).

## 4) Checklist de lanzamiento
- [ ] Información institucional validada por liderazgo.
- [ ] Horarios confirmados y actualizados.
- [ ] Enlaces de redes funcionando.
- [ ] Lighthouse (mobile) > 80 en Performance/SEO/Accessibility.
- [ ] Deploy en Vercel + dominio configurado + HTTPS.
