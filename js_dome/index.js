// Array of book data
const books = [
  { title: "JavaScript Essentials", price: "₹499", img: "https://dummyimage.com/200x200/000/fff&text=JS+Book" },
  { title: "Python Programming", price: "₹599", img: "https://dummyimage.com/200x200/007bff/fff&text=Python+Book" },
  { title: "Data Structures", price: "₹699", img: "https://dummyimage.com/200x200/28a745/fff&text=DS+Book" },
  { title: "Machine Learning", price: "₹799", img: "https://dummyimage.com/200x200/f39c12/fff&text=ML+Book" }
];

const parent = document.getElementById("root");

// Dynamically create book cards
books.forEach(book => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const image = document.createElement("img");
  image.setAttribute("src", book.img);
  image.setAttribute("alt", book.title);

  const title = document.createElement("h3");
  title.innerText = book.title;

  const price = document.createElement("h2");
  price.innerText = `Price: ${book.price}`;

  card.appendChild(image);
  card.appendChild(title);
  card.appendChild(price);

  parent.appendChild(card);
});
