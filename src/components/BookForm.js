import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        }})
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="book title" required value={title}/>
            <input onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder="author name" required value={author}/>
            <input type="submit" value="add book"/>
        </form>
    );
}

export default NewBookForm;