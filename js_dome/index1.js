const data=[
    { image: "https://png.pngtree.com/png-clipart/20231021/original/pngtree-watercolor-library-book-clip-art-png-image_13391689.png", price: "₹500" },
    { image: "https://c8.alamy.com/comp/AFMDHE/stack-of-hard-cover-books-on-white-background-AFMDHE.jpg", price: "₹750" },
    { image: "https://media.gettyimages.com/id/165852910/photo/lots-of-books.jpg?s=612x612&w=gi&k=20&c=Cca7eijSJRIpQ7leB7n-46011xP0ceVtJsSMAQumRa4=", price: "₹1000" }
];

function Book(bookData) {
    const child=document.createElement("div");
    child.setAttribute("class","card");
    const image=document.createElement("img");
image.setAttribute("src",bookData.image);
image.setAttribute("width","200px");
image.setAttribute("height","200px");
image.setAttribute("align","center");
const h2=document.createElement("h2");
h2.innerText="Price: "+bookData.price;
child.appendChild(image);
child.appendChild(h2);
return child;}



const booklist=document.createElement("div");
booklist.setAttribute("class","booklist");

for (const i of data) {
    booklist.appendChild(Book(i));
}
const parent = document.getElementById("root");
parent.appendChild(booklist);