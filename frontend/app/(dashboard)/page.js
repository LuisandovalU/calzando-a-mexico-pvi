// frontend/app/(dashboard)/inventory/product-details/page.js
'use client';

// Nota: Las clases 'card', 'btn-primary' y los colores se toman de tu globals.css y tailwind.config.mjs

export default function ProductDetailsPage() {
  
  // Componente simple para simular los Toggles (Activo/Inactivo)
  const Toggle = ({ initial = true }) => {
    return (
      <div 
        className={`w-10 h-6 rounded-full relative cursor-pointer transition-all duration-300 ${
          initial ? 'bg-blue-600' : 'bg-gray-300'
        }`}
      >
        <div 
          className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-transform duration-300 shadow-md ${
            initial ? 'translate-x-4 right-0.5' : 'translate-x-0.5 left-0.5'
          }`}
        ></div>
      </div>
    );
  };
  
  // Función de utilidad para colorear el texto de cambio (crecimiento)
  const getStatColor = (value) => {
    if (value.includes('+') || parseFloat(value) > 0) return 'text-green-600';
    if (value.includes('-') || parseFloat(value) < 0) return 'text-red-600';
    return 'text-gray-600';
  };
    
  return (
    <div className="space-y-6">
      
      {/* --- 1. Header de la Página con Breadcrumb --- */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Productos</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Inventario</span>
            <i className="fas fa-chevron-right text-xs"></i>
            <span>Productos</span>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="font-semibold text-gray-900">Mesa Virello</span>
        </div>
      </div>

      {/* --- 2. Bloque Principal del Producto (Product Header) --- */}
      <div className="card">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          <i className="fas fa-cube"></i> Detalles del Producto
        </h2>
        
        <div className="flex gap-6 items-start">
          {/* Icono del Producto */}
          <div className="w-20 h-20 bg-orange-50 rounded-lg flex items-center justify-center text-4xl">🪑</div>
          
          {/* Información y Toggles */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Mesa Virello</h3>
              <span className="text-gray-500 text-sm font-medium">TBL-LEG</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Activo</span>
            </div>
            
            {/* Toggles */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Activo</span>
                <Toggle />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Vender</span>
                <Toggle />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Rastrear Cantidad</span>
                <Toggle initial={false} />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>PDV</span>
                <Toggle />
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Producir</span>
                <Toggle initial={false} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Grid de Detalles */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 border-t pt-6">
          {[
            { label: 'Código de Producto', icon: 'fas fa-barcode', value: 'TBL-LEG' },
            { label: 'Cuenta de Inventario', icon: 'fas fa-warehouse', value: '12 - Mercancías' },
            { label: 'Categoría', icon: 'fas fa-tags', value: 'Mobiliario - Mesa' },
            { label: 'Nota', icon: 'fas fa-sticky-note', value: 'CL-09471' },
            { label: 'Unidad de Medida', icon: 'fas fa-ruler', value: 'ud (Unidad)' },
            { label: 'Tasa de Impuestos', icon: 'fas fa-percentage', value: 'IVA 5%' },
            { label: 'Costo por Unidad', icon: 'fas fa-dollar-sign', value: '$6.34' },
            { label: 'Stock Mínimo', icon: 'fas fa-layer-group', value: '0.00' },
          ].map((detail, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <i className={detail.icon}></i> {detail.label}
              </div>
              <div className="text-base font-medium text-gray-900">{detail.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. Fila de Estadísticas (KPI Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Ventas Totales', value: '$ 28,473.84', comparison: 'vs. el mes pasado 7000', change: '+108.16%' },
          { title: 'Beneficio Bruto Total', value: '$ 10,959.50', comparison: 'vs. el mes pasado 4,000', change: '+43.5%' },
          { title: 'Margen de Rentabilidad', value: '38.49%', comparison: 'vs. el mes pasado 26%', change: '+15%' },
        ].map((stat, index) => (
          <div key={index} className="card">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">{stat.title}</span>
              <i className="fas fa-ellipsis-h text-gray-300"></i>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
              <span>{stat.comparison}</span>
              <span className={`font-semibold ${getStatColor(stat.change)} flex items-center gap-1`}>
                <i className={`fas fa-arrow-up`}></i> {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* --- 4. Vista General del Stock (Stock Overview) --- */}
      <div className="card">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
            <i className="fas fa-chart-bar"></i> Vista General del Stock
          </h3>
          <i className="fas fa-ellipsis-h text-gray-300 cursor-pointer"></i>
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 border-b-2 border-gray-100 mb-6 overflow-x-auto">
          {['Ventas', 'Fabricación', 'Movimientos de Stock', 'Inventario Físico', 'PDV', 'Consumo', 'Archivos'].map((tab, index) => (
            <div 
              key={tab} 
              className={`pb-3 cursor-pointer relative text-sm whitespace-nowrap ${
                index === 0 ? 'text-blue-600 font-medium after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[2px] after:bg-blue-600' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-6">
          Actualmente 30.4%, indicando la fase final de uso del stock
        </p>

        {/* Métricas de Stock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {[
            { label: 'Valor Total', icon: 'fas fa-dollar-sign', value: '$6,240.28' },
            { label: 'Stock Esperado', icon: 'fas fa-boxes', value: '12.22K' },
          ].map((metric, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <i className={`${metric.icon} text-blue-600 text-lg`}></i>
                {metric.label}
              </div>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Barras de Progreso */}
        <div className="space-y-5 mb-8">
          {[
            { title: 'Stock Disponible', current: '12.22K', total: '34K', status: 'Listo para usar o vender', percentage: 36 },
            { title: 'Stock Reservado', current: '11.54K', total: '34K', status: 'Asignado para pedidos', percentage: 34 },
          ].map((bar, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1 text-sm">
                <span className="text-gray-600">{bar.title}</span>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-blue-600">{bar.current}</span>
                  <span className="text-gray-400">{bar.total}</span>
                  <span className="text-green-600 text-xs">{bar.status}</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
                <div 
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" 
                  style={{ width: `${bar.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla */}
        <div className="table-container mt-6">
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg mb-4 border">
            <div className="flex items-center gap-2">
              <i className="fas fa-tag"></i>
              <span className="text-sm font-semibold">Mostrar Precios e Inventario</span>
            </div>
            <i className="fas fa-chevron-down cursor-pointer text-gray-500"></i>
          </div>

          <div className="table-responsive">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left">Referencia</th>
                  <th className="px-4 py-3 text-left">Fecha</th>
                  <th className="px-4 py-3 text-right">Cantidad</th>
                  <th className="px-4 py-3 text-right">Precio</th>
                  <th className="px-4 py-3 text-right">Margen</th>
                  <th className="px-4 py-3 text-right">Costo</th>
                  <th className="px-4 py-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ref: 'SL30-7-FF', date: '30/11/2025', qty: '4.50', price: 'USD 55.20', margin: '45.10%', cost: 'USD 300.00', total: 'USD 300.00' },
                  { ref: 'SL35-6-FF', date: '15/12/2025', qty: '2.75', price: 'USD 36.50', margin: '40.00%', cost: 'USD 150.00', total: 'USD 150.00' },
                  { ref: 'SL40-5-FF', date: '05/01/2026', qty: '5.00', price: 'USD 70.00', margin: '50.23%', cost: 'USD 350.00', total: 'USD 350.00' },
                ].map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{item.ref}</td>
                    <td className="px-4 py-3">{item.date}</td>
                    <td className="px-4 py-3 text-right">{item.qty}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">{item.price}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{item.margin}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">{item.cost}</td>
                    <td className="px-4 py-3 text-right font-semibold text-gray-900">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}