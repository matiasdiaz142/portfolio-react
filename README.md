# 🚀 Mi Portfolio Profesional | Matias Diaz

¡Hola! Bienvenido al repositorio de mi portfolio web personal. En este sitio centralizo mi perfil profesional, las tecnologías que utilizo en el día a día y los principales proyectos que he desarrollado, tanto de forma individual como colaborativa, durante mi carrera en la **Universidad Nacional de Hurlingham (UNAHUR)**.

El sitio cuenta con una estética oscura, minimalista y completamente responsiva, diseñada para ofrecer una navegación fluida y un acceso rápido a mi trayectoria.

🔗 **Link del sitio en vivo:** [https://matiasdiaz142.github.io/portfolio-react/](https://matiasdiaz142.github.io/portfolio-react/)

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React.js (Componentes funcionales y Hooks)
* **Herramienta de Construcción:** Vite (Entorno de desarrollo rápido)
* **Estilos:** Tailwind CSS (Diseño utilitario y responsivo)
* **Despliegue:** GitHub Pages (`gh-pages`)

---

## 📂 Proyectos Destacados

El portfolio renderiza dinámicamente mis desarrollos académicos y personales más importantes:

1.  **UnaHur Anti-Social Net - Backend**
    * **Descripción:** MVP de una red social universitaria. Gestión de usuarios, publicaciones y comentarios con lógica de visibilidad temporal configurable.
    * **Tecnologías:** Node.js, Express, MongoDB (Mongoose), Docker, Docker Compose y documentación con Swagger.
2.  **UnaHur Anti-Social Net - Frontend**
    * **Descripción:** Interfaz SPA colaborativa para la red social. Manejo de estados para el registro, autenticación de usuarios y consumo de la API REST propia.
    * **Tecnologías:** React.js, Vite, API REST, CSS3.
3.  **Web - Centro de Robótica**
    * **Descripción:** Sitio web institucional desarrollado para una cátedra universitaria. Diseño responsivo y componentes interactivos avanzados.
    * **Tecnologías:** HTML5, CSS3, Bootstrap y JavaScript puro (Vanilla JS).
4.  **Web - Cafetería**
    * **Descripción:** Sitio web para cátedra universitaria enfocado en la maquetación limpia y adaptabilidad de interfaces.
    * **Tecnologías:** HTML5, CSS3, Bootstrap y JavaScript.
5.  **Space Shooter - Wollok Game**
    * **Descripción:** Videojuego de disparos espacial desarrollado bajo el paradigma de Objetos. Implementa lógica de colisiones, gestión de vidas y eventos de teclado.
    * **Tecnologías:** Wollok (Programación Orientada a Objetos I).

---

## 💻 Guía de Desarrollo Local

Si querés clonar este proyecto y ejecutarlo en tu entorno local, seguí estos pasos:

### 1. Clonar el repositorio
```bash
git clone [https://github.com/matiasdiaz142/portfolio-react.git](https://github.com/matiasdiaz142/portfolio-react.git)
cd portfolio-react

### 2. Instalar dependencias
Para reconstruir de forma limpia la carpeta `node_modules` y evitar los conflictos de Vite con los módulos faltantes:
```bash
npm install

### 3. Correr en modo desarrollo
Levantá el servidor local de Vite para ver los cambios en tiempo real:
```bash
npm run dev

Abrí http://localhost:5173 en tu navegador para revisar el sitio.
---

## 🚀 Flujo de Actualización y Despliegue (Machete)

Para realizar cambios en los datos (`projects.js`, componentes o estilos) y actualizar la web en vivo, se debe seguir este orden exacto en la terminal:

```bash
# 1. Preparar los archivos modificados
git add .

# 2. Confirmar los cambios con un mensaje
git commit -m "Actualizacion de contenido"

# 3. Subir el código fuente a la rama principal
git push origin main

# 4. Compilar el proyecto en la carpeta /dist y publicarlo en GitHub Pages
npm run deploy

---

## 📄 Licencia

Este proyecto es de código abierto y fue desarrollado con fines estrictamente académicos y profesionales.