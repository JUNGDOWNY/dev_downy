"use client";

import Image from "next/image";
import '../../styles/home.css';
import TargetBtn from '../components/target_btn';
import { useState, useEffect } from 'react';

interface TargetCategory {
    nm: string;
    spec?: string;
    bannerText1?: string;
    bannerText2?: string;
}

interface RecomGoods {
    key: number;
    strBbsNum: string;
    strCate: string;
    strMainIngredient: string;
    strBbsPoint: string;
    strCardPrice: string;
    strFncRankNm: string;
    strDecreaseRate: string;
    strDailyPrice: string;
    strModelNo: number;
    strModelName: string;
    strImageUrl: string;
    strMinPrice: number;
    strWowPrice: string;
}

export default function Home() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); 
    const [selectedIngredientIndex, setSelectedIngredientIndex] = useState<number | null>(0); 
    const [recommgoods, setRecommoods] = useState<RecomGoods[]>([]);
    const [categories, setCategories] = useState<{ [key: string]: TargetCategory[] }>({});
    const [selectedCategoryItems, setSelectedCategoryItems] = useState<TargetCategory[]>([]);

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

    useEffect(() => {
        async function fetchRecommGoods() {
            try {
                const res = await fetch('/data/recomgoods.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch goods');
                }
                const data = await res.json();
                if (Array.isArray(data)) {
                    setRecommoods(data);
                } else if (data && Array.isArray(data.data)) {
                    setRecommoods(data.data);
                } else {
                    setRecommoods([]);
                }
            } catch (error) {
                console.error('Error fetching goods:', error);
                setRecommoods([]);
            }
        }

        fetchRecommGoods();
    }, []);

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

    return (
        <>
            <h1 className="sr-only">건강기능식품 홈메인</h1>
            <section className="home__visual">
                <div className="home__visual__inner">
                    <img src="//img.enuri.info/images/health/web/main-visual-txt.svg" alt="식품의약품안전처 인증제품 #최대 1만개 건강기능식품 #하루 최저가 #하루권장량 추천 #ai요약리뷰 #성분정보 끝판왕"/>
                </div>
            </section>
            <section className="home__cate">
                <div className="home__cate--target">
                    <h2 className="home__cate--tit home__cate--target_tit">섭취 대상별 찾기</h2>
                    <div className="home__cate--cont">
                        <TargetBtn categories={Object.keys(categories)} selectedIndex={selectedIndex} onSelect={cateSelected} />
                    </div>
                </div>
                <div className="home__cate--ingredient">
                    <h2 className="home__cate--tit home__cate--ingredient_tit">기능별 찾기</h2>
                    <div className="home__cate--cont">
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
                <button type="button" className="home__cate-search-btn">상품 찾아보기</button>
            </section>
            <section className="recommend">
                <div className="recommend__inner">
                    <h2 className="health__tit">현직 약사가 추천하는 믿을 수 있는 영양제!</h2>
                    <h3 className="health__tit--sub">#유산균 #비타민 #영양제 #미네랄</h3>
                    <div className="recommgoods">
                        <ul className="recommgoods__list">
                            {recommgoods.slice(0, 5).map(item => (
                                <li key={item.key} className="recommgoods__list--item">
                                    <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`}>
                                        <div className="recommgoods__list--img">
                                            <img src={item.strImageUrl} alt={item.strModelName} role="presentation" />
                                        </div>
                                        <div className="recommgoods__list--txt">
                                            <div>{item.strModelName}</div>
                                            <div>{item.strMinPrice}원</div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
