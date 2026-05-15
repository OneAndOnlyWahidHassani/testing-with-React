import React, { useState } from 'react'
import MovieForm from './components/MovieForm'
import MovieList from './components/MovieList'
import useLocalStorage from './hooks/useLocalStorage'

export default function App() {
    const [movies, setMovies] = useLocalStorage('movies', [])

    const addMovie = (movie) => {
        setMovies(prev => [...prev, movie])
    }

    const deleteMovie = (id) => {
        setMovies(prev => prev.filter(m => m.id !== id))
    }

    const sortAlpha = () => {
        setMovies(prev => [...prev].sort((a, b) => a.title.localeCompare(b.title, 'sv')))
    }

    const sortByGrade = () => {
        setMovies(prev => [...prev].sort((a, b) => b.rating - a.rating))
    }

    return (
        <div className="container">
            <h1>Min filmlista</h1>

            <section className="add-movie">
                <h2>Lägg till en film</h2>
                <MovieForm onAdd={addMovie} />
            </section>

            <section className="movie-section">
                <div className="controls">
                    <button className="btn" onClick={sortAlpha}>Alfabetisk ordning</button>
                    <button className="btn" onClick={sortByGrade}>Betygsordning</button>
                </div>

                <div className="movie-list">
                    <h2>Inlagda filmer</h2>
                    <MovieList movies={movies} onDelete={deleteMovie} />
                </div>
            </section>
        </div>
    )
}
