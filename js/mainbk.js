
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
	});


	/************************************************
		Abrir / fechar submenu no celular e tablet
	*************************************************/
	$('.kinda-principal-nav').on('click', function(event){
		if($(event.target).is('.kinda-principal-nav')) $(this).children('ul').toggleClass('is-visible');
	});
	
	/*******************************************
		 fechar submenu no celular e tablet
	********************************************/
	$('.kinda-principal-nav ul a').on('click', function(event){
		$('ul.is-visible').removeClass('is-visible');
	});
	
});


/* console.log($('#poucoQueIntereca').top); */

$(window).scroll(function (){

	/**********************************
	   funções para header da kinda 
	**********************************/
	var poucoQueIntereca = $("#poucoQueIntereca .posicao").offset().top;
	var fiquePorDentro = $("#fiquePorDentro .posicao").offset().top;
	var temosQueMostrar = $(".temosQueMostrar .posicao").offset().top;
	var junteSeNos = $("#junteSeNos .posicao").offset().top;
    
	$("#kinda-header").removeClass();

	if($(this).scrollTop() >= poucoQueIntereca) {      
        $("#kinda-header").addClass("poucoQueIntereca");

        //$("#kinda-header").attr("style","background: url(img/bg-02.jpg) left top;");
       
        if($(this).scrollTop() >= fiquePorDentro) {      
	    	$("#kinda-header").addClass("fiquePorDentro");
	    	//$("#kinda-header").attr("style","background:url(img/bg-03.jpg) left top;")
	   
	        if($(this).scrollTop() >= temosQueMostrar) {      	        	
		       	$("#kinda-header").addClass("temosQueMostrar");
		       	//$("#kinda-header").attr("style","background:url(img/bg-04.jpg) left top;")
		
		        if($(this).scrollTop() >= junteSeNos) {      
		        	$("#kinda-header").addClass("junteSeNos");
			        //$("#kinda-header").attr("style","background:url(img/bg-05.jpg) left top;")
				}		
			}		
		}
 
    }

});

	/*************************************************************
	   funções para para carousel #owl-carousel-fiquePorDentro  
	*************************************************************/
	$('#owl-carousel-fiquePorDentro').owlCarousel({
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

	/*********************************************************************
	 	Ao clicar na input irar apagar o placeholder graduativamente
	 ********************************************************************/
	function Placeholdem(e){"use strict";!function(){for(var e=0,n=["ms","moz","webkit","o"],a=0;a<n.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[n[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[a]+"CancelAnimationFrame"]||window[n[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var a=(new Date).getTime(),i=Math.max(0,16-(a-e)),l=window.setTimeout(function(){n(a+i)},i);return e=a+i,l}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var n={};return n.init=function(){if(n.elems=[],e&&e.length)for(var a=0;a<e.length;a++)n.hasPlaceholder(e[a])&&n.elems.push(new n.PlaceholdemElem(e[a]));else e&&n.hasPlaceholder(e)&&n.elems.push(new n.PlaceholdemElem(e))},n.hasPlaceholder=function(e){return"function"==typeof e.hasAttribute&&e.hasAttribute("placeholder")},n.PlaceholdemElem=function(e){var n=this;n.init=function(){n.elem=e,n.placeholder=n.elem.getAttribute("placeholder"),n.elem.removeAttribute("placeholder"),n.rAF=null,n.animating=0,n.elem.value||(n.elem.value=n.placeholder),n.on(n.elem,"focus",n.onFocus),n.on(n.elem,"blur",n.onBlur),n.on(n.elem,"keydown",n.onKeydown)},n.on=function(e,n,a){e.addEventListener?e.addEventListener(n,a):e.attachEvent("on"+n,a)},n.onFocus=function(){(n.animating||n.elem.value===n.placeholder)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.deletePlaceholder())},n.onBlur=function(){(n.animating||""===n.elem.value)&&(n.animating=1,window.cancelAnimationFrame(n.rAF),n.restorePlaceholder())},n.onKeydown=function(){n.animating&&(n.animating=0,window.cancelAnimationFrame(n.rAF),n.elem.value="")},n.deletePlaceholder=function(){n.elem.value.length>0?(n.elem.value=n.elem.value.slice(0,-1),n.rAF=window.requestAnimationFrame(n.deletePlaceholder)):n.animating=0},n.restorePlaceholder=function(){n.elem.value.length<n.placeholder.length?(n.elem.value+=n.placeholder[n.elem.value.length],n.rAF=window.requestAnimationFrame(n.restorePlaceholder)):n.animating=0},n.init()},n.init(),n}

	Placeholdem( document.querySelectorAll( '[placeholder]' ) );

	var fadeElems = document.body.querySelectorAll( '.fade' ),
	    fadeElemsLength = fadeElems.length,
	    i = 0,
	    interval = 50;

	    function incFade() {
	        if( i < fadeElemsLength ) {
	            fadeElems[ i ].className += ' fade-load';
	            i++;
	            setTimeout( incFade, interval );
	        }
	    }

	setTimeout( incFade, interval );
	/* fim placeholder */


});

