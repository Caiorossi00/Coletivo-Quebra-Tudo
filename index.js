const books = [
  {
    title: "The Great Adventure",
    author: "John Smith",
    price: "R$19.99",
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mystery of the Ages",
    author: "Sarah Johnson",
    price: "R$24.99",
    image:
      "https://images.unsplash.com/photo-1538035323718-63409b754ce7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Digital Revolution",
    author: "Mike Wilson",
    price: "R$29.99",
    image:
      "https://images.unsplash.com/photo-1545239351-cefa43af60f3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Poetry Collection",
    author: "Emily Brooks",
    price: "R$15.99",
    image:
      "https://images.unsplash.com/photo-1542871793-fd7e2b3cd0b8?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const bookGrid = document.querySelector(".book-grid");

books.forEach((book) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  bookCard.innerHTML = `
  <div class="book-image">
    <img src="${book.image}" alt="${book.title} Cover" />
  </div>
  <div class="book-info">
    <h3>${book.title}</h3>
    <p>By ${book.author}</p>
    <div class="book-price">${book.price}</div>
    <button class="buy-btn">Comprar</button>
  </div>
`;

  bookGrid.appendChild(bookCard);
});
