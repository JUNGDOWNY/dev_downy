"use client";

import Image from "next/image";
import '../../styles/target_btn.css';
import { useState } from 'react';

const TargetBtn = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const cateSelected = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <ul className="target-btn__list">
            {['전체', '성인남녀', '유아/청소년', '임산부', '시니어', '남성', '여성'].map((label, index) => (
                <li key={index} className="target-btn__item">
                    <button
                        type="button"
                        className={selectedIndex === index ? 'target-btn on' : 'target-btn'}
                        aria-label={`대상 ${label} 선택`}
                        aria-selected={selectedIndex === index}
                        onClick={() => cateSelected(index)}
                    >
                        <div className="target-btn__img">
                            <img src={`//img.enuri.info/images/health/web/target-cate_ico${index + 1}.svg`} alt="" aria-hidden="true" />
                        </div>
                        <div className="target-btn__txt">
                            {label}
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TargetBtn;