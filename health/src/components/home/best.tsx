import React, { useState, useEffect } from 'react';
import { fetchData } from '@/utils/fetch_data';

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

const Best: React.FC = () => {
    const [bestgoods, setBestgoods] = useState<BestGoods[]>([]);
    const [bestpage, setBestPage] = useState<number>(0);
    const bestperPage = 4;
    const bestStartIndex = bestpage * bestperPage;
    const bestEndIndex = bestStartIndex + bestperPage;
    const bestItems = bestgoods.slice(bestStartIndex, bestEndIndex);

    useEffect(() => {
        fetchData('/data/bestgoods.json', (data) => {
            setBestgoods(data.slice(0, 15));
        });
    }, []);
    
    return (
        <section className="best">
        <div className="best__inner">
            <h2 className="health__tit">건강Plus 판매량 베스트 상품</h2>
            <div className="best-goods">
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
            <button
                    type="button"
                    className="best__btn best__btn-prev"
                    onClick={() => setBestPage(prev => (prev === 0 ? Math.ceil(12 / bestperPage) - 1 : prev - 1))}
                >
                    이전으로
                </button>
                <button
                    type="button"
                    className="best__btn best__btn-next"
                    onClick={() => setBestPage(prev => (prev === Math.ceil(12 / bestperPage) - 1 ? 0 : prev + 1))}
                >
                    다음으로
                </button>
            </div>
        </div>
    </section>
    );
};

export default Best;