// src/Components/Books.jsx
import React, { useState } from "react";
import booksData from "../Utils/Books";
import styles from "../styles/Books.module.css";

function Books() {
  const [bookList, setBookList] = useState(booksData);

  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: 2025,
      description: "Deskripsi buku baru.",
      image: "https://placehold.co/150x200",
    };
    setBookList([...bookList, newBook]);
  };

  return (
    <div className={styles.bookContainer}>
      <h1 className={styles.title}>Daftar Buku</h1>
      <div className={styles.cardContainer}>
        {bookList.map((book) => (
          <div key={book.id} className={styles.card}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Penulis:</strong> {book.author}</p>
            <p><strong>Tahun:</strong> {book.year}</p>
            <p>{book.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleAddBook} className={styles.addButton}>
        Tambah Buku Baru
      </button>
    </div>
  );
}

export default Books;
