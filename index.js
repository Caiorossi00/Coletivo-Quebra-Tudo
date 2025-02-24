const books = [
  { title: "The Great Adventure", author: "John Smith", price: "$19.99" },
  { title: "Mystery of the Ages", author: "Sarah Johnson", price: "$24.99" },
  { title: "Digital Revolution", author: "Mike Wilson", price: "$29.99" },
  { title: "Poetry Collection", author: "Emily Brooks", price: "$15.99" },
];

const bookGrid = document.querySelector(".book-grid");

books.forEach((book) => {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  bookCard.innerHTML = `
    <div class="book-image">Book Cover</div>
    <div class="book-info">
      <h3>${book.title}</h3>
      <p>By ${book.author}</p>
      <div class="price">${book.price}</div>
      <button class="buy-btn">Add to Cart</button>
    </div>
  `;

  bookGrid.appendChild(bookCard);
});
