import { DataLoader } from './dataLoader.js';

export class AnalyticsService {
  static calculateABCAnalysis() {
    const inventario = DataLoader.loadInventario();
    const ventas2024 = DataLoader.loadVentas2024();

    // Agrupar ventas por SKU
    const ventasPorSku = {};
    ventas2024.forEach((venta) => {
      const sku = venta.SKU || venta.Producto;
      if (!ventasPorSku[sku]) {
        ventasPorSku[sku] = 0;
      }
      ventasPorSku[sku] += parseFloat(venta.Cantidad) || 0;
    });

    // Enriquecer inventario con datos de ventas
    const datosEnriquecidos = inventario.map((item) => {
      const sku = item.SKU || item.Producto;
      const ventasAnuales = ventasPorSku[sku] || 0;
      const stock = parseFloat(item.Stock) || 0;
      const rotacion = ventasAnuales / Math.max(stock, 1);

      return {
        ...item,
        ventasAnuales,
        rotacion,
      };
    });

    // Ordenar por ventas y calcular porcentaje acumulado
    const ordenado = datosEnriquecidos.sort(
      (a, b) => b.ventasAnuales - a.ventasAnuales
    );
    const totalVentas = ordenado.reduce((sum, item) => sum + item.ventasAnuales, 0);

    let acumulado = 0;
    const conCategoria = ordenado.map((item) => {
      acumulado += item.ventasAnuales;
      const porcentaje = (acumulado / totalVentas) * 100;

      let categoria = 'C';
      if (porcentaje <= 80) categoria = 'A';
      else if (porcentaje <= 95) categoria = 'B';

      return {
        ...item,
        porcentajeAcumulado: porcentaje.toFixed(2),
        categoria,
      };
    });

    return conCategoria;
  }

  static obtenerEstadisticas() {
    const abcAnalysis = this.calculateABCAnalysis();

    const categoriaA = abcAnalysis.filter((item) => item.categoria === 'A');
    const categoriaB = abcAnalysis.filter((item) => item.categoria === 'B');
    const categoriaC = abcAnalysis.filter((item) => item.categoria === 'C');

    return {
      totalProductos: abcAnalysis.length,
      categoriaA: {
        cantidad: categoriaA.length,
        porcentaje: ((categoriaA.length / abcAnalysis.length) * 100).toFixed(2),
      },
      categoriaB: {
        cantidad: categoriaB.length,
        porcentaje: ((categoriaB.length / abcAnalysis.length) * 100).toFixed(2),
      },
      categoriaC: {
        cantidad: categoriaC.length,
        porcentaje: ((categoriaC.length / abcAnalysis.length) * 100).toFixed(2),
      },
    };
  }
}
