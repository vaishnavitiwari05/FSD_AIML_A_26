const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ShopEasy</div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Offers</a>
        <a href="#">Contact</a>
      </div>

      <div className="nav-icons">
        <span>🔍</span>
        <span>❤️</span>
        <span>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;