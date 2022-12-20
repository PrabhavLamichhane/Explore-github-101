import React from 'react'

export default function CardRepo({ item }) {
    const { name, owner, watchers_count, watchers, forks } = item;
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{owner.login}</p>
                    <p className="card-text">{watchers_count}</p>
                    <p className="card-text">{watchers_count}</p>
                    <p className="card-text">{watchers}</p>
                    <p className="card-text">{forks}</p>
                    <a href="#" className="btn btn-primary">See Detail</a>
                </div>
            </div>
        </div>
    )
}
