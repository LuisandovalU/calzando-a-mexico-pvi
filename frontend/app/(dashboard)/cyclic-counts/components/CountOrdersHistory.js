'use client';

export default function CountOrdersHistory({ orders }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendiente':
        return 'bg-yellow-50 text-yellow-800';
      case 'Completada':
        return 'bg-green-50 text-green-800';
      default:
        return '';
    }
  };

  return (
    <div className="card table-responsive">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Órdenes de Conteo Recientes</h3>

      {orders.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No hay órdenes creadas</p>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Folio</th>
              <th className="px-4 py-2 text-left">Tienda</th>
              <th className="px-4 py-2 text-left">Zona</th>
              <th className="px-4 py-2 text-left">Responsable</th>
              <th className="px-4 py-2 text-left">Tareas</th>
              <th className="px-4 py-2 text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-bold text-blue-600">#{order.folio}</td>
                <td className="px-4 py-3">{order.tienda}</td>
                <td className="px-4 py-3">{order.zona}</td>
                <td className="px-4 py-3">{order.responsable}</td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {order.tareas.length}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.estado)}`}>
                    {order.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
