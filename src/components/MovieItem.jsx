import React from 'react'

export default function MovieItem({ movie, onDelete }) {
    const stars = Array.from({ length: movie.rating }, (_, i) => (
        <span key={i} className="star">★</span>
    ))

    return (
        <li className="movie-item">
            <span className="title">{movie.title}</span>
            <span className="stars">{stars}</span>
            <button className="delete" onClick={() => onDelete(movie.id)} aria-label={`Ta bort ${movie.title}`}>
                ✖
            </button>
        </li>
    )
}
