import React, { useEffect, useState } from 'react';
import CardRepo from './CardRepo';

export default function Repo({ data }) {
    return (
        <div>
            {data.map(item => (<CardRepo key={item.id} item={item} />))}
        </div>
    )
}
