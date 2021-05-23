import React from 'react';

const ColorInfo = ({ color, name }) => {
    return (
        <div className="colorInfo">
            <div className="sample" style={{ backgroundColor: color }}></div>
            <div className="value">{color}</div>
            <div className="name">{name || 'Без названия'}</div>
        </div>
    );
};

export default ColorInfo;
