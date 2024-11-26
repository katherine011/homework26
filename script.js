const Products = document.getElementById("products");
const button = document.getElementById("button");
let number = 0;

button.addEventListener("click", () => {
  number++;
  console.log(number);

  fetch("https://fakestoreapi.com/products/", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
      getData(data);
    });
});

function getData(prod) {
  let foundedSameProd = prod.find((product) => number === product.id);

  if (foundedSameProd) {
    let products = document.createElement("div");

    let category = document.createElement("h1");
    category.textContent = foundedSameProd.category;
    products.appendChild(category);

    let title = document.createElement("h1");
    title.textContent = foundedSameProd.title;
    products.appendChild(title);

    let image = document.createElement("img");
    image.src = foundedSameProd.image;
    products.appendChild(image);

    let description = document.createElement("p");
    description.textContent = foundedSameProd.description;
    products.appendChild(description);

    let price = document.createElement("p");
    price.textContent = "Price: $" + foundedSameProd.price;
    products.appendChild(price);

    let count = document.createElement("p");
    count.textContent = "Count: " + foundedSameProd.rating.count;
    products.appendChild(count);

    let rate = document.createElement("p");
    rate.textContent = "Rate: " + foundedSameProd.rating.rate;
    products.appendChild(rate);

    Products.appendChild(products);
  }
}
