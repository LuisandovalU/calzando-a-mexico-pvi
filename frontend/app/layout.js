import './globals.css';

// Agrego Font Awesome via CDN para iconos rápidos (opcional: instalar paquete npm más tarde)

export const metadata = {
  title: 'Calzando a México - WMS',
  description: 'Sistema de Gestión de Inventario y WMS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
