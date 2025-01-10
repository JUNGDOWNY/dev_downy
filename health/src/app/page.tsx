"use client";

import Image from "next/image";
import { useState, useEffect, Key } from 'react';
import CustomCate from '@components/home/custom_cate';
import Recommend from '@components/home/recommend';
import Best from '@components/home/best';
import '@styles/home.css';

interface TargetCategory {
    nm: string;
    spec?: string;
    bannerText1?: string;
    bannerText2?: string;
}



interface ReviewKeyword {
    view_kwd: string;
    sumry_cts: string;
}
interface ReviewGoods {
    key: Key | null | undefined;
    strModelName : string;
    strImageUrl : string;
    strModelNo :number;
    strDailyPrice : number;
    strSpec1 : string;
    strMinPrice :number;
    strBbsPoint :number;
    strBbsNum : number;
    arrAiReviewKeyword: ReviewKeyword[];

}
interface GuideData{
    key: number;
    ban_nm2 : string;
}
export default function Home() {

    const [reviewgoods, setReviewgoods] = useState<ReviewGoods[]>([]);

    const [reviewpage, setReviewPage] = useState<number>(0);
    const [guidedata, setGuidedata] = useState<GuideData[]>([]);

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
        async function fetchguideData() {
            try {
                const res = await fetch('/data/guidedata.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                if (data && Array.isArray(data.list)) {
                    setGuidedata(data.list); 
                } else {
                    setGuidedata([]); 
                }
            } catch (error) {
                console.error('Error fetching guide data:', error);
                setGuidedata([]); 
            }
        }

        fetchguideData();
    }, []);


    const reviewPerPage = 3; 




    const reviewStartIndex = reviewpage * reviewPerPage;
    const reviewEndIndex = reviewStartIndex + reviewPerPage;
    const reviewItems = reviewgoods.slice(reviewStartIndex, reviewEndIndex);

    return (
        <>
            <h1 className="sr-only">건강기능식품 홈메인</h1>
            <main className="main">
                <section className="home__visual">
                    <div className="home__visual__inner">
                        <img src="//img.enuri.info/images/health/web/main-visual-txt.svg" alt="식품의약품안전처 인증제품 #최대 1만개 건강기능식품 #하루 최저가 #하루권장량 추천 #ai요약리뷰 #성분정보 끝판왕"/>
                    </div>
                </section>
                <CustomCate/>
                <Recommend/>
                <Best/>
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
                <section className="actual-purchase">
                    <div className="actual-purchase__inner">
                        <h2 className="health__tit">실구매 리뷰 추천 상품</h2>
                        <div className="actual-purchase-goods">
                            <ul className="actual-purchase__list">
                                {reviewItems.map(item => (
                                    <li key={item.key} className="actual-purchase__item">
                                        <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`} target="_blank">
                                            <div className="actual-purchase__product">
                                                <div className="actual-purchase__img">
                                                    <span className="badge_mfds--logo">식약처인증</span>
                                                    <img src={item.strImageUrl} alt={item.strModelName} aria-hidden="true" />
                                                </div>
                                                <div className="actual-purchase__txt">
                                                    <div className="actual-purchase__name">{item.strModelName}</div>
                                                    <div className="actual-purchase__price">
                                                        <div><em>{item.strMinPrice}</em>원</div>
                                                        <div className="actual-purchase__price--day">하루 {item.strDailyPrice}원</div>
                                                    </div>
                                                    <div className="actual-purchase__typical">{item.strSpec1}</div>
                                                </div>
                                            </div>
                                            <div className="actual-purchase__review">
                                                <div className="actual-purchase__review__rate">
                                                    {item.strBbsPoint}<span className="rate--count">({item.strBbsNum})</span>
                                                </div>
                                                <ul className="actual-purchase__review__list">
                                                    {item.arrAiReviewKeyword.map((keyword, index) => (
                                                        <li key={index} className="actual-purchase__review__item">
                                                            <div className="actual-purchase--tit">{keyword.view_kwd}</div>
                                                            <div className="actual-purchase--desc">{keyword.sumry_cts}</div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="actual-purchase__page">
                            <button
                                type="button"
                                className="actual-purchase__btn actual-purchase__btn-prev"
                                onClick={() => setReviewPage(prev => (prev === 0 ? Math.ceil(15 / reviewPerPage) - 1 : prev - 1))}
                            >
                                이전으로
                            </button>
                            <button
                                type="button"
                                className="actual-purchase__btn actual-purchase__btn-next"
                                onClick={() => setReviewPage(prev => (prev === Math.ceil(15 / reviewPerPage) - 1 ? 0 : prev + 1))}
                            >
                                다음으로
                            </button>
                        </div>
                    </div>
                </section>
                <section className="tip">
                    <div className="tip__inner">
                        <h2 className="health__tit">건강+ TIP</h2>
                        <div className="tip__cont">
                            <ul>
                                {guidedata.map(item => (
                                    <li key={item.key}>
                                        <div>{item.ban_nm2}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}