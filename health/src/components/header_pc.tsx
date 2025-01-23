"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@styles/header_pc.module.css'


const PcHeader: React.FC = () => {
    const [isLogIn, setIsLogIn] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const pathname = usePathname();

    const logout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            setIsLogIn(true);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const toggleLogin = () => {
        setIsLogIn(!isLogIn);
    };

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <a href='https://www.enuri.com' className={styles['logo-enuri']} aria-label='에누리홈'>에누리홈</a>
                    <Link href='/home' className={styles['logo-health']} aria-label='건강 플러스홈'>건강 플러스홈</Link>
                </div>
                <div className={styles.search}>
                    <label htmlFor='search' className='sr-only'>건강기능식품 검색</label>
                    <input type='text' id='search' className={styles.ipt} aria-label='건강기능식품 검색창' placeholder='건강기능 식품을 검색해 주세요'></input>
                    <button type='button' className={styles.search__btn}>검색하기</button>
                </div>
                <div className={styles.mymenu}>
                    <div 
                        className={styles.box}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            type='button' 
                            className={styles.info__btn}
                            onClick={toggleLogin}
                            aria-haspopup="true"
                            aria-expanded={isHovered}
                        >
                            {isLogIn ? '로그인' : '정다운님'}
                        </button>
                        {isHovered && (
                            <div className={styles.my__layer} role="menu">
                                {isLogIn ? (
                                    <button type='button' className={styles.login__btn} onClick={()=>{ setIsLogIn(!isLogIn);}} >로그인</button>
                                ) : (
                                <>
                                    <a href='https://www.enuri.com/my/my_enuri.jsp?name=zzim'>마이 e클럽</a>
                                    <a href='https://www.enuri.com/my/eclub.jsp?t=emoney'>e머니<span>75</span>점</a>
                                    <a href='https://www.enuri.com/my/my_enuri.jsp?name=zzim'>구독상품</a>
                                    <a href='https://www.enuri.com/member/info/infoPwChk.jsp'>개인정보관리</a>
                                    <a href='https://www.enuri.com/knowcom/qna.jsp'>쇼핑Q&A</a>
                                    <button type='button' onClick={logout} className={styles.logout__btn}>로그아웃</button>
                                </>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <button type='button' className={styles.latelygoods__btn}>최근 본 상품</button>
                    </div>
                    <div>
                        <button type='button' className={styles.alarm__btn}>알림함</button>
                    </div>
                </div>
            </div>
            <nav className={styles.nav} aria-label='네비게이션 메뉴'>
                <ul className={styles.list}>
                    <li>
                        <Link href='/' className={pathname === '/' ? styles.active : ''}>건강+ 홈</Link>
                    </li>
                    <li>
                        <Link href='/ingredient' className={pathname === '/ingredient' ? styles.active : ''}>대상/기능별</Link>
                    </li>
                    <li>
                        <Link href='/target' className={pathname === '/target' ? styles.active : ''}>대상/기능별</Link>
                    </li>
                    <li>
                        <Link href='/lowest' className={pathname === '/lowest' ? styles.active : ''}>최저가보장</Link>
                    </li>
                    <li>
                        <Link href='/tip' className={pathname === '/tip' ? styles.active : ''}>TIP</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default PcHeader;