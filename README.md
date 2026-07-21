# Hostel Andino - Sitio Web Oficial

Proyecto web para el **Hostel Andino** ubicado en Villa Pehuenia, Neuquén, Patagonia Argentina.

## Arquitectura y Tecnologías
- **Frontend**: HTML5 Semántico, Vanilla JavaScript.
- **Estilos**: Tailwind CSS (procesado por Vite), CSS nativo.
- **Backend/API**: Vercel Serverless Functions (`/api/*`).
- **Base de Datos**: Vercel KV (Redis) para almacenar la configuración de las tarifas, secciones de texto, galería e inventario de servicios y banners.
- **Assets**: Cloudinary (para subida y optimización de imágenes desde el panel de administrador).

## Entorno de Desarrollo Local

1. Instalar las dependencias de Node:
   ```bash
   npm install
   ```
2. Compilar estilos e iniciar el servidor de desarrollo en caliente:
   ```bash
   npm run dev
   ```

## Compilación y Despliegue

El proyecto se compila y optimiza usando Vite. Para construir los archivos de producción:
```bash
npm run build
```
Los archivos optimizados se depositan en el directorio `dist/`.

El despliegue está integrado con Vercel. Cualquier "Push" a la rama `main` en GitHub dispara una compilación y despliegue automático.

## Gestión de Base de Datos y Panel de Admin
Para ingresar al panel, dirígete a `/admin/login.html` (o haz clic en el logo del pie de página) e introduce la contraseña de administrador. 
Todos los datos se guardan dinámicamente en Redis de Vercel (KV) a través del archivo `/api/data.js`.
