"use client";

import '@styles/global.css';
import HomeVisual from '@/components/home/home.visual';
import CustomCategory from '@/components/home/custom.category';
import RecommendGoods from '@/components/home/recommend.goods';
import Best from '@/components/home/best.goods';
import IngredientCategory from '@/components/home/ingredient.category';
import RealBuyingReview from '@/components/home/real.buying.review';
import Tip from '@components/home/tip';
import '@styles/home/home.css';

export default function Home() {
    return (
        <>
            <h1 className="sr-only">건강기능식품 홈메인</h1>
            <main className="main">
                {/* 비쥬얼 */}
                <HomeVisual/>
                {/* 대상기능카테고리 */}
                <CustomCategory/>
                {/* 추천상품 */}
                <RecommendGoods/>
                {/* 베스트상품 */}
                <Best/>
                {/* 성분카테고리 */}
                <IngredientCategory/>
                {/* 실구매리뷰상품 */}
                <RealBuyingReview/>
                {/* 건강팁 */}
                <Tip/>
            </main>
        </>
    );
}