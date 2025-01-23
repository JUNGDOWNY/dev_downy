import React from 'react';

interface TargetButtonProps {
    keyName: string;
    isSelected: boolean;
    onSelect: (key: string) => void;
}

const TargetButton: React.FC<TargetButtonProps> = ({ keyName, onSelect }) => {
    return (
        <button
            onClick={() => onSelect(keyName)}
        >
            {keyName}
        </button>
    );
};

export default TargetButton;
