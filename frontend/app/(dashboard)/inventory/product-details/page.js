"use client";

import React from 'react';
import Image from 'next/image';

export default function ProductDetailsPage() {
  return (
    <>
      {/* Header and content assume the dashboard layout provides the sidebar/main wrapper */}
      <header className="header">
          <div>
            <h1 style={{ fontSize: 24, marginBottom: 8 }}>Products</h1>
            <div className="breadcrumb">
              <span>Inventory</span>
              <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
              <span>Products</span>
              <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
              <span style={{ color: '#1a1a1a' }}>Table Virello</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Buscar"><i className="fas fa-search" /></button>
            <button className="icon-btn" aria-label="Notificaciones"><i className="fas fa-bell" /></button>
          </div>
        </header>

        <div className="content">
          <div className="product-header">
            <h2><i className="fas fa-cube" /> Product Details</h2>
            <div className="product-main">
              <div className="product-image">🪑</div>
              <div className="product-info">
                <div className="product-title">
                  <h3>Table Virello</h3>
                  <span className="code">TBL-LEG</span>
                  <span className="status-badge">Active</span>
                </div>

                <div className="toggles">
                  <div className="toggle-item">
                    <span>Active</span>
                    <div className="toggle" />
                  </div>
                  <div className="toggle-item">
                    <span>Sell</span>
                    <div className="toggle" />
                  </div>
                  <div className="toggle-item">
                    <span>Track Quantity</span>
                    <div className="toggle off" />
                  </div>
                  <div className="toggle-item">
                    <span>POS</span>
                    <div className="toggle" />
                  </div>
                  <div className="toggle-item">
                    <span>Sell</span>
                    <div className="toggle" />
                  </div>
                  <div className="toggle-item">
                    <span>Produce</span>
                    <div className="toggle off" />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-details-grid">
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-barcode"></i> Product Code</div>
                <div className="detail-value">TBL-LEG</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-warehouse"></i> Inventory Account</div>
                <div className="detail-value">12 - Goods</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-tags"></i> Category</div>
                <div className="detail-value">Furniture - Table</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-sticky-note"></i> Note</div>
                <div className="detail-value">CL-09471</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-ruler"></i> Unit of Measure</div>
                <div className="detail-value">unt (Unit)</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-percentage"></i> Tax Rate</div>
                <div className="detail-value">VAT 5%</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-dollar-sign"></i> Cost per Unit</div>
                <div className="detail-value">$6.34</div>
              </div>
              <div className="detail-item">
                <div className="detail-label"><i className="fas fa-layer-group"></i> Minimum Stock</div>
                <div className="detail-value">0.00</div>
              </div>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Total Sales</span>
                <i className="fas fa-ellipsis-h" style={{ color: '#ccc' }} />
              </div>
              <div className="stat-value">$ 28,473.84</div>
              <div className="stat-change">
                <span>vs last month 7000</span>
                <span className="positive"><i className="fas fa-arrow-up" /> 108.16</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Total Gross Profit</span>
                <i className="fas fa-ellipsis-h" style={{ color: '#ccc' }} />
              </div>
              <div className="stat-value">$ 10,959.50</div>
              <div className="stat-change">
                <span>vs last month 4,000</span>
                <span className="positive"><i className="fas fa-arrow-up" /> 43.5%</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Profitability Margin</span>
                <i className="fas fa-ellipsis-h" style={{ color: '#ccc' }} />
              </div>
              <div className="stat-value">38.49%</div>
              <div className="stat-change">
                <span>vs last month 26%</span>
                <span className="positive"><i className="fas fa-arrow-up" /> +15%</span>
              </div>
            </div>
          </div>

          <div className="stock-section">
            <div className="section-header">
              <h3 className="section-title"><i className="fas fa-chart-bar" /> Stock Overview</h3>
              <i className="fas fa-ellipsis-h" style={{ color: '#ccc', cursor: 'pointer' }} />
            </div>

            <div className="tabs">
              <div className="tab active">Sales</div>
              <div className="tab">Manufacturing</div>
              <div className="tab">Stock Movements</div>
              <div className="tab">Stocktake</div>
              <div className="tab">POS</div>
              <div className="tab">Consumption</div>
              <div className="tab">Files</div>
            </div>

            <div className="stock-info">Currently 30.4%, indicating the final phase of stock usage</div>

            <div className="stock-metrics">
              <div className="metric">
                <div className="metric-label"><i className="fas fa-dollar-sign metric-icon" /> Total Value</div>
                <div className="metric-value">$6,240.28</div>
              </div>
              <div className="metric">
                <div className="metric-label"><i className="fas fa-boxes metric-icon" /> Expected Stock</div>
                <div className="metric-value">12.22K</div>
              </div>
            </div>

            <div className="stock-bars">
              <div className="stock-bar-item">
                <div className="stock-bar-header">
                  <span className="stock-bar-title">Available Stock</span>
                  <div className="stock-bar-values">
                    <span className="bar-value" style={{ color: '#4d9fff' }}>12.22K</span>
                    <span style={{ color: '#ccc' }}>34K</span>
                    <span style={{ color: '#0d7a48', fontSize: 12 }}>Ready for use or sale</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '36%' }} />
                  <div className="progress-empty" style={{ width: '64%' }} />
                </div>
              </div>

              <div className="stock-bar-item">
                <div className="stock-bar-header">
                  <span className="stock-bar-title">Reserved Stock</span>
                  <div className="stock-bar-values">
                    <span className="bar-value" style={{ color: '#4d9fff' }}>11.54K</span>
                    <span style={{ color: '#ccc' }}>34K</span>
                    <span style={{ color: '#0d7a48', fontSize: 12 }}>Allocated for orders</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '34%' }} />
                  <div className="progress-empty" style={{ width: '66%' }} />
                </div>
              </div>
            </div>

            <div className="table-container">
              <div className="table-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <i className="fas fa-tag" />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>Show Pricing & Inventory</span>
                </div>
                <i className="fas fa-chevron-down" />
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Reference</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Margin</th>
                    <th>Cost</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>SL30-7-FF</td>
                    <td>30/11/2025</td>
                    <td>4.50</td>
                    <td className="price">USD 55.20</td>
                    <td className="margin">45.10%</td>
                    <td className="price">USD 300.00</td>
                    <td className="price">USD 300.00</td>
                  </tr>
                  <tr>
                    <td>SL35-6-FF</td>
                    <td>15/12/2025</td>
                    <td>2.75</td>
                    <td className="price">USD 36.50</td>
                    <td className="margin">40.00%</td>
                    <td className="price">USD 150.00</td>
                    <td className="price">USD 150.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
}
