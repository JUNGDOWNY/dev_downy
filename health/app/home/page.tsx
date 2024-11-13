import Image from "next/image";
import '../../styles/home.css';
import TargetBtn from '../components/target_btn';
import GoodsList from '../components/goods_list';

interface Good {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}
async function fetchGoods(): Promise<Good[]> {
    const res = await fetch('http://localhost:3000/api/goods');
    if (!res.ok) {
        throw new Error('Failed to fetch goods');
    }
    return res.json();
}

export default async function Home() {
    const goods = await fetchGoods();
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
                    <TargetBtn />
                </div>
            </div>
            <div className="home__cate--ingredient">
                <h2 className="home__cate--tit home__cate--ingredient_tit">기능별 찾기</h2>
                <div className="home__cate--cont">
                    <ul className="ingredient-btn__list">
                        <li><button type="button" className="ingredient-btn" aria-label="기능 전체 선택">전체</button></li>
                        <li><button type="button" className="ingredient-btn" aria-label="기능 영양보충 선택">영양보충</button></li>
                        <li><button type="button" className="ingredient-btn" aria-label="기능 면역력 선택">면역력</button></li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="recommend">
            <GoodsList goods={goods} />
        </section>
        </>
    );
}