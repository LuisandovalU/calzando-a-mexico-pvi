# Calzando a México - Sistema WMS & BI

Sistema integral de gestión de inventario, análisis ABC y conteos cíclicos para la empresa Calzando a México.

## Descripción del Proyecto

**Calzando a México** es una solución empresarial que integra:

- **BI Dashboard**: Visualización de KPIs, tendencias de ventas e inventario
- **Análisis ABC**: Categorización automática de productos por importancia (Pareto)
- **WMS Cíclico**: Gestión de conteos cíclicos con folios y asignación de tareas
- **Tienda WMS**: Interface para empleados de tienda en conteos

## Características Principales

### Dashboard BI
- KPIs en tiempo real: Stock total, productos, ventas, crecimiento
- Gráficas de tendencias de ventas (líneas)
- Distribución de inventario (donuts)

### Análisis ABC
- Categorización automática de SKUs
- Cálculo de rotación de inventario
- Tabla interactiva con estadísticas por categoría

### Conteos Cíclicos
- **Creación en 5 clics**: Tienda → Zona → Responsable → Incluir Todos/SKUs → Crear
- Generación automática de folios (1000+)
- Historial de órdenes
- Estados: Pendiente → Completada

### WMS Tienda
- Asignación de tareas de conteo
- Confirmación de cantidades por SKU y ubicación
- Vista de inventario en tiempo real

## Estructura del Proyecto

```
calzando-a-mexico-pvi/
├── backend/
│   ├── data/                    # CSVs de datos
│   ├── routes/                  # Endpoints API
│   ├── services/                # Lógica de negocio
│   ├── server.js               # Servidor Express
│   └── package.json
│
├── frontend/
│   ├── app/
│   │   ├── (dashboard)/         # Layout protegido
│   │   │   ├── dashboard/
│   │   │   ├── abc-analysis/
│   │   │   ├── cyclic-counts/
│   │   │   └── wms-store/
│   │   ├── page.js              # Login
│   │   └── layout.js
│   ├── lib/api.js               # Cliente HTTP
│   ├── public/
│   └── package.json
│
└── README.md
```

## Stack Tecnológico

### Backend
- **Node.js + Express**: API REST
- **CSV-Parse**: Lectura de archivos
- **CORS**: Integración frontend-backend

### Frontend
- **Next.js 14**: Framework React con App Router
- **Tailwind CSS**: Estilos
- **Recharts**: Gráficas
- **Axios**: HTTP client

## Instalación

### Backend

```bash
cd backend
npm install
npm run dev  # Desarrollo con nodemon
# o
npm start    # Producción
```

Servidor en `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm run dev  # Desarrollo
# o
npm run build && npm start  # Producción
```

App en `http://localhost:3000`

## API Endpoints

### Analytics
- `GET /api/analytics/abc-analysis` - Análisis ABC
- `GET /api/analytics/statistics` - Estadísticas ABC

### Dashboard
- `GET /api/dashboard/kpis` - KPIs
- `GET /api/dashboard/sales-trend` - Tendencia de ventas
- `GET /api/dashboard/inventory-distribution` - Distribución inventario

### WMS
- `POST /api/wms/cyclic-count/create` - Crear orden
- `GET /api/wms/cyclic-count/orders` - Listar órdenes
- `POST /api/wms/cyclic-count/:orderId/task/:taskId` - Actualizar tarea

## Datos de Prueba

Coloca los archivos CSV en `backend/data/`:
- `INVENTARIO 2024.csv`
- `VENTA 2023.csv`
- `VENTA 2024.csv`
- `Matriz de Roles As Is.csv`

## Flujo de Uso

### 1. Login
Usuario ingresa a `/` con credenciales

### 2. Dashboard
Visualiza KPIs y gráficas de negocio

### 3. Análisis ABC
Revisa categorización de productos por importancia

### 4. Conteos Cíclicos
- Crea órdenes de conteo (5 clics)
- Asigna responsables
- Visualiza histórico

### 5. WMS Tienda
Empleados confirman cantidades de inventario

## Variables de Entorno

### Backend (`.env`)
```
PORT=5000
```

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Pruebas

### Backend
```bash
npm test  # (a implementar)
```

### Frontend
```bash
npm test  # (a implementar)
npm run lint
```

## Notas de Desarrollo

- El login es simulado (botón directo a dashboard)
- Los datos de WMS se guardan en memoria (sin BD)
- Los gráficos utilizan datos simulados (integrar con backend en prod)
- Falta autenticación real (JWT recomendado)

## Próximos Pasos

- [ ] Implementar autenticación con JWT
- [ ] Integrar base de datos (PostgreSQL)
- [ ] Exportar reportes PDF
- [ ] Notificaciones en tiempo real (WebSockets)
- [ ] Sincronización móvil
- [ ] Tests unitarios

## Autor

Equipo de Desarrollo - Calzando a México by The Deoders

## Licencia

Privado - Calzando a México 2025
