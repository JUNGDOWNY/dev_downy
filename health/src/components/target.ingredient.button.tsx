"use client";
import React from 'react';

interface TargetIngredientButtonProps {
  nm: string;
  isSelected: boolean;
  onClick: (nm: string) => void;
}

const TargetIngredientButton: React.FC<TargetIngredientButtonProps> = ({ nm, isSelected, onClick }) => {
  return (
    <button
      className={`target-button ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(nm)}  
    >
      {nm}
    </button>
  );
};

export default TargetIngredientButton;
