import React, { useState, useEffect } from 'react';
import { fetchData } from '@/utils/fetch_data';

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
    strModelNo: string;
    strModelName: string;
    strImageUrl: string;
    strMinPrice: string;
    strWowPrice: string;
    intSaleCnt: number;
}

const Recommend: React.FC = () => {
    const [recommgoods, setRecommgoods] = useState<RecomGoods[]>([]);
    const [recommpage, setRecommPage] = useState<number>(0);
    const recommperPage = 5;
    const recommStartIndex = recommpage * recommperPage;
    const recommEndIndex = recommStartIndex + recommperPage;
    const currentRecommItems = recommgoods.slice(recommStartIndex, recommEndIndex);

    useEffect(() => {
        fetchData('/data/recomgoods.json', (data) => {
            setRecommgoods(data.slice(0, 15));
        });
    }, []);

    return (
        <section className="recommend">
            <div className="recommend__inner">
                <h2 className="health__tit">현직 약사가 추천하는 믿을 수 있는 영양제!</h2>
                <h3 className="health__tit--sub">#유산균 #비타민 #영양제 #미네랄</h3>
                <div className="recomm-goods">
                    <ul className="recomm-goods__list">
                        {currentRecommItems.map(item => (
                            <li key={item.key} className="goods__list--item">
                                <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`}>
                                    <div className="recomm-goods__img">
                                        <img src={item.strImageUrl} alt={item.strModelName} role="presentation" />
                                    </div>
                                    <div className="recomm-goods__txt">
                                        <div className="recomm-goods__name">{item.strModelName}</div>
                                        <div className="recomm-goods__price">
                                            <span><em>{item.strMinPrice}</em>원</span>
                                            <span className="recomm-goods__price--day">{item.strDailyPrice}원</span>
                                        </div>
                                        <div className="recomm-goods__ingredient">{item.strMainIngredient}</div>
                                        <div className="recomm-goods__rate">{item.strBbsPoint}점<span className="rate--count">({item.strBbsNum})</span></div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="recommend__page">
                    <button
                        type="button"
                        className="recommend__btn recommend__btn-prev"
                        onClick={() => setRecommPage(prev => (prev === 0 ? Math.ceil(recommgoods.length / recommperPage) - 1 : prev - 1))}
                    >
                        이전으로
                    </button>
                    <button
                        type="button"
                        className="recommend__btn recommend__btn-next"
                        onClick={() => setRecommPage(prev => (prev === Math.ceil(recommgoods.length / recommperPage) - 1 ? 0 : prev + 1))}
                    >
                        다음으로
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Recommend;