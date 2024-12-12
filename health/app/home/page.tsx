"use client";

import Image from "next/image";
import '../../styles/home.css';
import TargetBtn from '../components/target_btn';
import { useState, useEffect, Key } from 'react';

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
    strDailyPrice: string;
    strModelNo: number;
    strModelName: string;
    strImageUrl: string;
    strMinPrice: string;
    strWowPrice: string;
}
interface BestGoods {
    key: number;
    strBbsNum: string;
    strCate: string;
    strSpec1: string;
    strBbsPoint: string;
    strCardPrice: string;
    strFncRankNm: string;
    strDailyPrice: string;
    strModelNo: number;
    strModelName: string;
    strImageUrl: string;
    strMinPrice: string;
    strWowPrice: string;
    intSaleCnt : number;
    strReviewKeyword : string;
}
interface ReviewGoods {
    key: Key | null | undefined;
    strModelName : string;
    strImageUrl : string;
    strModelNo :number;
    strDailyPrice : number;
    strSpec1 : string;
    strMinPrice :number;

}

export default function Home() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0); 
    const [selectedIngredientIndex, setSelectedIngredientIndex] = useState<number | null>(0); 
    const [recommgoods, setRecommoods] = useState<RecomGoods[]>([]);
    const [bestgoods, setBestgoods] = useState<BestGoods[]>([]);
    const [reviewgoods, setReviewgoods] = useState<ReviewGoods[]>([]);
    const [categories, setCategories] = useState<{ [key: string]: TargetCategory[] }>({});
    const [selectedCategoryItems, setSelectedCategoryItems] = useState<TargetCategory[]>([]);
    const [recommpage, setRecommPage] = useState<number>(0);
    const [bestpage, setBestPage] = useState<number>(0);
    const [reviewpage, setReviewPage] = useState<number>(0);
    
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
        async function fetchbestGoods() {
            try {
                const res = await fetch('/data/bestgoods.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch goods');
                }
                const data = await res.json();
                if (Array.isArray(data)) {
                    setBestgoods(data);
                } else if (data && Array.isArray(data.data)) {
                    setBestgoods(data.data);
                } else {
                    setBestgoods([]);
                }
            } catch (error) {
                console.error('Error fetching goods:', error);
                setBestgoods([]);
            }
        }
        fetchbestGoods();
    }, []);

    useEffect(() => {
        async function fetchreviewGoods() {
            try {
                const res = await fetch('/data/reviewgoods.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch goods');
                }
                const data = await res.json();
                if (Array.isArray(data)) {
                    setReviewgoods(data);
                } else if (data && Array.isArray(data.data)) {
                    setReviewgoods(data.data);
                } else {
                    setReviewgoods([]);
                }
            } catch (error) {
                console.error('Error fetching goods:', error);
                setReviewgoods([]);
            }
        }
        fetchreviewGoods();
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

    const itemsPerPage = 5; 
    const reviewPerPage = 3; 
    const recomStartIndex = recommpage * itemsPerPage;
    const recomEndIndex = recomStartIndex + itemsPerPage;
    const recommItems = recommgoods.slice(recomStartIndex, recomEndIndex);
    const bestStartIndex = bestpage * itemsPerPage;
    const bestEndIndex = bestStartIndex + itemsPerPage;
    const bestItems = bestgoods.slice(bestStartIndex, bestEndIndex);
    const reviewStartIndex = reviewpage * itemsPerPage;
    const reviewEndIndex = reviewStartIndex + reviewPerPage;
    const reviewItems = reviewgoods.slice(reviewStartIndex, reviewEndIndex);

    return (
        <>
            <h1 className="sr-only">건강기능식품 홈메인</h1>
            <section className="home__visual">
                <div className="home__visual__inner">
                    <img src="//img.enuri.info/images/health/web/main-visual-txt.svg" alt="식품의약품안전처 인증제품 #최대 1만개 건강기능식품 #하루 최저가 #하루권장량 추천 #ai요약리뷰 #성분정보 끝판왕"/>
                </div>
            </section>
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
            <section className="recommend">
                <div className="recommend__inner">
                    <h2 className="health__tit">현직 약사가 추천하는 믿을 수 있는 영양제!</h2>
                    <h3 className="health__tit--sub">#유산균 #비타민 #영양제 #미네랄</h3>
                    <div className="recommgoods">
                        <ul className="recommgoods__list">
                            {recommItems.map(item => (
                                <li key={item.key} className="goods__list--item">
                                    <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`}>
                                        <div className="recommgoods__img">
                                            <img src={item.strImageUrl} alt={item.strModelName} role="presentation" />
                                            <span className="badge_mfds">식약처인증</span>
                                        </div>
                                        <div className="recommgoods__txt">
                                            <div className="recommgoods__name">{item.strModelName}</div>
                                            <div className="recommgoods__price">
                                                <span><em>{item.strMinPrice}</em>원</span>
                                                <span className="recommgoods__price--day">{item.strDailyPrice}원</span>
                                            </div>
                                            <div className="recommgoods__ingredient">{item.strMainIngredient}</div>
                                            <div className="recommgoods__rate">{item.strBbsPoint}점<span className="rate--count">({item.strBbsNum})</span></div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="recommend__page">
                        <button type="button" className="recommend__btn recommend__btn-prev" onClick={() => setRecommPage(prev => Math.max(prev - 1, 0))}>이전으로</button>
                        <button type="button" className="recommend__btn recommend__btn-next" onClick={() => setRecommPage(prev => Math.min(prev + 1, Math.ceil(15 / itemsPerPage) - 1))}>다음으로</button>
                    </div>
                </div>
            </section>
            <section className="best">
                <div className="best__inner">
                    <h2 className="health__tit">건강Plus 판매량 베스트 상품</h2>
                    <div className="bestgoods">
                        <ul className="bestgoods__list">
                            {bestItems.map(item => (
                                <li key={item.key} className="bestgoods__item">
                                    <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`}>
                                        <div className="bestgoods__img">
                                            <img src={item.strImageUrl} alt={item.strModelName} role="presentation" />
                                            <span className="badge_mfds">식약처인증</span>
                                            <span className="badge_sale">{item.intSaleCnt.toLocaleString()}개 구매</span>
                                        </div>
                                        <div className="bestgoods__txt">
                                            <div className="bestgoods__name">{item.strModelName}</div>
                                            <div className="bestgoods__price">
                                                <span><em>{item.strMinPrice}</em>원</span>
                                                <span className="bestgoods__price--day">{item.strDailyPrice}원</span>
                                            </div>
                                            <div className="bestgoods__rate">{item.strBbsPoint}점<span className="rate--count">({item.strBbsNum})</span></div>
                                            <div className="bestgoods__keyword">{item.strReviewKeyword}</div>
                                            <div className="bestgoods__ingredient">{item.strSpec1}</div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="best__page">
                        <button type="button" className="best__btn best__btn-prev" onClick={() => setBestPage(prev => Math.max(prev - 1, 0))}>이전으로</button>
                        <button type="button" className="best__btn best__btn-next" onClick={() => setBestPage(prev => Math.min(prev + 1, Math.ceil(15 / itemsPerPage) - 1))}>다음으로</button>
                    </div>
                </div>
            </section>
            <section className="ingredient__cate">
                <div className="ingredient__cate__inner">
                    <h2 className="health__tit">성분별 건강기능식품</h2>
                    <ul className="ingredient-link__list">
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico1.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">홍삼</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico2.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">루테인</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico3.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">MSM</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico4.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">비타민C</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico5.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">오메가3</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico6.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">밀크씨슬</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico7.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">칼슘</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico8.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">유산균</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico9.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">단백질</div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="ingredient-cate__img">
                                    <img src="//img.enuri.info/images/health/web/main-cate_ico10.svg" aria-hidden="true"/>
                                </div>
                                <div className="ingredient-cate__txt">다이어트·뷰티</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="real__review">
                <div className="real__review__inner">
                    <h2 className="health__tit">실구매 리뷰 추천 상품</h2>
                    <div className="real-review__goods">
                        <ul className="real-review__list">
                            {reviewItems.map(item => (
                                <li key={item.key} className="">
                                    <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`} target="_blank">
                                        <div className="real-review__item">
                                            <div className="real-review__img">
                                                <span className="badge_mfds--logo">식약처인증</span>
                                                <img src={item.strImageUrl} alt={item.strModelName} aria-hidden="true" />
                                            </div>
                                            <div className="actual-purchase__txt">
                                                <div className="actual-purchase__name">{item.strModelName}</div>
                                                <div className="actual-purchase__price">
                                                    <em>{item.strMinPrice}</em>원
                                                </div>
                                                <div className="actual-purchase__price--day">하루 {item.strDailyPrice}원</div>
                                                <div className="actual-purchase__typical">{item.strSpec1}</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="review__page">
                        <button type="button" className="review__btn review__btn-prev" onClick={() => setReviewPage(prev => Math.max(prev - 1, 0))}>이전으로</button>
                        <button type="button" className="review__btn review__btn-next" onClick={() => setReviewPage(prev => Math.min(prev + 1, Math.ceil(15 / itemsPerPage) - 1))}>다음으로</button>
                    </div>
                </div>
            </section>
        </>
    );
}