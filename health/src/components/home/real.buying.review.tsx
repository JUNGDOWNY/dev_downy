import React, { useState, useEffect } from 'react';
import { fetchData } from '@/utils/fetch.data';

interface ReviewKeyword {
    view_kwd: string;
    sumry_cts: string;
}
interface ReviewGoods {
    key: null | undefined;
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

const RealBuyingReview: React.FC = () => {
    const [reviewgoods, setReviewgoods] = useState<ReviewGoods[]>([]);
    const [reviewpage, setReviewPage] = useState<number>(0);
    const ReviewPerPage = 3;
    const ReviewStartIndex = reviewpage * ReviewPerPage;
    const ReviewEndIndex = ReviewStartIndex + ReviewPerPage;
    const ReviewItems = reviewgoods.slice(ReviewStartIndex, ReviewEndIndex);

    useEffect(() => {
        fetchData('/data/review.goods.json', (data) => {
            setReviewgoods(data.slice(0, 15));
        });
    }, []);

    return (
        <section className="real-buying-review">
            <div className="real-buying-review__inner">
                <h2 className="health__tit">실구매 리뷰 추천 상품</h2>
                <div className="real-buying-review-goods">
                    <ul className="real-buying-review__list">
                        {ReviewItems.map(item => (
                            <li key={item.key} className="real-buying-review__item">
                                <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`} target="_blank">
                                    <div className="real-buying-review__product">
                                        <div className="real-buying-review__img">
                                            <span className="badge_mfds--logo">식약처인증</span>
                                            <img src={item.strImageUrl} alt={item.strModelName} aria-hidden="true" />
                                        </div>
                                        <div className="real-buying-review__txt">
                                            <div className="real-buying-review__name">{item.strModelName}</div>
                                            <div className="real-buying-review__price">
                                                <div><em>{item.strMinPrice}</em>원</div>
                                                <div className="real-buying-review__price--day">하루 {item.strDailyPrice}원</div>
                                            </div>
                                            <div className="real-buying-review__typical">{item.strSpec1}</div>
                                        </div>
                                    </div>
                                    <div className="real-buying-review__review">
                                        <div className="real-buying-review__review__rate">
                                            {item.strBbsPoint}<span className="rate--count">({item.strBbsNum})</span>
                                        </div>
                                        <ul className="real-buying-review__review__list">
                                            {item.arrAiReviewKeyword.map((keyword, index) => (
                                                <li key={index} className="real-buying-review__review__item">
                                                    <div className="real-buying-review--tit">{keyword.view_kwd}</div>
                                                    <div className="real-buying-review--desc">{keyword.sumry_cts}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="real-buying-review__page">
                    <button
                        type="button"
                        className="real-buying-review__btn real-buying-review__btn-prev"
                        onClick={() => setReviewPage(prev => (prev === 0 ? Math.ceil(15 / ReviewPerPage) - 1 : prev - 1))}
                    >
                        이전으로
                    </button>
                    <button
                        type="button"
                        className="real-buying-review__btn real-buying-review__btn-next"
                        onClick={() => setReviewPage(prev => (prev === Math.ceil(15 / ReviewPerPage) - 1 ? 0 : prev + 1))}
                    >
                        다음으로
                    </button>
                </div>
            </div>
    </section>
    );
};

export default RealBuyingReview;