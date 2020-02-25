import { useState } from 'react';

export const useTestCounter = (innitialState) => {
    const [ value, setValue ] = useState(innitialState);

    const handleChange = () => {
        setValue(value + 1);
    };

    return [
        value,
        handleChange,
    ];
};
