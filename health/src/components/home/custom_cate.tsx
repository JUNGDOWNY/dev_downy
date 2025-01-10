import React, { useState, useEffect } from 'react';
import TargetBtn from '@components/target_btn';

interface TargetCategory {
    nm: string;
    spec?: string;
    bannerText1?: string;
    bannerText2?: string;
}

const CustomCate: React.FC = () => {
    const [categories, setCategories] = useState<{ [key: string]: TargetCategory[] }>({});
    const [selectedCategoryItems, setSelectedCategoryItems] = useState<TargetCategory[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [selectedIngredientIndex, setSelectedIngredientIndex] = useState<number | null>(null);

    useEffect(() => {
        if (selectedCategoryItems.length > 0) {
            setSelectedIngredientIndex(0);
        } else {
            setSelectedIngredientIndex(null);
        }
    }, [selectedCategoryItems]);

    const cateSelected = (index: number) => {
        setSelectedIndex(index);
        const categoryKeys = ["전체", "성인남녀", "유아/청소년", "임산부", "시니어", "남성", "여성"];
        const selectedCategoryKey = categoryKeys[index];
        setSelectedCategoryItems(categories[selectedCategoryKey] || []);
        setSelectedIngredientIndex(null);
    };

    const ingredientSelected = (index: number) => {
        setSelectedIngredientIndex(index);
    };

    useEffect(() => {
        async function fetchTargetCategories() {
            try {
                const res = await fetch('/data/health_target.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch target categories');
                }
                const data = await res.json();
                setCategories(data);

                const initialCategoryKey = Object.keys(data)[0];
                if (initialCategoryKey) {
                    setSelectedCategoryItems(data[initialCategoryKey]);
                }
            } catch (error) {
                console.error('Error fetching target categories:', error);
                setCategories({});
            }
        }

        fetchTargetCategories();
    }, []);

    return (
        <section className="custom__cate">
            <div className="custom__cate--target">
                <h2 className="custom__cate--tit custom__cate--target_tit">섭취 대상별 찾기</h2>
                <div className="custom__cate--cont">
                    <TargetBtn categories={Object.keys(categories)} selectedIndex={selectedIndex} onSelect={cateSelected} />
                </div>
            </div>
            <div className="custom__cate--ingredient">
                <h2 className="custom__cate--tit custom__cate--ingredient_tit">기능별 찾기</h2>
                <div className="custom__cate--cont">
                    <ul className="ingredient-btn__list">
                        {selectedCategoryItems.map((item, index) => (
                            <li key={index} className="ingredient-btn__item">
                                <button
                                    type="button"
                                    className={`ingredient-btn ${selectedIngredientIndex === index ? 'on' : ''}`}
                                    onClick={() => ingredientSelected(index)}
                                >
                                    <span className="ingredient-btn__txt">{item.nm}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button type="button" className="custom__cate-search-btn">상품 찾아보기</button>
        </section>
    );
};

export default CustomCate;