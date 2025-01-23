import React, { useState, useEffect } from 'react';
import { fetchData } from '@/utils/fetch.data';
import styles from '@styles/home/recommend.goods.module.css'

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

const RecommendGoods: React.FC = () => {
    const [recommgoods, setRecommgoods] = useState<RecomGoods[]>([]);
    const [recommpage, setRecommPage] = useState<number>(0);
    const recommperPage = 5;
    const recommStartIndex = recommpage * recommperPage;
    const recommEndIndex = recommStartIndex + recommperPage;
    const currentRecommItems = recommgoods.slice(recommStartIndex, recommEndIndex);

    useEffect(() => {
        fetchData('/data/recommend.goods.json', (data) => {
            setRecommgoods(data.slice(0, 15));
        });
    }, []);

    return (
        <section className={styles['recommend-goods']}>
            <div className={styles.inner}>
                <h2 className={styles.tit}>현직 약사가 추천하는 믿을 수 있는 영양제!</h2>
                <h3 className={styles['sub-tit']}>#유산균 #비타민 #영양제 #미네랄</h3>
                <div className={styles.goods}>
                    <ul className={styles.list}>
                        {currentRecommItems.map(item => (
                            <li key={item.key} className={styles.item}>
                                <a href={`https://www.enuri.com/detail.jsp?modelno=${item.strModelNo}`}>
                                    <div className={styles.img}>
                                        <img src={item.strImageUrl} alt={item.strModelName} role="presentation" />
                                    </div>
                                    <div className={styles.text}>
                                        <div className={styles.name}>{item.strModelName}</div>
                                        <div  className={styles.price}>
                                            <span><em>{item.strMinPrice}</em>원</span>
                                            <span className={styles['daily-price']}>{item.strDailyPrice}원</span>
                                        </div>
                                        <div className={styles.ingredeint}>{item.strMainIngredient}</div>
                                        <div className={styles.rate}>{item.strBbsPoint}점<span  className={styles['rate-count']}>({item.strBbsNum})</span></div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.page}>
                    <button
                        type="button"
                        className={`${styles.button} ${styles['prev-button']}`}
                        onClick={() => setRecommPage(prev => (prev === 0 ? Math.ceil(recommgoods.length / recommperPage) - 1 : prev - 1))}
                    >
                        이전으로
                    </button>
                    <button
                        type="button"
                        className={`${styles.button} ${styles['next-button']}`}
                        onClick={() => setRecommPage(prev => (prev === Math.ceil(recommgoods.length / recommperPage) - 1 ? 0 : prev + 1))}
                    >
                        다음으로
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RecommendGoods;