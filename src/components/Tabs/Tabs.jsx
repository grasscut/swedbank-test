import React, { useState } from 'react';
import './Tabs.css';

export default ({ items = [] }) => {
    const [activeTab, setActiveTab] = useState(items.length > 0 ? items[0] : {});

    return (
        <div className="tabs">
            <div className="tabs__header">
                {items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setActiveTab(item)}
                        className={item.id === activeTab.id ? 'active' : null}
                    >
                        {item.label}
                    </div>
                ))}
            </div>

            <div className="tabs__content">
                {activeTab.content}
            </div>
        </div>
    );
}
