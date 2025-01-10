import React from 'react';

const ingredients = [
    { name: '홍삼', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico1.svg' },
    { name: '루테인', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico2.svg' },
    { name: 'MSM', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico3.svg' },
    { name: '비타민C', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico4.svg' },
    { name: '오메가3', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico5.svg' },
    { name: '밀크씨슬', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico6.svg' },
    { name: '칼슘', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico7.svg' },
    { name: '유산균', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico8.svg' },
    { name: '단백질', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico9.svg' },
    { name: '다이어트·뷰티', imgSrc: '//img.enuri.info/images/health/web/main-cate_ico10.svg' },
];

const IngredientCate: React.FC = () => {
    return (
        <section className="ingredient__cate">
            <div className="ingredient__cate__inner">
                <h2 className="health__tit">성분별 건강기능식품</h2>
                <ul className="ingredient-link__list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src={ingredient.imgSrc} aria-hidden="true" />
                                </div>
                                <div className="ingredient-cate__txt">{ingredient.name}</div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default IngredientCate;