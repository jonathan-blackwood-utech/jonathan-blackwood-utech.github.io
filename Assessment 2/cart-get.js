const grid = document.getElementById("products");
const cart = localStorage.getItem("cart");

for (item of cart) {
	

for (p of products) {
		var div = document.createElement("div");
		var image = document.createElement("img");
		var name = document.createElement("span");
		var price = document.createElement("span");
		var button = document.createElement("button");
		const src = p.image;
	
		div.classList.add("product");
		div.classList.add(p.tag);
		image.src = "Assets/products/" + p.image;
		image.width = 200;
		name.innerText = p.name;
		price.innerText = "$" + p.price + " JMD";
		button.innerText = "Add to cart";
	
		button.addEventListener("click", () => {
			console.log(p);
			if (!cart.includes(p)) {
				cart.push(p);
				cart_count.innerText = cart.length;
			}
		});
		
		div.appendChild(image);
		//div.appendChild(name);
		div.appendChild(price);
		div.appendChild(button);
		grid.appendChild(div);
}
	