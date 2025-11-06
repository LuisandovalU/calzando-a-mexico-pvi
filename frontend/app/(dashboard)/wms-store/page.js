"use client";

import React from 'react';
import styles from './styles.module.css';

export default function WmsStorePage() {
    return (
        <div className={styles['dashboard-container']}>
            <aside className={styles.sidebar}>
                <h3>WMS Tienda</h3>
                <p>Menu</p>
            </aside>
            <div className={styles['main-content']}>
                <div className={styles['kpi-row']}>
                    <div className={styles['kpi-card']}>KPI 1</div>
                    <div className={styles['kpi-card']}>KPI 2</div>
                    <div className={styles['kpi-card']}>KPI 3</div>
                </div>

                <div className={styles['data-panels-row']}>
                    <div className={styles['data-panel']}>Stock panel</div>
                    <div className={styles['data-panel']}>Table panel</div>
                </div>
            </div>
        </div>
    );
}

