import React, { useState, useEffect } from 'react';

interface GuideData{
    key: number;
    ban_nm2 : string;
}

const Tip: React.FC = () => {

    const [guidedata, setGuidedata] = useState<GuideData[]>([]);

    useEffect(() => {
        async function fetchguideData() {
            try {
                const res = await fetch('/data/guide.data.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                if (data && Array.isArray(data.list)) {
                    setGuidedata(data.list); 
                } else {
                    setGuidedata([]); 
                }
            } catch (error) {
                console.error('Error fetching guide data:', error);
                setGuidedata([]); 
            }
        }

        fetchguideData();
    }, []);

    return (
        <section className="tip">
        <div className="tip__inner">
            <h2 className="health__tit">건강+ TIP</h2>
            <div className="tip__cont">
                <ul>
                    {guidedata.map(item => (
                        <li key={item.key}>
                            <div>{item.ban_nm2}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    );
};

export default Tip;