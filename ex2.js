function AddNewItem() {
	// call all functions
	addBirthDate(); //functie adaugare data nasterii
}

function addBirthDate() {
	var tag = document.createElement("h3"); //cream un element h3
	tag.id = "date-years";
	var text = document.createTextNode("2003"); //se creeaza un text cu anul ales
	var element = document.getElementById("birthdate");//se modifica elementul cu id-ul "birthdate"
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears); // se modifica continutul doar la trecerea mouse-ului peste text
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}

function birthToYears() {
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears; // calculul varstei
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '2003';
	}

