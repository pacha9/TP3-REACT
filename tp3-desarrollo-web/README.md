# Trabajo Práctico N.º 3 — Datos externos con useEffect

Este proyecto fue desarrollado para la materia Desarrollo Web (2º Año - Tecnicatura en Análisis de Sistemas Informáticos). Consume datos de una API externa utilizando Axios y maneja de forma condicional los estados de carga, éxito y error.

## Configuración de Variables de Entorno

Por motivos de seguridad y buenas prácticas, las credenciales y URLs base no se encuentran harcodeadas en el código fuente. Para levantar el proyecto de forma local, debe crear un archivo `.env` en la raíz del directorio principal.

Agregue la siguiente variable de entorno dentro del archivo `.env`:

```env
VITE_API_URL=https://typicode.com
```

*Nota: El archivo `.env` se encuentra correctamente configurado dentro de `.gitignore` para evitar que sea subido al repositorio público.*
