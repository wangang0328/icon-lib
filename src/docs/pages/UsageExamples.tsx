import React from 'react';
import { Arrived, Booked, Delivered } from '../../index';

export default function UsageExamples() {
  return (
    <div className="usage-examples">
      <section>
        <h2>基本用法</h2>
        <div className="example">
          <Arrived size={24} color="#333" />
          <pre>{`<Arrived size={24} color="#333" />`}</pre>
        </div>
      </section>
      
      <section>
        <h2>动态属性</h2>
        <div className="example">
          <Booked size={32} color="#ff5722" />
          <pre>{`<Booked size={32} color="#ff5722" />`}</pre>
        </div>
      </section>
      
      <section>
        <h2>组合使用</h2>
        <div className="example">
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <Delivered size={20} color="#4285f4" />
            <span>用户资料</span>
            <Delivered size={16} color="#666" />
          </div>
          <pre>{`<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Delivered size={20} color="#4285f4" />
  <span>用户资料</span>
  <Delivered size={16} color="#666" />
</div>`}</pre>
        </div>
      </section>
    </div>
  );
}