'use client';

import { useState } from 'react';
import { wmsAPI } from '@/lib/api';

export default function CreateCountOrderForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    tienda: '',
    zona: '',
    responsable: '',
    incluirTodos: true,
    sku: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const payload = {
        tienda: formData.tienda,
        zona: formData.zona,
        responsable: formData.responsable,
        incluirTodos: formData.incluirTodos,
        sku: formData.incluirTodos ? [] : formData.sku.split(',').map((s) => s.trim()),
      };

      const response = await wmsAPI.createCyclicCount(payload);
      setMessage(`✓ Orden creada: Folio #${response.data.folio}`);
      
      // Reset form
      setFormData({
        tienda: '',
        zona: '',
        responsable: '',
        incluirTodos: true,
        sku: '',
      });

      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (error) {
      setMessage('✗ Error al crear la orden');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Crear Orden de Conteo (5 Clics)</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Click 1: Tienda */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tienda</label>
            <input
              type="text"
              name="tienda"
              value={formData.tienda}
              onChange={handleChange}
              placeholder="Ej: Tienda Centro"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Click 2: Zona */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Zona</label>
            <input
              type="text"
              name="zona"
              value={formData.zona}
              onChange={handleChange}
              placeholder="Ej: A"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Click 3: Responsable */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Responsable</label>
            <input
              type="text"
              name="responsable"
              value={formData.responsable}
              onChange={handleChange}
              placeholder="Nombre"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Click 4: Checkbox */}
        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="incluirTodos"
              checked={formData.incluirTodos}
              onChange={handleChange}
              className="w-4 h-4 rounded"
            />
            <span className="text-sm font-medium text-gray-700">Contar todo el inventario</span>
          </label>
        </div>

        {/* Click 5: SKUs específicos */}
        {!formData.incluirTodos && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">SKUs (separados por coma)</label>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="SKU001, SKU002, SKU003"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary disabled:opacity-50"
        >
          {loading ? 'Creando...' : 'Crear Orden de Conteo'}
        </button>

        {message && (
          <p className={`text-sm text-center ${message.startsWith('✓') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
