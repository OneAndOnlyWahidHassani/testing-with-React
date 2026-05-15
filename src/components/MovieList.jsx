import React from 'react'
import MovieItem from './MovieItem'

export default function MovieList({ movies, onDelete }) {
    if (!movies || movies.length === 0) return <p>Inga filmer inlagda.</p>

    return (
        <ul className="movies">
            {movies.map((m) => (
                <MovieItem key={m.id} movie={m} onDelete={onDelete} />
            ))}
        </ul>
    )
}
