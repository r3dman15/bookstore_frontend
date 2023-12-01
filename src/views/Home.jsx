import React, {useEffect, useState} from "react";
import BookCard from "../components/BookCard";
import axios from "axios";



const Home = () => {
    const [books, setBooks] =  useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/bookstore/book")
            .catch(er => console.log(er))
            .then(res => {
                console.log(res.data)
                setBooks(res.data)
            })
    },[])

     return <div>  { books.map(({title, price, genre, availability, image_url ,description, authors}) => <BookCard authors={authors} description={description} image_url={image_url} title={title} price={price} availability={availability} genre={genre.name}/>) } </div>
}

export default Home