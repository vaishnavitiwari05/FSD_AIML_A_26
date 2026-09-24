import image from "../assets/react.svg"
import "./Item.css"
const Item = () => {
  return (
    <div className="card">
      <img src={image} width={100} height={100} alt="Item Image"/>
      <h2>Title: ReactJS</h2>
      <h3>Price: ₹574/-</h3>
      <button>AddToCart</button>
    </div>
  )
}

export default Item
