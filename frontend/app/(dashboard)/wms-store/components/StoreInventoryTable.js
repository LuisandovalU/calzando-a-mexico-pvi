'use client';

export default function StoreInventoryTable({ items }) {
  return (
    <div className="card table-responsive">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Inventario de Tienda</h3>
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">SKU</th>
            <th className="px-4 py-2 text-left">Producto</th>
            <th className="px-4 py-2 text-center">Ubicación</th>
            <th className="px-4 py-2 text-right">Stock</th>
            <th className="px-4 py-2 text-right">Disponible</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 font-bold text-blue-600">{item.sku}</td>
              <td className="px-4 py-3">{item.producto}</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-blue-50 px-3 py-1 rounded-lg text-xs font-medium">
                  {item.ubicacion}
                </span>
              </td>
              <td className="px-4 py-3 text-right font-medium">{item.stock}</td>
              <td className="px-4 py-3 text-right">
                <span className={`font-medium ${item.disponible > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {item.disponible}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
