# 📋 Esquema de Archivos CSV

Este documento especifica la estructura esperada de los archivos CSV para que el sistema funcione correctamente.

## 📦 INVENTARIO 2024.csv

Archivo con el inventario actual de productos.

### Columnas Requeridas:
```
SKU,Producto,Stock,Ubicacion,Precio,Categoria
```

### Ejemplo:
```csv
SKU,Producto,Stock,Ubicacion,Precio,Categoria
SKU001,Zapatos Deportivos,45,A1,599.99,Hombre
SKU002,Zapatos Casuales,30,A2,449.99,Mujer
SKU003,Botas de Trabajo,15,B1,799.99,Unisex
SKU004,Sandalias,60,B2,299.99,Mujer
SKU005,Zapatillas,25,C1,349.99,Niño
```

---

## 💰 VENTA 2023.csv

Archivo con las ventas del año 2023.

### Columnas Requeridas:
```
SKU,Producto,Cantidad,Fecha,Monto,Tienda
```

### Ejemplo:
```csv
SKU,Producto,Cantidad,Fecha,Monto,Tienda
SKU001,Zapatos Deportivos,120,2023-01-15,71999,Centro
SKU002,Zapatos Casuales,85,2023-02-10,38249,Centro
SKU003,Botas de Trabajo,40,2023-03-20,31996,Norte
SKU001,Zapatos Deportivos,95,2023-04-05,56999,Sur
SKU004,Sandalias,150,2023-05-12,44985,Centro
```

---

## 💰 VENTA 2024.csv

Archivo con las ventas del año 2024 (año actual).

### Columnas Requeridas:
```
SKU,Producto,Cantidad,Fecha,Monto,Tienda
```

### Ejemplo:
```csv
SKU,Producto,Cantidad,Fecha,Monto,Tienda
SKU001,Zapatos Deportivos,150,2024-01-10,89999,Centro
SKU002,Zapatos Casuales,95,2024-02-05,42749,Norte
SKU003,Botas de Trabajo,55,2024-03-15,43945,Sur
SKU004,Sandalias,180,2024-04-20,53982,Centro
SKU005,Zapatillas,110,2024-05-08,38439,Centro
```

---

## 👥 Matriz de Roles As Is.csv

Archivo con la matriz de roles y permisos del personal.

### Columnas Requeridas:
```
Empleado,Rol,Tienda,Permisos,Estado
```

### Ejemplo:
```csv
Empleado,Rol,Tienda,Permisos,Estado
Juan Pérez,Gerente,Centro,ADMIN,Activo
María López,Supervisor,Norte,SUPERVISOR,Activo
Carlos Ruiz,Contador,Sur,READER,Activo
Ana García,Operario,Centro,OPERATOR,Activo
Roberto Sánchez,Operario,Norte,OPERATOR,Activo
```

---

## 📊 Descripción de Campos

### INVENTARIO 2024.csv

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| SKU | Texto | Código único del producto | SKU001 |
| Producto | Texto | Nombre del producto | Zapatos Deportivos |
| Stock | Número | Cantidad en inventario | 45 |
| Ubicacion | Texto | Ubicación física en almacén | A1 |
| Precio | Decimal | Precio unitario | 599.99 |
| Categoria | Texto | Categoría del producto | Hombre |

### VENTA 2023.csv / VENTA 2024.csv

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| SKU | Texto | Código único del producto | SKU001 |
| Producto | Texto | Nombre del producto | Zapatos Deportivos |
| Cantidad | Número | Unidades vendidas | 120 |
| Fecha | Fecha | Fecha de la venta (YYYY-MM-DD) | 2023-01-15 |
| Monto | Decimal | Monto total de la venta | 71999 |
| Tienda | Texto | Sucursal donde se realizó | Centro |

### Matriz de Roles As Is.csv

| Campo | Tipo | Descripción | Ejemplo |
|-------|------|-------------|---------|
| Empleado | Texto | Nombre del empleado | Juan Pérez |
| Rol | Texto | Rol del empleado | Gerente |
| Tienda | Texto | Tienda asignada | Centro |
| Permisos | Texto | Nivel de permisos | ADMIN |
| Estado | Texto | Estado del empleado | Activo |

---

## 🎯 Notas Importantes

1. **Encabezados**: Los nombres de las columnas deben coincidir exactamente
2. **Codificación**: Usar UTF-8 sin BOM
3. **Delimitador**: Usar coma (,)
4. **Decimales**: Usar punto (.) no coma
5. **Fechas**: Formato YYYY-MM-DD
6. **Campos vacíos**: Dejar vacío si no hay valor, no usar "N/A" o "-"
7. **Rutas**: Colocar archivos en `backend/data/`

---

## 📍 Ubicación de Archivos

```
calzando-a-mexico-pvi/
└── backend/
    └── data/
        ├── INVENTARIO 2024.csv
        ├── VENTA 2023.csv
        ├── VENTA 2024.csv
        └── Matriz de Roles As Is.csv
```

---

## ⚙️ Procesamiento Automático

El sistema automáticamente:

1. **Carga los CSVs** cuando el servidor inicia
2. **Calcula el Análisis ABC** basado en ventas vs stock
3. **Genera estadísticas** de rotación de inventario
4. **Compara** 2023 vs 2024 para KPIs

## 🚀 Cómo Cargar los Datos

1. Prepara tus archivos CSV siguiendo este esquema
2. Colócalos en `backend/data/`
3. Reinicia el servidor backend: `npm run dev`
4. El sistema los cargará automáticamente

¡Listo! Los datos aparecerán en el dashboard y análisis ABC.
