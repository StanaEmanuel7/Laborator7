function changeProfile() {
	// apelam toate functiile pentru a se efectua modificari in pagina
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = " Artificial Intelligence (AI) Engineer - Meta "; //schimbam numele cu o functie dorita in viitor
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1"); //modificam fiecare rand din tabel cu informatia dorita
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship";
	p1.innerHTML = "01.08.2025-24.11.2025";
	l1.innerHTML = "https://www.amazon.jobs/en/teams/internships-for-students";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Cea mai originala lucrare de licenta";
	p2.innerHTML = "28.06.2026";
	l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Voluntariat ";
	p3.innerHTML = "01.07.2023-24.10.2023";
	l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
}

function oldToNewImage() {
	var img = document.getElementById("pozaProfil"); //schimbam poza din pagina dupa id-ul ei
	img.src = "avatar.jpg";
	img.style.opacity = 0.95;
	img.style.borderWidth = '8px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = 'blue';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body"); //schimbam culoarea de fundal a paginii dupa id-ul body-ului
	body.style.backgroundColor  = "#4e805b";
	body.style.fontFamily="Helvetica";
	
}