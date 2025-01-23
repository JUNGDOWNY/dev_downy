import React from 'react';
import styles from '@styles/home/ingredeint.category.module.css';

const ingredients = [
    { name: '홍삼' }, { name: '루테인' }, { name: 'MSM' }, { name: '비타민C' }, { name: '오메가3' }, { name: '밀크씨슬' }, { name: '칼슘' }, { name: '유산균' }, { name: '단백질' }, { name: '다이어트·뷰티' }
];

const IngredientCategory: React.FC = () => {
    return (
        <section className={styles.category}>
            <div className={styles.inner}>
                <h2 className={styles.tit}>성분별 건강기능식품</h2>
                <ul className={styles.list}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index} className={styles.item}>
                            <a href="" className={styles.link}>
                                <div className={styles.name}>{ingredient.name}</div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default IngredientCategory;