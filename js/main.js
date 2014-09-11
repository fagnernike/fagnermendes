
jQuery(document).ready(function(){


	/**********************************
	   Função para Smooth Scrolling
	**********************************/
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	})


	/***********************************************
		Abrir / fechar submenu no celular e tablet
	*************************************************/
	$('.kinda-principal-nav').on('click', function(event){
		if($(event.target).is('.kinda-principal-nav')) $(this).children('ul').toggleClass('is-visible');
		if($(event.target).is('.kinda-principal-nav')) $('.fundoMenuMobile').toggleClass('is-visible');
	});
	
	/*******************************************
		 fechar submenu no celular e tablet
	********************************************/
	$('.kinda-principal-nav ul a').on('click', function(event){
		$('ul.is-visible').removeClass('is-visible');
		$('.fundoMenuMobile.is-visible').removeClass('is-visible');
	});

	/*************************************************************
	   funções para para carousel #owl-carousel-fiquePorDentro  
	*************************************************************/

	$('owl-carousel-temosQueMostrar').owlCarousel({
		navigation : true, // Show next and prev buttons
	    loop:true,
	    margin:10,
	    autoplayHoverPause:true,
	    responsiveClass:true,	    
	    responsive:{
	        0:{
	            items:1,	            
	        },
	        600:{
	            items:3,	            
	        },
	        1000:{
	            items:5,	            
	        }
	    }
	})
	


	$('#owl-carousel-temosQueMostrar').owlCarousel({
		navigation : true, // Show next and prev buttons
	    loop:true,
	    margin:10,
	    autoplayHoverPause:true,
	    responsiveClass:true,	    
	    responsive:{
	        0:{
	            items:1,	            
	        },
	        600:{
	            items:1,	            
	        },
	        1000:{
	            items:1,	            
	        }
	    }
	})


	

	$(window).scroll(function (){


		/**********************************
		   funções para header da kinda 
		**********************************/
		var poucoQueIntereca = $(".poucoQueIntereca .posicao").offset().top;
		var fiquePorDentro = $(".fiquePorDentro .posicao").offset().top;
		var temosQueMostrar = $(".temosQueMostrar .posicao").offset().top;
		var junteSeNos = $(".junteSeNos .posicao").offset().top;
	    var  scrollTop = $(this).scrollTop();
	    var cssClass = '';

		if((scrollTop >= poucoQueIntereca) && (scrollTop <= fiquePorDentro)) {      
	        cssClass = 'poucoQueIntereca';
	    }else if((scrollTop >= fiquePorDentro) && (scrollTop <= temosQueMostrar)) {     
		    cssClass = 'fiquePorDentro';
		}else if((scrollTop >= temosQueMostrar) && (scrollTop <= junteSeNos)) {      	        	
			cssClass = 'temosQueMostrar';
		}else if(scrollTop >= junteSeNos) {     
			cssClass = 'junteSeNos';
	    }else{      
			cssClass = '';
	    }

	    $("#kinda-header").removeClass();
	    $("#kinda-header").addClass(cssClass);

	});

	/*************************************************************
	   adiciona e remove class selecionado nos links do menu
	*************************************************************/
	function trocaSelecionado(nomeItem) {
        $("#kinda-header .kinda-principal-nav a").removeClass("selecionado");
        $("#kinda-header .kinda-principal-nav a."+nomeItem).addClass("selecionado");
    }
	
	$(document).ready(function () {
        $(".r1").click(function() {trocaSelecionado("r1");});
        $(".r2").click(function() {trocaSelecionado("r2");});
        $(".r3").click(function() {trocaSelecionado("r3");});
	    $(".r4").click(function() {trocaSelecionado("r4");});    


	          
	});

	



});


