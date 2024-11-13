import React from 'react';
import css  from 'styled-jsx/css';

interface Good {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface GoodsListProps {
    goods: Good[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
    return (
        <div>
            <ul className='goods__list'>
                {goods.map(item => (
                    <li key={item.id} className='goods__list--item'>
                        <div className="goods__list--img">
                            <img src={item.imageUrl} alt={item.name} role="presentation" />
                        </div>
                        <div className="goods__list--txt">
                            <div>{item.name}</div>
                            <div>{item.price}원</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoodsList;