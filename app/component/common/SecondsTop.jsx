import React from 'react';

const SecondsTop = ({title}) => [
    <div className="top">
        <i className="bd_logo1"/>
    </div>,
    <div className="top">
        这是{title}
    </div>
];

// 避免无意义的父节点，所以这里使用数组的形式（react16版本以上）
export default SecondsTop;