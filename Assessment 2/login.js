console.log("start");

const form = document.getElementById("login");
const default_username = "jonathan";
const default_password = "123456789";

var attempts = 0;

form.addEventListener("submit", (event) => {
	event.preventDefault();
	
	const username = form.elements["username"];
	const password = form.elements["password"];
	
	if (username.value === default_username && password.value === default_password) {
		alert("success");
		sessionStorage.setItem("username", username.value);
		window.location.href = "store.html";
	}
	else {	
		if (attempts === 3) {
			alert("Too many login attempts");
			console.log("too many attemps");
			window.location.href = "error.html";
		}
		
		alert("incorrect login");
		attempts += 1;
		console.log(attempts);
	}
});

form.addEventListener("change", (event) => {
	const label
});