const form = document.getElementById("filters");
const filters = document.querySelectorAll("input[type=checkbox]");
const items = document.getElementsByClassName("product");

form.addEventListener("change", filter_items);

function filter_items() {
	for (filter of filters) {
	console.log(filter);
		for (item of items) {
			console.log(item);
			if (item.classList.contains(filter.value)) {
				item.classList.toggle('hidden', !filter.checked && filtered());
			}
		}
	}
}

function filtered() {
	for (f of filters) {
		if (f.checked) {
			return true;
		}
	}
	return false;
}