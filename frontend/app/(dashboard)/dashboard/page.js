'use client';

import { useEffect, useState } from 'react';
// Importaciones de APIs y Componentes para el Dashboard
import { dashboardAPI, getOrchestrateAgents, runOrchestrateAgent } from '@/lib/api';
import KpiCard from './components/KpiCard';
import SalesTrendChart from './components/SalesTrendChart';
import InventoryDonutChart from './components/InventoryDonutChart';

export default function DashboardPage() {
  // --- Estados para el Dashboard (Fragmento 2) ---
  const [kpis, setKpis] = useState(null);
  const [salesTrend, setSalesTrend] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Estados para Watsonx Orchestrate (Fragmento 1) ---
  const [agents, setAgents] = useState([]);
  const [selectedAgentId, setSelectedAgentId] = useState(''); // Cambiado a 'selectedAgentId' para mayor claridad
  const [orchestrateOutput, setOrchestrateOutput] = useState(''); // Cambiado a 'orchestrateOutput'

  // --- useEffect para cargar Datos del Dashboard y Agentes ---
  useEffect(() => {
    async function loadDataAndAgents() {
      try {
        // Carga de datos del Dashboard
        const [kpiRes, trendRes, invRes] = await Promise.all([
          dashboardAPI.getKPIs(),
          dashboardAPI.getSalesTrend(),
          dashboardAPI.getInventoryDistribution(),
        ]);
        setKpis(kpiRes.data);
        setSalesTrend(trendRes.data);
        setInventory(invRes.data);

        // Carga de agentes de Orchestrate
        const agentsRes = await getOrchestrateAgents();
        setAgents(agentsRes);

      } catch (error) {
        console.error('Error al cargar datos o agentes:', error);
      } finally {
        setLoading(false);
      }
    }

    loadDataAndAgents();
  }, []);

  // --- Handler para Ejecutar el Agente (Fragmento 1) ---
  const handleRunOrchestrateAgent = async () => {
    if (!selectedAgentId) return alert('Selecciona un agente');
    
    // Muestra un mensaje mientras se ejecuta
    setOrchestrateOutput('Ejecutando agente...'); 

    try {
        // La instrucción del prompt original: "Generar reporte de inventario"
        const result = await runOrchestrateAgent(selectedAgentId, { prompt: "Generar reporte de inventario" });
        setOrchestrateOutput(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Error al ejecutar el agente:', error);
        setOrchestrateOutput(`Error al ejecutar el agente: ${error.message || 'Ver consola.'}`);
    }
  };

  if (loading) return <div className="text-center py-8">Cargando Dashboard y Agentes...</div>;

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard de Inventario y Ventas</h1>

      {/* SECCIÓN 1: DASHBOARD (Fragmento 2) */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-700">Métricas Clave</h2>
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis && (
            <>
              <KpiCard title="Total de Productos" value={kpis.totalProductos} color="blue" />
              <KpiCard title="Stock Total" value={kpis.totalStock?.toLocaleString() || 0} color="green" />
              <KpiCard title="Ventas 2023" value={kpis.ventasAnuales2023?.toLocaleString() || 0} subtitle="Unidades" color="purple" />
              <KpiCard title="Crecimiento" value={`${kpis.crecimiento || 0}%`} subtitle="2024 vs 2023" color="orange" />
            </>
          )}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesTrendChart data={salesTrend} />
          <InventoryDonutChart data={inventory} />
        </div>
      </section>

      {/* SECCIÓN 2: INTEGRACIÓN WATSONX ORCHESTRATE (Fragmento 1) */}
      <section className="pt-8 border-t border-gray-200 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">🤖 Integración Watsonx Orchestrate</h2>

        <div className="flex flex-col md:flex-row gap-4 items-start">
            <select
              value={selectedAgentId}
              onChange={(e) => setSelectedAgentId(e.target.value)}
              className="border p-2 rounded-lg w-full md:w-1/3"
            >
              <option value="">-- Selecciona un agente --</option>
              {agents.agents?.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>

            <button 
                onClick={handleRunOrchestrateAgent} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-full md:w-1/3"
            >
              Ejecutar agente: Generar reporte
            </button>
        </div>
        
        <h3 className="text-xl font-medium mt-4">Resultado de Ejecución:</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-sm max-h-64">
          {orchestrateOutput || 'Esperando ejecución del agente...'}
        </pre>
      </section>
    </div>
  );
}