import { useState } from 'react';
import * as Icons from '../../index'; // 导入所有图标组件
// 分类map
import categoryMap from '../categoryMap';

export default function IconGallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#333333');

  const filteredIcons = Object.entries(Icons)
    .filter(([name]) => 
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="icon-gallery">
      <div className="controls">
        <input
          type="text"
          placeholder="搜索图标..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="slider-control">
          <label>大小: {size}px</label>
          <input
            type="range"
            min="12"
            max="48"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>
        
        <div className="color-control">
          <label>颜色:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </div>
      
      <div className="icons-grid">
        {filteredIcons.map(([name, Icon]) => (
          <div key={name} className="icon-card">
            <div className="icon-preview">
              <Icon size={size} color={color} />
            </div>
            <div className="icon-name">{name}</div>
            <div className="icon-code">
              <code>{`<${name} size={${size}} color="${color}" />`}</code>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}