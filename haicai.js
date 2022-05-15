let poesias_haicais = [document.getElementById("haicai1"), document.getElementById("haicai2"), document.getElementById("haicai3"), document.getElementById("haicai4"), document.getElementById("haicai5"), document.getElementById("haicai6"), document.getElementById("haicai7"), document.getElementById("haicai8"), document.getElementById("haicai9"), document.getElementById("haicai10")]

/* POESIAS PEQUENAS E NATUREZAIS */
poesias_haicais[0].onclick = function(){
	window.open('Poesias/nanomachines_chamas.html');
}
poesias_haicais[1].onclick = function(){
	window.open('Poesias/nanomachines_ventania.html');
}

let voltar_button = document.getElementById("main_button");

voltar_button.onclick = function(){
	location.replace("index.html");
}
	