import { useState } from 'react';

export function useSelectedType() {
    const [selectedType, setSelectedType] = useState("all");
    const updateSelectedType = (type) => {
        setSelectedType(type);
    };
    return { selectedType, updateSelectedType };
}
