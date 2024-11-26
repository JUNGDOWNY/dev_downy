"use client";
import '../../styles/target_btn.css';
import React from 'react';

interface TargetCategory {
    nm: string;
    spec?: string;
    bannerText1?: string;
    bannerText2?: string;
}

interface TargetBtnProps {
    categories: string[];
    selectedIndex: number | null;
    onSelect: (index: number) => void;
}

const TargetBtn: React.FC<TargetBtnProps> = ({ categories, selectedIndex, onSelect }) => {
    return (
        <ul className="target-btn__list">
            {categories.map((category, index) => (
                <li key={index} className="target-btn__item">
                    <button
                        type="button"
                        className={`target-btn ${selectedIndex === index ? 'on' : ''}`}
                        onClick={() => onSelect(index)}
                    >   <div className='target-btn__img'>
                            <img src={`//img.enuri.info/images/health/web/target-cate_ico${index + 1}.svg`} alt={category} role="presentation" />
                        </div>
                        <div className="target-btn__txt">{category}</div>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TargetBtn;