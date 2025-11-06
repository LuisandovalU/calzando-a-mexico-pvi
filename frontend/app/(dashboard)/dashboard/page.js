'use client';

import { useEffect, useState } from 'react';
import { dashboardAPI } from '@/lib/api';
import KpiCard from './components/KpiCard';
import SalesTrendChart from './components/SalesTrendChart';
import InventoryDonutChart from './components/InventoryDonutChart';

export default function DashboardPage() {
  const [kpis, setKpis] = useState(null);
  const [salesTrend, setSalesTrend] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [kpiRes, trendRes, invRes] = await Promise.all([
          dashboardAPI.getKPIs(),
          dashboardAPI.getSalesTrend(),
          dashboardAPI.getInventoryDistribution(),
        ]);

        setKpis(kpiRes.data);
        setSalesTrend(trendRes.data);
        setInventory(invRes.data);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <div className="text-center py-8">Cargando...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis && (
          <>
            <KpiCard
              title="Total de Productos"
              value={kpis.totalProductos}
              color="blue"
            />
            <KpiCard
              title="Stock Total"
              value={kpis.totalStock?.toLocaleString() || 0}
              color="green"
            />
            <KpiCard
              title="Ventas 2023"
              value={kpis.ventasAnuales2023?.toLocaleString() || 0}
              subtitle="Unidades"
              color="purple"
            />
            <KpiCard
              title="Crecimiento"
              value={`${kpis.crecimiento || 0}%`}
              subtitle="2024 vs 2023"
              color="orange"
            />
          </>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesTrendChart data={salesTrend} />
        <InventoryDonutChart data={inventory} />
      </div>
    </div>
  );
}
