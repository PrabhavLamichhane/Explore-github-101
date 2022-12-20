import React from 'react'
import './card-repo.css';

export default function CardRepo({ item }) {
    const { name, owner, watchers_count, watchers, forks } = item;
    return (
        <div className="card p-3">
            <div className="d-flex align-items-center">
                <div className="image"> <img src={owner.avatar_url} className="rounded" width="155" /> </div>
                <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0">{name}</h4> <span>By: {owner.login}</span>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column"> <span className="articles">Stars</span> <span className="number1">{watchers_count}⭐</span> </div>
                        <div className="d-flex flex-column"> <span className="followers">Watchers</span> <span className="number2">{watchers} 👀</span> </div>
                        <div className="d-flex flex-column"> <span className="rating">Forks</span> <span className="number3">{forks}</span> </div>
                    </div>
                    <div className="button mt-2 d-flex flex-row align-items-center"> <button className="btn btn-sm btn-outline-primary w-100">See Details</button> </div>
                </div>
            </div>
        </div>
    )
}
