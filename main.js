let aboutus_button = document.getElementById("about-us");
let send_button = document.getElementById("send_");
let piadus_button = document.getElementById("piadas_button");
let haicus_button = document.getElementById("haicai_button");
let versosl_button = document.getElementById("versoslivres_button");

aboutus_button.onclick = function(){
	location.replace("about-us-page.html");
}
send_button.onclick = function(){
	location.replace("send.html");
}
piadus_button.onclick = function(){
	location.replace("index_piadas.html");
}
haicus_button.onclick = function(){
	location.replace("index_haicai.html");
}
versosl_button.onclick = function(){
	location.replace("index_versolivre.html");
}

let poesias_recentes = [document.getElementById("recente1"), document.getElementById("recente2"), document.getElementById("recente3"), document.getElementById("recente4"), document.getElementById("recente5"), document.getElementById("recente6"), document.getElementById("recente7"), document.getElementById("recente8"), document.getElementById("recente9"), document.getElementById("recente10")];
let poesias_populares = [document.getElementById("popular1"), document.getElementById("popular2"), document.getElementById("popular3"), document.getElementById("popular4"), document.getElementById("popular5"), document.getElementById("popular6"), document.getElementById("popular7"), document.getElementById("popular8"), document.getElementById("popular9"), document.getElementById("popular10")];
let poetas_tops = [document.getElementById("poeta1"), document.getElementById("poeta2"), document.getElementById("poeta3"), document.getElementById("poeta4"), document.getElementById("poeta5"), document.getElementById("poeta6"), document.getElementById("poeta7"), document.getElementById("poeta8"),document.getElementById("poeta9"), document.getElementById("poeta10")];
/* POESIAS RECENTES */
poesias_recentes[9].onclick = function(){
	window.open('Poesias/vini_isolamento.html', '_blank');
}
poesias_recentes[8].onclick = function(){
	window.open('Poesias/mahh-desastrenohospital.html', '_blank');
}
poesias_recentes[7].onclick = function(){
	window.open('Poesias/ph-mente.html', '_blank');
}
poesias_recentes[6].onclick = function(){
	window.open('Poesias/nanomachines_chamas.html', '_blank');
}
poesias_recentes[5].onclick = function(){
	window.open('Poesias/vini_cidadefantasma.html', '_blank');
}
poesias_recentes[4].onclick = function(){
	window.open('Poesias/nanomachines_ventania.html', '_blank');
}
poesias_recentes[3].onclick = function(){
	window.open('Poesias/alface_árvore.html', '_blank');
}
poesias_recentes[2].onclick = function(){
	window.open('Poesias/ph_perdido.html', '_blank');
}

/* POESIAS QUE ESTÃO POPULARES */

poesias_populares[0].onclick = function(){
	window.open('Poesias/vini_isolamento.html', '_blank');
}

/* AUTORES DE POEMAS*/
poetas_tops[0].onclick = function(){
	window.open('Poetas/Vini.html', '_blank');
}
poetas_tops[1].onclick = function(){
	window.open('Poetas/maaahh.html', '_blank');
}
poetas_tops[2].onclick = function(){
	window.open('Poetas/ph.html', '_blank');
}
poetas_tops[3].onclick = function(){
	window.open('Poetas/Nanomachines.html', '_blank');
}
poetas_tops[4].onclick = function(){
	window.open('Poetas/Alface.html', '_blank');
}