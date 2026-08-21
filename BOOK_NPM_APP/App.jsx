const bookdata = [
    {
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        price: "₹500",
        name: "Book 1"
    },
    {
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        price: "₹600",
        name: "Book 2"
    },
    {
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        price: "₹700",
        name: "Book 3"
    }
];
function App() {
    return (
        <div className="books">

            {bookdata.map((book, index) => (
                <Book
                    key={index}
                    book={book}
                />
            ))}

        </div>
    );
}
import Book from "./Book.jsx";
export default App;