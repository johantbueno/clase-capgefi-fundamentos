# Fundamentos de Planificación y Gestión de la Inversión Pública del Estado

Web híbrida educativa interactiva para el curso del Diplomado en Hacienda e Inversión Pública del CAPGEFI.

## 🎯 Descripción

Esta aplicación web proporciona una experiencia de aprendizaje completa e interactiva para estudiantes del curso "Fundamentos de Planificación y Gestión de la Inversión Pública del Estado". Incluye:

- 📚 **5 Unidades completas** con todo el contenido del curso
- 🎮 **Módulo de juego/quiz** con 15 preguntas interactivas
- 💬 **Foro de preguntas y respuestas** funcional
- 📱 **Diseño responsive** para todos los dispositivos

## 🚀 Demo en Vivo

Visita la aplicación desplegada: [GitHub Pages URL]

## 🛠️ Tecnologías

- **React 18** + **TypeScript**
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes UI
- **Vite** como build tool
- **Lucide React** para iconos

## 📋 Contenido del Curso

### Unidad I: El Sistema Nacional de Planificación e Inversión Pública
- Contexto histórico y reforma de 2006
- Conceptos fundamentales de planificación
- Componentes y principios del SNPIP
- Ámbitos de aplicación y procesos

### Unidad II: Estructura del SNPIP
- Consejo de Gobierno
- Comisión Técnica Delegada
- MEPyD y UIPyD
- Consejos Territoriales

### Unidad III: Instrumentos de Planificación
- Estrategia Nacional de Desarrollo (END) 2030
- Plan Nacional Plurianual (PNPSP)
- Planes Sectoriales, Institucionales y Territoriales
- Políticas Transversales

### Unidad IV: Temáticas Vinculadas
- Articulación inter-sistémica
- Gestión para Resultados (GpRD)
- Cooperación Internacional
- Cadena de Valor Pública

### Unidad V: Ciclo de Vida de un Proyecto
- Etapas de preinversión
- Marco Lógico (MML)
- Sistema Nacional de Inversión Pública (SNIP)
- Normas Técnicas

## 🎮 Características del Juego

- 15 preguntas de opción múltiple
- Temporizador de 30 segundos por pregunta
- Sistema de puntuación con bonificaciones
- Retroalimentación inmediata
- Racha de respuestas correctas

## 💬 Foro Q&A

- Publicar nuevas preguntas
- Responder preguntas existentes
- Filtrar por categorías
- Sistema de "me gusta"
- Respuestas oficiales del facilitador

## 📦 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/snpip-web.git

# Entrar al directorio
cd snpip-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🌐 Despliegue en GitHub Pages

1. Crea un nuevo repositorio en GitHub
2. Sube el contenido de la carpeta `dist/` al branch `gh-pages`
3. O usa GitHub Actions para automatizar el despliegue:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 👨‍🏫 Facilitador

**Johan Tapia PhD**
- Centro de Capacitación en Política y Gestión Fiscal (CAPGEFI)
- [LinkedIn](https://www.linkedin.com/in/johan-tapia-192183281/)
- 📧 j.tapia@capgefi.edu.do

## 📄 Licencia

Este proyecto es de uso educativo para estudiantes del diplomado en Hacienda e Inversión Pública.

## 🙏 Créditos

- CAPGEFI - Centro de Capacitación en Política y Gestión Fiscal
- Ministerio de Economía, Planificación y Desarrollo (MEPyD)
- República Dominicana

---

> "La planificación no nos resuelve el futuro, solo nos ayuda a reducir la incertidumbre sobre él" — Miriam Soriano
