$(document).ready(function(){

	"use strict";

	$("#menu").slicknav();
	$("#menu").slicknav();

	$(window).load(function(){
		$("#owl-example").owlCarousel({
			items : 3,
			autoPlay : true,
			navigation : false,
			pagination : true,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
			baseClass : "owl-carousel",
			theme : "owl-theme",
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade"
		});
		$("#owl-example2").owlCarousel({
			items : 6,
			autoPlay : true,
			navigation : false,
			pagination : false,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate : 200,
			responsiveBaseWidth: window,
			baseClass : "owl-carousel",
			theme : "owl-theme",
			lazyLoad : false,
			lazyFollow : true,
			lazyEffect : "fade"
		});
		$(".masonry").isotope({
			itemSelector: ".selector"
		}), $(function() {
			var t = $(".masonry").isotope({
				itemSelector: ".item"
			}),
			i = {
				numberGreaterThan50: function() {
					var t = $(this).find(".number").text();
					return parseInt(t, 10) > 50
				},
				ium: function() {
					var t = $(this).find(".name").text();
					return t.match(/ium$/)
				}
			};
			$("#filters").on("click", "li", function() {
				var n = $(this).attr("data-filter");
				n = i[n] || n, t.isotope({
					filter: n
				})
			}), $(".filters").each(function(t, i) {
				var n = $(i);
				n.on("click", "li", function() {
					n.find(".active").removeClass("active"), $(this).addClass("active")
				})
			})
		})
	})
});
