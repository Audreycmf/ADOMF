(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var $window = $(window),
			$body = $('body');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

//Pour page actualités
var liste_walid=document.getElementsByClassName("titre_walid"),li=liste_walid.length,i;
for(i=0;i<li;i++){
  liste_walid[i].addEventListener('click', function() {
	if (document.getElementById("walid").innerHTML === "") {
		document.getElementById("walid").innerHTML = "\<img src=\"images/walid1.png\" alt=\"\" width=100% \>\<img src=\"images/walid2.png\" alt=\"\" width=100% \>\<img src=\"images/walid3.png\" alt=\"\" width=100% \>\<img src=\"images/walid4.png\" alt=\"\" width=100% \>";
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
						scrollTop : $(titre_walid).offset().top -180
				}, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(titre_walid).offset().top -55
				}, "slow");
		}
		document.getElementById('fleche4').style.transform = "rotate(90deg)";
	} else {
		document.getElementById("walid").innerHTML = "";
		document.getElementById('fleche4').style.transform = "rotate(0deg)";
	}
})
};1

var liste_brothier=document.getElementsByClassName("titre_brothier"),li=liste_brothier.length,i;
for(i=0;i<li;i++){
  liste_brothier[i].addEventListener('click', function() {
	if (document.getElementById("brothier").innerHTML === "") {
		document.getElementById("brothier").innerHTML = "\<img src=\"images/brothier1.png\" alt=\"\" width=100% \>\<img src=\"images/brothier2.png\" alt=\"\" width=100% \>";
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
						scrollTop : $(titre_brothier).offset().top -180
				}, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(titre_brothier).offset().top -55
				}, "slow");
		}
		document.getElementById('fleche3').style.transform = "rotate(90deg)";
	} else {
		document.getElementById("brothier").innerHTML = "";
		document.getElementById('fleche3').style.transform = "rotate(0deg)";
	}
})
};

var liste_gap=document.getElementsByClassName("titre_gap"),li=liste_gap.length,i;
for(i=0;i<li;i++){
  liste_gap[i].addEventListener('click', function() {
	if (document.getElementById("gap").innerHTML === "") {
		document.getElementById("gap").innerHTML = "\<img src=\"images/urgences_gap.png\" alt=\"\" width=100% \>";
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
		        scrollTop : $(titre_gap).offset().top -180
		    }, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(titre_gap).offset().top -55
				}, "slow");
			}
		document.getElementById('fleche2').style.transform = "rotate(90deg)";
	} else {
		document.getElementById("gap").innerHTML = "";
		document.getElementById('fleche2').style.transform = "rotate(0deg)";
	}
})
};

var liste_humanitaire=document.getElementsByClassName("titre_humanitaire"),li=liste_humanitaire.length,i;
for(i=0;i<li;i++){
  liste_gap[i].addEventListener('click', function() {
	if (document.getElementById("humanitaire").innerHTML === "") {
		document.getElementById("humanitaire").innerHTML = "\<img src=\"images/urgences_gap.png\" alt=\"\" width=100% \>";
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
		        scrollTop : $(titre_humanitaire).offset().top -180
		    }, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(titre_humanitaire).offset().top -55
				}, "slow");
			}
		document.getElementById('fleche1').style.transform = "rotate(90deg)";
	} else {
		document.getElementById("humanitaire").innerHTML = "";
		document.getElementById('fleche1').style.transform = "rotate(0deg)";
	}
})
};


		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);
