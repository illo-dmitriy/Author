var header = new Headhesive('.header');

var planHover = (function() {

	var basic = document.querySelector(".basic");
	var pro = document.querySelector(".pro");
	var premium = document.querySelector(".premium");
	var buyBasic = document.querySelector(".buy_basic");
	var buyPro = document.querySelector(".buy_pro");
	var buyPremium = document.querySelector(".buy_premium");

	buyBasic.addEventListener("mouseover",
		function () {
			buyBasic.style.backgroundColor = "#49cbcd";
			basic.style.backgroundColor = "#49cbcd";
		});
	buyBasic.addEventListener("mouseout",
		function () {
			buyBasic.style.backgroundColor = "#485460";
			basic.style.backgroundColor = "#485460";
		});

	buyPro.addEventListener("mouseover",
		function () {
			buyPro.style.backgroundColor = "#49cbcd";
			pro.style.backgroundColor = "#49cbcd";
		});
	buyPro.addEventListener("mouseout",
		function () {
			buyPro.style.backgroundColor = "#485460";
			pro.style.backgroundColor = "#485460";
		});

	buyPremium.addEventListener("mouseover",
		function () {
			buyPremium.style.backgroundColor = "#49cbcd";
			premium.style.backgroundColor = "#49cbcd";
		});
	buyPremium.addEventListener("mouseout",
		function () {
			buyPremium.style.backgroundColor = "#485460";
			premium.style.backgroundColor = "#485460";
		});

})();

$(document).ready(function(){

	$("#owl-demo").owlCarousel({

		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		pagination:	false,

		// "singleItem:true" is a shortcut for:
		// items : 1, 
		// itemsDesktop : false,
		// itemsDesktopSmall : false,
		// itemsTablet: false,
		// itemsMobile : false
	});

	var owl = $(".owl-carousel");

	$(".prev").click(function(){
		owl.trigger("owl.prev");
	});
	$(".next").click(function(){
		owl.trigger("owl.next");
	});

});