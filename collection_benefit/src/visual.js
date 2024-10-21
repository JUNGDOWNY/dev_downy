import React from 'react';

function Visual(){
    const points = "506,700"; 
    const pointArray = points.split(''); 

    return (
        <div className='wrap'>
            <div className="visual">
                <div className="container">
                    <span className="visual_txt1">이달의 혜택</span>
                    <img src="//img.enuri.info/images/event/2024/collection_benefit/aug/visual_txt2.png" alt="8월 에누리 혜택.ZIP" className="visual_txt2"/>
                    <div className="my_benefit">
                        <span className="my_benefit_txt1">내가 받을 수 있는 혜택</span>
                        <div className="my_benefit_txt2">
                            총 {pointArray.map((char, index) => (
                                <span key={index} style={{ "--i": index + 1 }}>
                                    {char}
                                </span>
                            ))}점
                        </div>
                        <div className="benefit_wrap">
                            <div className="col col_6 benefit_box">
                                <div className="benefit_tit">참여 혜택</div>
                                <div className="benefit_cont">226,700점</div>
                            </div>
                            <div className="col col_6 benefit_box">
                                <div className="benefit_tit">구매 혜택</div>
                                <div className="benefit_cont">280,000점</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Visual;
