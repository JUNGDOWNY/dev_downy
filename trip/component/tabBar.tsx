"use client";

import React, { useState } from 'react';
import Link from 'next/link';

type Tab = 'plan' | 'budget' |'etc' ;
const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('plan'); // useState에 타입을 명시합니다.

  const handleTabClick = (tab: Tab): void => { // tab의 타입을 명시합니다.
    setActiveTab(tab);
  };

  return (
    <div style={{ display: 'flex', borderBottom: '2px solid #ccc' }}>
      <div
        onClick={() => handleTabClick('plan')}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          borderBottom: activeTab === 'plan' ? '2px solid #000' : 'none',
        }}
      >
        <Link href="/plan">일정</Link>
      </div>
      <div
        onClick={() => handleTabClick('budget')}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          borderBottom: activeTab === 'budget' ? '2px solid #000' : 'none',
        }}
      >
        <Link href="/budget">예산</Link>
      </div>
      <div
        onClick={() => handleTabClick('etc')}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          borderBottom: activeTab === 'etc' ? '2px solid #000' : 'none',
        }}
      >
        <Link href="/etc">기타</Link>
      </div>
    </div>
  );
};

export default TabBar;
