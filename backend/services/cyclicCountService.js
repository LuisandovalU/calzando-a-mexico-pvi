export class CyclicCountService {
  constructor() {
    this.countOrders = [];
    this.countTasks = [];
    this.folioCounter = 1000;
  }

  createCountOrder(config) {
    const folio = ++this.folioCounter;
    const countOrder = {
      id: folio,
      folio,
      tienda: config.tienda,
      zona: config.zona,
      responsable: config.responsable,
      fechaCreacion: new Date(),
      estado: 'Pendiente',
      tareas: [],
    };

    // Generar tareas a partir de la configuración
    if (config.incluirTodos) {
      // Contar todo el inventario
      countOrder.tareas = this.generarTareasCompletas(config.tienda);
    } else if (config.sku && config.sku.length > 0) {
      // Contar SKUs específicos
      countOrder.tareas = this.generarTareasSeleccionadas(config.tienda, config.sku);
    }

    this.countOrders.push(countOrder);
    return countOrder;
  }

  generarTareasCompletas(tienda) {
    // Simular generación de tareas (en prod, obtendría del inventario)
    return [
      { id: 1, sku: 'SKU001', ubicacion: 'A1', cantidad: 0, estado: 'Pendiente' },
      { id: 2, sku: 'SKU002', ubicacion: 'A2', cantidad: 0, estado: 'Pendiente' },
      { id: 3, sku: 'SKU003', ubicacion: 'B1', cantidad: 0, estado: 'Pendiente' },
    ];
  }

  generarTareasSeleccionadas(tienda, skus) {
    return skus.map((sku, index) => ({
      id: index + 1,
      sku,
      ubicacion: `LOC${index}`,
      cantidad: 0,
      estado: 'Pendiente',
    }));
  }

  obtenerOrdenesConteo() {
    return this.countOrders;
  }

  actualizarTarea(orderId, tareaId, cantidadContada) {
    const order = this.countOrders.find((o) => o.id === orderId);
    if (!order) return null;

    const tarea = order.tareas.find((t) => t.id === tareaId);
    if (!tarea) return null;

    tarea.cantidad = cantidadContada;
    tarea.estado = 'Completada';

    // Verificar si todas las tareas están completadas
    const todasCompletas = order.tareas.every((t) => t.estado === 'Completada');
    if (todasCompletas) {
      order.estado = 'Completada';
    }

    return order;
  }
}

export const cyclicCountService = new CyclicCountService();
