const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <p className="small-text">WELCOME TO SHOPEASY</p>

        <h1>
          Everything You Need,
          <br />
          All In One Place
        </h1>

        <p>
          Discover amazing products at the best prices.
          Shop easily and securely from anywhere.
        </p>

        <button>Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
          alt="Shopping"
        />
      </div>
    </header>
  );
};

export default Header;