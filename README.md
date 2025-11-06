# Calzando a México - Sistema WMS, BI & IBM watsonx Integration

**Transformando la gestión de inventario y toma de decisiones con inteligencia artificial, automatización y análisis de datos.**

---

## 📘 Visión del Proyecto

**Calzando a México** enfrenta un problema crítico de Exactitud de Registro de Inventario (ERI ≈ 60%), derivado de procesos manuales, desarticulados y lentos.  
Esta situación genera dos pérdidas operativas significativas:

- **Sobre-inventario:** exceso de productos sin rotación.
- **Venta perdida:** falta de disponibilidad del producto correcto para el cliente.

**La solución:**  
Una **Plataforma de Inventario Inteligente (I.I.)**, basada en un **WMS (Warehouse Management System)** y un **BI Dashboard**, que automatiza la gestión, análisis y toma de decisiones con **IBM watsonx Orchestrate**.

Esta plataforma busca:
- Aumentar la exactitud del inventario.
- Optimizar la rotación de productos.
- Digitalizar el flujo operativo completo entre CEDIS y tiendas.
- Convertir los datos en información accionable mediante IA.

---

## 🧠 Integración con IBM watsonx Orchestrate

### Descripción General
El sistema WMS “Calzando a México” incorpora **IBM watsonx Orchestrate** para automatizar el análisis inteligente de datos y ofrecer asistencia cognitiva dentro del panel principal (Dashboard).

Watsonx procesa información de inventario, ventas y rendimiento, generando:
- Recomendaciones inteligentes en tiempo real.
- Alertas preventivas.
- Resúmenes ejecutivos redactados en lenguaje natural.

### Flujo de Integración

1. **Captura de datos:**  
   Recolección de información clave (ventas, stock, rotación, ubicaciones).

2. **Procesamiento en watsonx:**  
   Los datos se envían al servicio de IA para su análisis semántico y estadístico.

3. **Análisis inteligente:**  
   Identifica tendencias, anomalías o comportamientos relevantes:
   - Caídas o picos de venta.
   - Sobreinventario.
   - Alertas de baja rotación.

4. **Retroalimentación automática:**  
   El dashboard muestra un resumen claro con **insights** y **acciones sugeridas**.

### Automatizaciones Clave

- Análisis automático de KPIs.
- Alertas de rendimiento anticipadas.
- Recomendaciones proactivas.
- Aprendizaje continuo basado en histórico.

### Beneficios

- **Eficiencia:** menos tiempo analizando, más decisiones estratégicas.  
- **Precisión:** detección temprana de problemas de stock o ventas.  
- **Visión integral:** correlación entre ventas, rotación e inventario.  
- **Escalabilidad:** integración a proyecciones de demanda o pedidos.

---

## 🏗️ Arquitectura de la Solución

### Módulos Principales

1. **Dashboard BI**
   - KPIs en tiempo real: Stock total, ventas, crecimiento.
   - Gráficas: líneas (tendencias), donuts (inventario).
   - Recomendaciones automáticas (IBM watsonx).

2. **Análisis ABC**
   - Clasificación A/B/C por rotación.
   - Política de conteos inteligentes:
     - A → Diario
     - B → Semanal
     - C → Quincenal

3. **Conteos Cíclicos**
   - Creación en 5 clics: Tienda → Zona → Responsable → SKUs → Crear.
   - Folios automáticos (1000+).
   - Estados: Pendiente / Completada.
   - Historial de órdenes.

4. **WMS Tienda**
   - Confirmación de conteos.
   - Visualización por ubicación (ej. `BOD-A-01`, `PISO-M-02`).
   - Actualización en tiempo real.

---

## 🧩 Estructura del Proyecto

```
calzando-a-mexico-pvi/
├── backend/
│   ├── data/                    # CSVs de datos
│   ├── routes/                  # Endpoints API
│   ├── services/                # Lógica de negocio
│   ├── server.js                # Servidor Express
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
└── README.markdown
```

---

## ⚙️ Stack Tecnológico

### Backend
- **Node.js + Express** → API REST.
- **CSV-Parse** → Lectura de datos.
- **CORS** → Integración frontend-backend.

### Frontend
- **Next.js 14** → Framework React con App Router.
- **Tailwind CSS** → Estilos modernos.
- **Recharts** → Gráficas dinámicas.
- **Axios** → Cliente HTTP.

### Inteligencia Artificial
- **IBM watsonx Orchestrate** → Análisis predictivo, insights y automatización cognitiva.

---

## 🚀 Instalación

### Backend
```bash
cd backend
npm install
npm run dev   # Modo desarrollo
# o
npm start     # Producción
```
Servidor en `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm run dev   # Desarrollo
# o
npm run build && npm start  # Producción
```
App en `http://localhost:3000`

---

## 🔌 API Endpoints

### Analytics
- `GET /api/analytics/abc-analysis`
- `GET /api/analytics/statistics`

### Dashboard
- `GET /api/dashboard/kpis`
- `GET /api/dashboard/sales-trend`
- `GET /api/dashboard/inventory-distribution`

### WMS
- `POST /api/wms/cyclic-count/create`
- `GET /api/wms/cyclic-count/orders`
- `POST /api/wms/cyclic-count/:orderId/task/:taskId`

---

## 🧪 Datos de Prueba

Coloca los siguientes CSV en `backend/data/`:
- `INVENTARIO 2024.csv`
- `VENTA 2023.csv`
- `VENTA 2024.csv`
- `Matriz de Roles As Is.csv`

---

## 🔄 Flujo de Uso

1. **Login:** ingreso simulado.
2. **Dashboard:** visualización de KPIs, insights y alertas IA.
3. **Análisis ABC:** clasificación automática por rotación.
4. **Conteos Cíclicos:** creación y seguimiento de órdenes.
5. **WMS Tienda:** ejecución y confirmación de conteos.

---

## 🔐 Variables de Entorno

### Backend (`.env`)
```
PORT=5000
```

### Frontend (`.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🧱 Roadmap

- [ ] Autenticación real (JWT).
- [ ] Integración con PostgreSQL.
- [ ] Exportación de reportes PDF.
- [ ] Notificaciones en tiempo real (WebSockets).
- [ ] Sincronización móvil.
- [ ] Pruebas unitarias.
- [ ] Expansión de IA (proyecciones de demanda).

---

## 🧭 Estructura Organizacional To-Be

- **Gerente de Operaciones de Tienda.**
- **Supervisor de Recibo.**
- **Jefe de Control de Inventarios.**
- **Supervisor de Bodega (WMS).**
- **Supervisor de Piso de Venta.**

> Centralización de funciones → eficiencia y trazabilidad total.

---

## 📊 KPIs por Nivel

| Nivel        | Métricas Clave |
|---------------|----------------|
| **Estratégico** | Rotación general, % venta perdida, ERI nacional |
| **Táctico** | Días de inventario, ERI por tienda, % conteos completados |
| **Operativo** | Folios generados vs. completados, piezas contadas/día |

---

## 👥 Autoría

**Equipo de Desarrollo - Calzando a México by The Deoders**  
Con integración cognitiva impulsada por **IBM watsonx Orchestrate**

---

## ⚖️ Licencia

Privado – Calzando a México © 2025  
Uso restringido a fines académicos y empresariales.

---
