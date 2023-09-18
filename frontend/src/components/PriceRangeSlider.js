import React, { useState } from 'react';

function PriceRangeSlider() {
    const [value, setValue] = useState(50);

    return (
        <input type="range" value={value} onChange={(e) => setValue(e.target.value)} />
    );
}

export default PriceRangeSlider;