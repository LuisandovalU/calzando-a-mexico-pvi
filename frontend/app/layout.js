import './globals.css';

export const metadata = {
  title: 'Calzando a México - WMS',
  description: 'Sistema de Gestión de Inventario y WMS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
