import Image from "next/image";
import '../../styles/home.css';

export default function Home() {
    return (
        <>
        <h1 className="sr-only">건강기능식품 홈메인</h1>
        <section className="home__visual">
            <div className="home__visual__inner">
                <img src="//img.enuri.info/images/health/web/main-visual-txt.svg" alt="식품의약품안전처 인증제품 #최대 1만개 건강기능식품 #하루 최저가 #하루권장량 추천 #ai요약리뷰 #성분정보 끝판왕"/>
            </div>
        </section>
        <section className="home__cate">
            <div className="home__cate--ingredient">
                <h2>섭취 대상별 찾기</h2>
            </div>
        </section>
        </>
    );
}