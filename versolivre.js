let poesias_vl = [document.getElementById("vl1"), document.getElementById("vl2"), document.getElementById("vl3"), document.getElementById("vl4"), document.getElementById("vl5"), document.getElementById("vl6"), document.getElementById("vl7"), document.getElementById("vl8"), document.getElementById("vl9"), document.getElementById("vl10")]

/* POESIAS LIVRES */
poesias_vl[0].onclick = function(){
	window.open('Poesias/ph_perdido.html', '_blank');
}
poesias_vl[1].onclick = function(){
	window.open('Poesias/alface_árvore.html', '_blank');
}
poesias_vl[2].onclick = function(){
	window.open('Poesias/nanomachines_ventania.html', '_blank');
}
poesias_vl[3].onclick = function(){
	window.open('Poesias/vini_cidadefantasma.html', '_blank');
}
poesias_vl[4].onclick = function(){
	window.open('Poesias/nanomachines_chamas.html', '_blank');
}
poesias_vl[5].onclick = function(){
	window.open('Poesias/ph-mente.html', '_blank');
}
poesias_vl[6].onclick = function(){
	window.open('Poesias/mahh-desastrenohospital.html', '_blank');
}
poesias_vl[7].onclick = function(){
	window.open('Poesias/vini_isolamento.html', '_blank');
}
poesias_vl[8].onclick = function(){
	window.open('Poesias/guidenofo_tristeza_aquatica.html', '_blank');
}

let voltar_button = document.getElementById("main_button");

voltar_button.onclick = function(){
	location.replace("index.html");
}
	