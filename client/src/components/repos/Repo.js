import React, { useEffect, useState } from 'react';
import CardRepo from './CardRepo';
import './repo.css';

export default function Repo({ data }) {
    return (
        <div className='repos'>
            {data.map(item => (<CardRepo key={item.id} item={item} />))}
        </div>
    )
}
