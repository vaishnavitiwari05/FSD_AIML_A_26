const data = [
    {
        image: "https://miro.medium.com/1*42ebJizcUtZBNIZPmmMZ5Q.jpeg",
        price: "₹500"
    },
    {
        image: "https://i.pinimg.com/564x/71/3f/f2/713ff2828de8fd471369fed7991d9cc7.jpg",
        price: "₹750"
    },
    {
        image: "https://i.pinimg.com/originals/11/ae/e8/11aee8055be8960a2fd0024057c7fa8f.jpg",
        price: "₹1000"
    }
];

const cart = [];

// Add book to cart
function addToCart(data) {
    cart.push(data);

    console.log("Book added to cart", data);

    alert("Book added successfully");
}

// View cart
function viewCart() {

    const parent = document.getElementById("cart");

    // Clear previous message
    parent.innerHTML = "";

    if (cart.length === 0) {

        const h2 = React.createElement(
            "h2",
            { style: { color: "red" } },
            "Cart is empty"
        );

        parent.appendChild(h2);

    } else {

        const h2 = React.createElement(
            "h2",
            { style: { color: "red" } },
            "No. of items in cart: " + cart.length
        );

        parent.appendChild(h2);
    }
}

function Book(props) {

    const image = React.createElement("img", {
        src: props.image,
        width: "200px",
        height: "200px",
        alt: "Book"
    });

    const h2 = React.createElement(
        "h2",
        { style: { color: "blue" } },
        "Price: " + props.price
    );

    const btn = React.createElement(
        "button",
        {
            onClick: () => addToCart(props)
        },
        "Add to Cart"
    );

    const div = React.createElement(
        "div",
        { className: "card" },
        [image, h2, btn]
    );

    return div;
}

const bookstore = data.map((b) => Book(b));

const booklist = React.createElement(
    "div",
    { className: "booklist" },
    bookstore
);

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

root.render(booklist);