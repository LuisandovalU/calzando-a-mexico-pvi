"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: 'fas fa-th-large' },
    { name: 'Análisis ABC', href: '/dashboard/abc-analysis', icon: 'fas fa-chart-line' },
    { name: 'Conteos Cíclicos', href: '/dashboard/cyclic-counts', icon: 'fas fa-clipboard-list' },
    { name: 'WMS Tienda', href: '/dashboard/wms-store', icon: 'fas fa-store' },
    { name: 'Inventory', href: '/dashboard/inventory/product-details', icon: 'fas fa-boxes' },
  ];

  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="logo">
        <div className="logo-icon">V</div>
        <div className="logo-text">
          <h2>VANTUS</h2>
          <p>ERP Solution</p>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-title">MAIN</div>
        {menuItems.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} className={`menu-item ${isActive ? 'active' : ''}`} aria-current={isActive ? 'page' : undefined}>
              <i className={item.icon} aria-hidden />
              <span>{item.name}</span>
              <i className="fas fa-chevron-right chevron" aria-hidden />
            </Link>
          );
        })}

        <div className="submenu">
          <div className="submenu-item" style={{ color: 'var(--accent)', fontWeight: 600 }}>Products</div>
          <div className="submenu-item">Stock Movements</div>
          <div className="submenu-item">Warehouses</div>
          <div className="submenu-item">Product Categories</div>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-title">OTHERS</div>
        <div className="menu-item"><i className="fas fa-cog" aria-hidden /><span>Settings</span></div>
        <div className="menu-item"><i className="fas fa-life-ring" aria-hidden /><span>Support</span></div>
      </div>

      <div className="user-profile" role="button" tabIndex={0} aria-label="User profile">
        <Image src="https://i.pravatar.cc/80?img=5" alt="Emma Johnson" className="user-avatar" width={44} height={44} />
        <div className="user-info">
          <h4>Emma Johnson</h4>
          <p>design@opondeo.com</p>
        </div>
        <i className="fas fa-chevron-right user-chevron" aria-hidden />
      </div>
    </aside>
  );
}
"use client";

import Link from 'next/link';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: 'fas fa-chart-line' },
    { name: 'Análisis ABC', href: '/dashboard/abc-analysis', icon: 'fas fa-chart-bar' },
    { name: 'Conteos Cíclicos', href: '/dashboard/cyclic-counts', icon: 'fas fa-clipboard-check' },
    { name: 'WMS Tienda', href: '/dashboard/wms-store', icon: 'fas fa-store' },
    { name: 'Inventory', href: '/dashboard/inventory/product-details', icon: 'fas fa-boxes' },
  ];

  return (
    "use client";

    import Link from 'next/link';
    import Image from 'next/image';
    import { usePathname } from 'next/navigation';

    export default function Sidebar() {
      const pathname = usePathname();

      const menuItems = [
        { name: 'Dashboard', href: '/dashboard', icon: 'fas fa-th-large' },
        { name: 'Análisis ABC', href: '/dashboard/abc-analysis', icon: 'fas fa-chart-line' },
        { name: 'Conteos Cíclicos', href: '/dashboard/cyclic-counts', icon: 'fas fa-clipboard-list' },
        { name: 'WMS Tienda', href: '/dashboard/wms-store', icon: 'fas fa-store' },
        { name: 'Inventory', href: '/dashboard/inventory/product-details', icon: 'fas fa-boxes' },
      ];

      return (
        <aside className="sidebar" aria-label="Sidebar">
          <div className="logo">
            <div className="logo-icon">V</div>
            <div className="logo-text">
              <h2>VANTUS</h2>
              <p>ERP Solution</p>
            </div>
          </div>

          <div className="menu-section">
            <div className="menu-title">MAIN</div>
            {menuItems.map((item) => {
              const isActive = pathname?.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} className={`menu-item ${isActive ? 'active' : ''}`} aria-current={isActive ? 'page' : undefined}>
                  <i className={item.icon} aria-hidden />
                  <span>{item.name}</span>
                  <i className="fas fa-chevron-right chevron" aria-hidden />
                </Link>
              );
            })}

            <div className="submenu">
              <div className="submenu-item" style={{ color: 'var(--accent)', fontWeight: 600 }}>Products</div>
              <div className="submenu-item">Stock Movements</div>
              <div className="submenu-item">Warehouses</div>
              <div className="submenu-item">Product Categories</div>
            </div>
          </div>

          <div className="menu-section">
            <div className="menu-title">OTHERS</div>
            <div className="menu-item"><i className="fas fa-cog" aria-hidden /><span>Settings</span></div>
            <div className="menu-item"><i className="fas fa-life-ring" aria-hidden /><span>Support</span></div>
          </div>

          <div className="user-profile" role="button" tabIndex={0} aria-label="User profile">
            <Image src="https://i.pravatar.cc/80?img=5" alt="Emma Johnson" className="user-avatar" width={44} height={44} />
            <div className="user-info">
              <h4>Emma Johnson</h4>
              <p>design@opondeo.com</p>
            </div>
            <i className="fas fa-chevron-right user-chevron" aria-hidden />
          </div>
        </aside>
      );
    }
