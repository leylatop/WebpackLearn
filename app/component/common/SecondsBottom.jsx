import React from 'react';

const SecondsBottom = ({seconds}) => {
    if (seconds < 5) {
        return (
            <div className="bottom">
                小于5的Seconds: {seconds}
            </div>
        )
    } else {
        return (
            <div className="bottom">
                大于5的Seconds: {seconds}
            </div>
        )
    }
};

// 三元表达式
// const SecondsBottom = ({seconds}) =>
//     <div className="bottom">
//         {seconds <= 5 ? "小于等于5的" : " 大于5"}的Seconds: {seconds}
//     </div>

export default SecondsBottom;