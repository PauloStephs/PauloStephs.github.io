let poesias_piadas = [document.getElementById("piada1"), document.getElementById("piada2"), document.getElementById("piada3"), document.getElementById("piada4"), document.getElementById("piada5"), document.getElementById("piada6"), document.getElementById("piada7"), document.getElementById("piada8"), document.getElementById("piada9"), document.getElementById("piada10")]

/* POESIAS PIADAS/SEM SENTIDO FILOSÓFICO */
poesias_piadas[0].onclick = function(){
	window.open('Poesias/mahh-desastrenohospital.html');
}

let voltar_button = document.getElementById("main_button");

voltar_button.onclick = function(){
	location.replace("index.html");
}
	