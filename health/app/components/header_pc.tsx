"use client";

import { useState } from 'react';
import '../../styles/header_pc.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Pcheader: React.FC = () => {
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
        <header className='header'>
            <div className='header__inner'>
                <div className='header__logo'>
                    <a href='https://www.enuri.com' className='logo--enuri' aria-label='에누리홈'>에누리홈</a>
                    <Link href='/home' legacyBehavior>
                        <a className='logo--health' aria-label='건강 플러스홈'>건강 플러스홈</a>
                    </Link>
                </div>
                <div className='header__search'>
                    <label htmlFor='search' className='sr-only'>건강기능식품 검색</label>
                    <input type='text' id='search' className='header__search-ipt' aria-label='건강기능식품 검색창' placeholder='건강기능 식품을 검색해 주세요'></input>
                    <button type='button' className='header__search-btn'>검색하기</button>
                </div>
                <div className='header__my-menu'>
                    <div 
                        className='header__my-menu-box'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            type='button' 
                            className='my-menu__btn my-menu__btn--info' 
                            onClick={toggleLogin}
                            aria-haspopup="true"
                            aria-expanded={isHovered}
                        >
                            {isLogIn ? '로그인' : '정다운님'}
                        </button>
                        {isHovered && (
                            <div className='my-menu__layer' role="menu">
                                {isLogIn ? (
                                    <button type='button' onClick={()=>{ setIsLogIn(!isLogIn);}} className='my__menu__login-btn' >로그인</button>
                                ) : (
                                <>
                                    <Link href='https://www.enuri.com/my/my_enuri.jsp?name=zzim' legacyBehavior>
                                        <a>마이 e클럽</a>
                                    </Link>
                                    <Link href='https://www.enuri.com/my/eclub.jsp?t=emoney' legacyBehavior>
                                        <a>e머니<span>75</span>점</a>
                                    </Link>
                                    <Link href='https://www.enuri.com/my/my_enuri.jsp?name=zzim' legacyBehavior>
                                        <a>구독상품</a>
                                    </Link>
                                    <Link href='https://www.enuri.com/member/info/infoPwChk.jsp' legacyBehavior>
                                        <a>개인정보관리</a>
                                    </Link>
                                    <Link href='https://www.enuri.com/knowcom/qna.jsp' legacyBehavior>
                                        <a>쇼핑Q&A</a>
                                    </Link>
                                    <button type='button' onClick={logout} className='my__menu__logout-btn'>로그아웃</button>
                                </>
                                )}
                            </div>
                        )}
                    </div>
                    <div>
                        <button type='button' className='my-menu__btn my-menu__btn--latelygoods'>최근 본 상품</button>
                    </div>
                    <div>
                        <button type='button' className='my-menu__btn my-menu__btn--alarm'>알림함</button>
                    </div>
                </div>
            </div>
            <nav className='nav' aria-label='네비게이션 메뉴'>
                <ul className='nav__list'>
                    <li>
                        <Link href='/home' legacyBehavior>
                            <a className={pathname === '/home' ? 'active' : ''}>건강+ 홈</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/ingredient' legacyBehavior>
                            <a className={pathname === '/ingredient' ? 'active' : ''}>성분별</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/target' legacyBehavior>
                            <a className={pathname === '/target' ? 'active' : ''}>대상/기능별</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/lowest' legacyBehavior>
                            <a className={pathname === '/lowest' ? 'active' : ''}>최저가보장</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/tip' legacyBehavior>
                            <a className={pathname === '/tip' ? 'active' : ''}>TIP</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Pcheader;