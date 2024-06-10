import React, { useState } from 'react';

const TimeRangeSelector = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState([]);
    const [excludedTime, setExcludedTime] = useState(["13-14", "17"]);

    const handleTimeChange = (event) => {
        const value = parseInt(event.target.value);
        setSelectedTimeRange([value, 22]);
        console.log({
            selectedTimeRange: [`${value}`, `5-22`],
            excludedTime
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>Select Time Range</h3>
            <input
                type="range"
                min="0"
                max="24"
                step="1"
                onChange={handleTimeChange}
                style={{ width: '100%', height: '40px' }}
            />
            <div style={{ marginTop: '20px' }}>
                <button onClick={() => handleTimeChange({ target: { value: 2 } })}>
                    Select Time Slot 2
                </button>
            </div>
        </div>
    );
};

export default TimeRangeSelector;
