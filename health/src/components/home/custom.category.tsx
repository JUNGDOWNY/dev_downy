import React, { useState, useEffect } from 'react';
import TargetButton from '@/components/target.button';
import TargetIngredientButton from '@/components/target.ingredient.button';
import { fetchData } from '@/utils/fetch.data';
import styles from '@styles/home/custom.category.module.css';

const CustomCategory: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState<string | null>(null);
    const [ingredientData, setIngredientData] = useState<string[]>([]);
    const [keys, setKeys] = useState<string[]>([]);
    const [selectedIngredient, setSelectedIngredient] = useState<string>('');

    useEffect(() => {
        fetchData('/data/health.target.json', (data) => {
        if (data) {
            const extractedKeys = Object.keys(data);
            setKeys(extractedKeys);
            if (extractedKeys.length > 0) {
            handleTargetButtonClick(extractedKeys[0]);
            }
        } else {
            console.error('데이터를 가져오지 못했습니다.');
        }
        });
    }, []);

    const handleTargetButtonClick = (key: string) => {
        setSelectedKey(key); 
        fetchData('/data/health.target.json', (data) => {
        if (data && data[key]) {
            const nmValues = data[key].map((item: any) => item.nm);
            setIngredientData(nmValues);  
            setSelectedIngredient(nmValues[0]); 
        } else {
            console.error('해당 키에 대한 데이터가 없습니다.');
            setIngredientData([]); 
        }
        });
    };

    const handleIngredientButtonClick = (nm: string) => {
        setSelectedIngredient(nm);
    };

    return (
        <section className={styles.category}>
            {/*  섭취 대상별 찾기 */}
            <div className={styles.target}>
                <div className={styles.content}>
                    <h2 className={`${styles.tit} ${styles['target-tit']}`}>섭취 대상별 찾기</h2>
                    <ul className={styles['target-list']}>
                        {keys.map((key, index) => (
                            <li
                                className={`${styles['target-item']} ${selectedKey === key ? styles['selected'] : ''}`}
                                key={index}
                            >
                                <TargetButton
                                    keyName={key}
                                    isSelected={selectedKey === key}
                                    onSelect={handleTargetButtonClick}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 기능별 찾기 */}
            <div className={styles.ingredient}>
                <div className={styles.content}>
                    <h2 className={`${styles.tit} ${styles['ingredient-tit']}`}>기능별 찾기</h2>
                    <ul className={styles['ingredient-list']}>
                        {ingredientData.map((nm, index) => (
                        <li
                            className={`${styles['ingredient-item']} ${selectedIngredient === nm ? styles['selected'] : ''}`}
                            key={index}
                        >
                            <TargetIngredientButton
                                nm={nm}
                                isSelected={selectedIngredient === nm}
                                onClick={handleIngredientButtonClick}
                            />
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* 상품 찾기 버튼 */}
            <button type="button" className={styles.button}>
                상품 찾아보기
            </button>
        </section>
    );
};

export default CustomCategory;