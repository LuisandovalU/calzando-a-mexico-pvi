# 🚀 Quick Start - Calzando a México

Guía rápida para poner el proyecto en funcionamiento.

## 1️⃣ Clonar o Descargar

```bash
cd /Users/luisalbertosandovalramos
# El proyecto ya está en: calzando-a-mexico-pvi/
```

## 2️⃣ Backend (Terminal 1)

```bash
cd calzando-a-mexico-pvi/backend

# Copiar archivo de variables de entorno
cp .env.example .env

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

✅ El backend estará en: `http://localhost:5000`

Test rápido:
```bash
curl http://localhost:5000/health
# Respuesta: {"status":"OK","timestamp":"2024-01-01T12:00:00.000Z"}
```

## 3️⃣ Frontend (Terminal 2)

```bash
cd calzando-a-mexico-pvi/frontend

# Copiar archivo de variables de entorno
cp .env.example .env.local

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

✅ La aplicación estará en: `http://localhost:3000`

## 4️⃣ Login y Prueba

1. Abre `http://localhost:3000` en el navegador
2. En la pantalla de login, ingresa:
   - **Email**: cualquiera (ej: admin@test.com)
   - **Contraseña**: cualquiera (ej: 123456)
3. Haz clic en "Ingresar"

## 📊 Rutas Disponibles

### Dashboard
- `/dashboard` - KPIs y gráficas

### Análisis ABC
- `/abc-analysis` - Categorización de productos

### Conteos Cíclicos
- `/cyclic-counts` - Crear órdenes de conteo

### WMS Tienda
- `/wms-store` - Asignación de tareas

## 📁 Datos de Prueba

Para que funcione el análisis ABC con datos reales, coloca estos archivos en `backend/data/`:

- `INVENTARIO 2024.csv`
- `VENTA 2023.csv`
- `VENTA 2024.csv`
- `Matriz de Roles As Is.csv`

**Nota**: Sin estos archivos, el sistema funcionará con datos simulados.

## 🛑 Detener Servidores

- Backend: `Ctrl+C` en Terminal 1
- Frontend: `Ctrl+C` en Terminal 2

## 🐛 Troubleshooting

**Puerto 5000 ya en uso:**
```bash
# Cambiar puerto en backend/.env
PORT=3001
```

**Port 3000 ya en uso:**
```bash
# Ejecutar Next.js en otro puerto
npm run dev -- -p 3001
```

**Errores de módulos:**
```bash
# Limpiar cache
rm -rf node_modules package-lock.json
npm install
```

## 📚 Documentación Completa

Ver `README.md` para documentación detallada.
