const data = [
  { image: "https://png.pngtree.com/png-clipart/20231021/original/pngtree-watercolor-library-book-clip-art-png-image_13391689.png", price: "₹500" },
  { image: "https://c8.alamy.com/comp/AFMDHE/stack-of-hard-cover-books-on-white-background-AFMDHE.jpg", price: "₹750" },
  { image: "https://media.gettyimages.com/id/165852910/photo/lots-of-books.jpg?s=612x612&w=gi&k=20&c=Cca7eijSJRIpQ7leB7n-46011xP0ceVtJsSMAQumRa4=", price: "₹1000" }
];
function book(props) {
 const image=React.createElement("img",{src:props.image,width:"200px",height:"200px",align:"center"});
 const h2=React.createElement("h2",{color:'red'},"Price: "+props.price);
 const child=React.createElement("div",{className:"card"},image,h2);
 return child;
}
const booklist=React.createElement("div",{className:"booklist"},data.map((i)=>book(i)));
const parent = document.getElementById("root");
ReactDOM.render(booklist,parent);


