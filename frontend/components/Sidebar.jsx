"use client";

import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: 'fas fa-th-large' },
    { name: 'Análisis ABC', href: '/dashboard/abc-analysis', icon: 'fas fa-chart-line' },
    { name: 'Conteos Cíclicos', href: '/dashboard/cyclic-counts', icon: 'fas fa-clipboard-list' },
    { name: 'WMS Tienda', href: '/dashboard/wms-store', icon: 'fas fa-store' },
    { name: 'Inventory', href: '/dashboard/inventory/product-details', icon: 'fas fa-boxes' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">V</div>
        <div className="logo-text">
          <h2>VANTUS</h2>
          <p>ERP Solution</p>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-title">MAIN</div>
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href} className={`menu-item`}>
            <i className={item.icon}></i>
            <span>{item.name}</span>
            <i className="fas fa-chevron-right chevron"></i>
          </Link>
        ))}

        <div className="submenu">
          <div className="submenu-item" style={{ color: '#4d9fff', fontWeight: 500 }}>Products</div>
          <div className="submenu-item">Stock Movements</div>
          <div className="submenu-item">Warehouses</div>
          <div className="submenu-item">Product Categories</div>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-title">OTHERS</div>
        <div className="menu-item"><i className="fas fa-cog"></i><span>Settings</span></div>
        <div className="menu-item"><i className="fas fa-life-ring"></i><span>Support</span></div>
      </div>

      <div className="user-profile">
        <img src="https://i.pravatar.cc/80?img=5" alt="Emma Johnson" className="user-avatar" />
        <div className="user-info">
          <h4>Emma Johnson</h4>
          <p>design@opondeo.com</p>
        </div>
        <i className="fas fa-chevron-right user-chevron" />
      </div>
    </aside>
  );
}
