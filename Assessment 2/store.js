const cart_btn = document.getElementById("cart-button");
const store = document.getElementById("products");
const cart_list = document.getElementById("cart");
var cart = JSON.parse(localStorage.getItem("cart"));

// if cart is null change it to an empty array
if (!cart) {
	cart = [];
}

cart_btn.addEventListener("click", () => {
	cart_list.style.width = "200px";
});

for (item in products) {
	var div = document.createElement("div");
	var image = document.createElement("img");
	var name = document.createElement("span");
	var quantity = document.createElement("input");
	var price = document.createElement("span");
	var add_btn = document.createElement("button");
	var remove = document.createElement("button");

	image.src = "./Assets/products/" + item.image;
	name.innerText = item.title;
	price.innerText = item.price;
	add_btn.innerText = "Add to cart";

	div.appendChild(image);
	//div.appendChild(name);
	div.appendChild(price);
	div.appendChild(add_btn);
	
	store.appendChild(div);	
		
	quantity.addEventListener("change", () => {
		price.innerText = item.price * quantity.value;
	});

	remove.addEventListener("click", () => {
		const n = cart.indexOf(item);
		cart.splice(n, 1);
	});
	
	add_btn.addEventListener("click", () => {
		add_btn.innerText = "In Cart";
		
		var cart_div = document.createElement("img");
		var cart_image = document.createElement("img");
		var quantity = document.createElement("input");
		
		image.src = "./Assets/products/" + item.image;
		price.innerText = item.price;
		remove_btn.innerText = "Remove";
		
		cart_list.appendChild(div.cloneNode());
	});
		
	
}