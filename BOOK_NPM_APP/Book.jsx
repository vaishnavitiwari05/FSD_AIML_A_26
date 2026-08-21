function Book({ book }) {
    return (
        <div className="book">

            <img
                src={book.image}
                alt={book.name}
            />

            <h2>{book.name}</h2>

            <h2>Price: {book.price}</h2>

            <button
                onClick={() => addToCart(book)}
            >
                Add to Cart
            </button>

        </div>
    );
}
export default Book;