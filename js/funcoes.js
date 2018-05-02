$(function(){

	// Criação da função que pega a maior altura da div grid
	function padronizaHeight() {

		// Setando o css da div grid como auto antes de setar as outras configurações 
		$('.box').css('height', 'auto');

		// criação de um array chamado alturas para armazenar todos os heights  das divs
		var alturas = new Array();

		// Iniciando uma função de each, tipo o foreach do php 
		$('.box').each(function(){

			// O array alturas vai iterar o height de cada uma delas
			alturas.push($(this).height());

		});

		// Depois de ter o array com todos os tamanhos de todas as divs a gente seta o css de todas elas pegando o maior valor do array
		$('.box').css('height', Math.max.apply(null, alturas) + 'px');

	}

	// Aqui a gente chama a função assim que carrega o arquivo.js
	padronizaHeight();

	$(window).load(function(){

		padronizaHeight();

	});

	// Aqui a gente chama um evento que dispara assim que o user redimensiona a página
	$(window).on('resize', function(){

		// Assim que ele redimensionar essa nossa função é disparada
		padronizaHeight();

	});

});