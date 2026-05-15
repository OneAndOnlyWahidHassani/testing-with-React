import React, { useState } from 'react'

export default function MovieForm({ onAdd }) {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) {
            alert('Ange en titel för filmen.')
            return
        }
        if (!rating) {
            alert('Välj ett betyg för filmen.')
            return
        }
        const movie = {
            id: Date.now().toString() + Math.random().toString(36).slice(2),
            title: title.trim(),
            rating: parseInt(rating, 10)
        }
        onAdd(movie)
        setTitle('')
        setRating('')
    }

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <label>
                Titel:
                <input
                    type="text"
                    placeholder="Titel här..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>

            <label>
                Betyg:
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>

            <button type="submit" className="btn save">Spara film</button>
        </form>
    )
}
