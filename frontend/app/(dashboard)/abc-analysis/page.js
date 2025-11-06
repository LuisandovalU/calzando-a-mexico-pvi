'use client';

import { useEffect, useState } from 'react';
import { analyticsAPI } from '@/lib/api';
import ABCTable from './components/ABCTable';
import KpiCard from '../dashboard/components/KpiCard';

export default function ABCAnalysisPage() {
  const [data, setData] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [dataRes, statsRes] = await Promise.all([
          analyticsAPI.getABCAnalysis(),
          analyticsAPI.getStatistics(),
        ]);

        setData(dataRes.data);
        setStats(statsRes.data);
      } catch (error) {
        console.error('Error loading ABC analysis:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Análisis ABC</h1>

      {/* Statistics */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Total de Productos"
            value={stats.totalProductos}
            color="blue"
          />
          <KpiCard
            title="Categoría A"
            value={stats.categoriaA.cantidad}
            subtitle={`${stats.categoriaA.porcentaje}% del total`}
            color="red"
          />
          <KpiCard
            title="Categoría B"
            value={stats.categoriaB.cantidad}
            subtitle={`${stats.categoriaB.porcentaje}% del total`}
            color="orange"
          />
          <KpiCard
            title="Categoría C"
            value={stats.categoriaC.cantidad}
            subtitle={`${stats.categoriaC.porcentaje}% del total`}
            color="green"
          />
        </div>
      )}

      {/* ABC Table */}
      <ABCTable data={data} />
    </div>
  );
}
