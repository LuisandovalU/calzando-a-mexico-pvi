'use client';

import { useState } from 'react';
import { wmsAPI } from '@/lib/api';

export default function AssignedCountTask({ task, orderId, onTaskComplete }) {
  const [quantity, setQuantity] = useState(task.cantidad);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const response = await wmsAPI.updateTask(orderId, task.id, {
        cantidadContada: quantity,
      });
      if (onTaskComplete) {
        onTaskComplete(response.data);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-bold text-gray-800">{task.sku}</h4>
          <p className="text-sm text-gray-500">Ubicación: {task.ubicacion}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          task.estado === 'Completada'
            ? 'bg-green-50 text-green-800'
            : 'bg-yellow-50 text-yellow-800'
        }`}>
          {task.estado}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad Contada</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            disabled={task.estado === 'Completada'}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={submitting || task.estado === 'Completada'}
          className="w-full btn-primary disabled:opacity-50"
        >
          {submitting ? 'Guardando...' : 'Confirmar Cantidad'}
        </button>
      </div>
    </div>
  );
}
