'use client';

import { useEffect, useState } from 'react';
import { wmsAPI } from '../../../lib/api';
import AssignedCountTask from './components/AssignedCountTask';
import StoreInventoryTable from './components/StoreInventoryTable';

export default function WmsStorePage() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const mockInventory = [
    { sku: 'SKU001', producto: 'Zapatos Deportivos', ubicacion: 'A1', stock: 45, disponible: 42 },
    { sku: 'SKU002', producto: 'Zapatos Casuales', ubicacion: 'A2', stock: 30, disponible: 28 },
    { sku: 'SKU003', producto: 'Botas de Trabajo', ubicacion: 'B1', stock: 15, disponible: 12 },
    { sku: 'SKU004', producto: 'Sandalias', ubicacion: 'B2', stock: 60, disponible: 55 },
  ];

  useEffect(() => {
    async function loadData() {
      try {
        const response = await wmsAPI.getCyclicCountOrders();
        setOrders(response.data);
        if (response.data.length > 0) {
          setSelectedOrder(response.data[0]);
        }
      } catch (error) {
        console.error('Error loading orders:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const handleTaskComplete = (updatedOrder) => {
    setSelectedOrder(updatedOrder);
    setOrders((prev) =>
      prev.map((o) => (o.id === updatedOrder.id ? updatedOrder : o))
    );
  };

  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">WMS - Tienda</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Orders List */}
        <div className="lg:col-span-1">
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Mis Órdenes</h3>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {orders.length === 0 ? (
                <p className="text-gray-500 text-sm">Sin órdenes asignadas</p>
              ) : (
                orders.map((order) => (
                  <button
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      selectedOrder?.id === order.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <p className="font-bold">#{order.folio}</p>
                    <p className="text-xs">{order.tienda}</p>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Right: Tasks and Inventory */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tasks */}
          {selectedOrder && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">Orden #{selectedOrder.folio}</h2>
                <p className="text-sm text-gray-600">
                  Responsable: {selectedOrder.responsable} | Zona: {selectedOrder.zona}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {selectedOrder.tareas.map((task) => (
                  <AssignedCountTask
                    key={task.id}
                    task={task}
                    orderId={selectedOrder.id}
                    onTaskComplete={handleTaskComplete}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Inventory Table */}
          <StoreInventoryTable items={mockInventory} />
        </div>
      </div>
    </div>
  );
}
