'use client';

export default function ABCTable({ data }) {
  const getColorByCategory = (category) => {
    switch (category) {
      case 'A':
        return 'bg-red-50 text-red-800';
      case 'B':
        return 'bg-yellow-50 text-yellow-800';
      case 'C':
        return 'bg-green-50 text-green-800';
      default:
        return '';
    }
  };

  return (
    <div className="card table-responsive">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Análisis ABC</h3>
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">SKU</th>
            <th className="px-4 py-2 text-right">Ventas Anuales</th>
            <th className="px-4 py-2 text-right">Stock</th>
            <th className="px-4 py-2 text-right">Rotación</th>
            <th className="px-4 py-2 text-right">% Acumulado</th>
            <th className="px-4 py-2 text-center">Categoría</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-4 py-3">{item.SKU || item.Producto}</td>
              <td className="px-4 py-3 text-right">{item.ventasAnuales}</td>
              <td className="px-4 py-3 text-right">{item.Stock}</td>
              <td className="px-4 py-3 text-right">{item.rotacion?.toFixed(2)}</td>
              <td className="px-4 py-3 text-right">{item.porcentajeAcumulado}%</td>
              <td className="px-4 py-3 text-center">
                <span className={`px-3 py-1 rounded-full font-bold ${getColorByCategory(item.categoria)}`}>
                  {item.categoria}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
