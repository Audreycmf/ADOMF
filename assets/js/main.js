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

/*Pour que l'animation n'ait lieu qu'au format desktop
if (window.matchMedia("(min-width: 737px)").matches) {

		//Augmenter taille des images au clic
		var imageEltWalid1 = document.getElementById("walid1");

			imageEltWalid1.addEventListener("click", function() {
					imageEltWalid1.style.transform = "scale(3.97)translate(-162px, 160px)";
					//Nouveau clic : retour de l'image à sa place
					imageEltWalid1.addEventListener("click", function() {
						imageEltWalid1.style.transform = "scale(1)";
					});
			});

		var imageEltWalid2 = document.getElementById("walid2");

		imageEltWalid2.addEventListener("click", function() {
				imageEltWalid2.style.transform = "scale(3.97)translate(-162px, 80px)";
				//Nouveau clic : retour de l'image à sa place
				imageEltWalid2.addEventListener("click", function() {
					imageEltWalid2.style.transform = "scale(1)";
				});
		});

		var imageEltWalid3 = document.getElementById("walid3");

		imageEltWalid3.addEventListener("click", function() {
				imageEltWalid3.style.transform = "scale(3.97)translate(-162px, -10px)";
				//Nouveau clic : retour de l'image à sa place
				imageEltWalid3.addEventListener("click", function() {
					imageEltWalid3.style.transform = "scale(1)";
				});
		});

		var imageEltWalid4 = document.getElementById("walid4");

		imageEltWalid4.addEventListener("click", function() {
				imageEltWalid4.style.transform = "scale(3.97)translate(-162px, -100px)";
				//Nouveau clic : retour de l'image à sa place
				imageEltWalid4.addEventListener("click", function() {
					imageEltWalid3.style.transform = "scale(1)";
				});
		});

		var imageEltBrothier1 = document.getElementById("brothier1");

		imageEltBrothier1.addEventListener("click", function() {
				imageEltBrothier1.style.transform = "scale(3.97)translate(-162px, -270px)";
				//Nouveau clic : retour de l'image à sa place
				imageEltBrothier1.addEventListener("click", function() {
					imageEltBrothier1.style.transform = "scale(1)";
				});
		});

		var imageEltBrothier2 = document.getElementById("brothier2");

		imageEltBrothier2.addEventListener("click", function() {
				imageEltBrothier2.style.transform = "scale(3.97)translate(-162px, -315px)";
				//Nouveau clic : retour de l'image à sa place
				imageEltBrothier2.addEventListener("click", function() {
					imageEltBrothier2.style.transform = "scale(1)";
				});
		});

		var imageEltGap1 = document.getElementById("gap1");

		imageEltGap1.addEventListener("click", function() {
				imageEltGap1.style.transform = "scale(4.495)translate(-141.5px, -280px)";
				//Nouveau clic : retour de l'image à sa place
				imageEltGap1.addEventListener("click", function() {
					imageEltGap1.style.transform = "scale(1)";
				});
		});
};
*/

var liste_walid=document.getElementsByClassName("titre_walid"),li=liste_walid.length,i;
for(i=0;i<li;i++){
  liste_walid[i].addEventListener('click', function() {
	if (document.getElementById("walid").innerHTML === "") {
	document.getElementById("walid").innerHTML = "\<img src=\"images/walid1.png\" alt=\"\" width=100% \>\<img src=\"images/walid2.png\" alt=\"\" width=100% \>\<img src=\"images/walid3.png\" alt=\"\" width=100% \>\<img src=\"images/walid4.png\" alt=\"\" width=100% \>";
	} else {
		document.getElementById("walid").innerHTML = "";
	}
})
};

var liste_brothier=document.getElementsByClassName("titre_brothier"),li=liste_brothier.length,i;
for(i=0;i<li;i++){
  liste_brothier[i].addEventListener('click', function() {
	if (document.getElementById("brothier").innerHTML === "") {
	document.getElementById("brothier").innerHTML = "\<img src=\"images/brothier1.png\" alt=\"\" width=100% \>\<img src=\"images/brothier2.png\" alt=\"\" width=100% \>";
	} else {
		document.getElementById("brothier").innerHTML = "";
	}
})
};

var liste_gap=document.getElementsByClassName("titre_gap"),li=liste_gap.length,i;
for(i=0;i<li;i++){
  liste_gap[i].addEventListener('click', function() {
	if (document.getElementById("gap").innerHTML === "") {
	document.getElementById("gap").innerHTML = "\<img src=\"images/urgences_gap.png\" alt=\"\" width=100% \>";
	} else {
		document.getElementById("gap").innerHTML = "";
	}
})
};

/*
//Gestion vidéo Sidebar

document.getElementById("video").addEventListener("click", function() {
	width=200%;
});
*/

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
