import fs from 'fs';
import { parse } from 'csv-parse/sync';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class DataLoader {
  static loadCSV(filename) {
    try {
      const filePath = path.join(__dirname, '../data', filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
      });
      return records;
    } catch (error) {
      console.error(`Error loading CSV ${filename}:`, error);
      return [];
    }
  }

  static loadInventario() {
    return this.loadCSV('INVENTARIO 2024.csv');
  }

  static loadVentas2023() {
    return this.loadCSV('VENTA 2023.csv');
  }

  static loadVentas2024() {
    return this.loadCSV('VENTA 2024.csv');
  }

  static loadMatrizRoles() {
    return this.loadCSV('Matriz de Roles As Is.csv');
  }
}
