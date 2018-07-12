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
  liste_humanitaire[i].addEventListener('click', function() {
	if (document.getElementById("humanitaire").innerHTML === "") {
		document.getElementById("humanitaire").innerHTML = "\<img src=\"images/logo_mdm.png\" alt=\"\" width=100% \>\<img src=\"images/fente_avant.jpg\" alt=\"\" width=100% \>\<img src=\"images/fente_apres.jpg\" alt=\"\" width=100% \>";
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

//Fiches secondaires interventions
	//orthognatique
var intitulesListesOrtho=document.getElementsByClassName("intitule_liste_ortho"),li=intitulesListesOrtho.length,i;
for(i=0;i<li;i++) {
	intitulesListesOrtho[i].addEventListener('click', function() {
		if (document.getElementById("liste_ortho").innerHTML === "") {
			document.getElementById("liste_ortho").innerHTML =
			'<li><a href="lefort.php">L\'ostéotomie de Le Fort I : ostéotomie de la mâchoire supérieure</a></li>\
			<li><a href="osbm.php">L\'ostéotomie sagittale de branche montante : ostéotomie de la mâchoire inférieure</a></li>\
			<li><a href="bimax.php">L\'ostéotomie bimaxillaire, qui est une combinaison des deux précédentes</a></li>\
			<li><a href="dim.php">La disjonction intermaxillaire</a></li>\
			<li><a href="contraction.php">La contraction mandibulaire</a></li>\
			<li><a href="genio.php">La génioplastie ou mentoplastie</a></li>';
			document.getElementById('fleche_ortho').style.transform = "rotate(90deg)";
			document.getElementById('intitule_liste_ortho').style.color = "#474f51";
			document.getElementById('intitule_liste-ortho').style.textDecoration = "none";
		} else {
			document.getElementById("liste_ortho").innerHTML = "";
			document.getElementById('fleche_ortho').style.transform = "rotate(0deg)";
			document.getElementById('intitule_liste_ortho').style.color = "#ed391b";
			document.getElementById('intitule_liste_ortho').style.textDecoration = "underline";
		}
	})
};

	//implantologie
var liste_implants=document.getElementsByClassName("implants"),li=liste_implants.length,i;
for(i=0;i<li;i++) {
	liste_implants[i].addEventListener('click', function () {
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
						scrollTop : $(implants).offset().top +5
				}, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(implants).offset().top +110
				}, "slow");
			}
	})
};

	//orbito-palpébral
var liste_ectropion=document.getElementsByClassName("ectropion"),li=liste_ectropion.length,i;
for(i=0;i<li;i++) {
	liste_ectropion[i].addEventListener('click', function () {
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
						scrollTop : $(ectropion).offset().top +100
				}, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(ectropion).offset().top +160
				}, "slow");
			}
	})
};

var intitulesListesOrbito=document.getElementsByClassName("intitule_liste_orbito"),li=intitulesListesOrbito.length,i;
for(i=0;i<li;i++) {
	intitulesListesOrbito[i].addEventListener('click', function() {
		if (document.getElementById("liste_orbito").innerHTML === "") {
			document.getElementById("liste_orbito").innerHTML =
			'<li><a href="ectropion_entropion.php">les ectropions et entropions</a></li>\
			<li><a href="ptosis.php">le ptosis</a></li>\
			<li><a href="basedow.php">la maladie de basedow</a> avec :\
				<ol class="level2_list">\
					<li><a href="decompression_orbitaire.php">la décompression orbitaire</a></li>\
					<li><a href="allongement_palpebral.php">l\'allongement palpébral</a></li>\
				</ol>\
			</li>';
			document.getElementById('fleche_orbito').style.transform = "rotate(90deg)";
			document.getElementById('intitule_liste_orbito').style.color = "#474f51";
			document.getElementById('intitule_liste_orbito').style.textDecoration = "none";
		} else {
			document.getElementById("liste_orbito").innerHTML = "";
			document.getElementById('fleche_orbito').style.transform = "rotate(0deg)";
			document.getElementById('intitule_liste_orbito').style.color = "#ed391b";
			document.getElementById('intitule_liste_orbito').style.textDecoration = "underline";
		}
	})
};

//stomatologie
var liste_dds=document.getElementsByClassName("dds"),li=liste_dds.length,i;
for(i=0;i<li;i++) {
	liste_dds[i].addEventListener('click', function () {
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
						scrollTop : $(dds).offset().top +60
				}, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(dds).offset().top +155
				}, "slow");
			}
	})
};

var intitulesListesSto=document.getElementsByClassName("intitule_liste_sto"),li=intitulesListesSto.length,i;
for(i=0;i<li;i++) {
	intitulesListesSto[i].addEventListener('click', function() {
		if (document.getElementById("liste_sto").innerHTML === "") {
			document.getElementById("liste_sto").innerHTML =
			'<li><a href="dds.php">L\'avulsion des dents de sagesse</a></li>\
			 <li><a href="rebd.php">Les extractions dentaires difficiles</a></li>\
			 <li><a href="ra.php">La résection apicale (kyste apico-dentaire)</a></li>';
			document.getElementById('fleche_sto').style.transform = "rotate(90deg)";
			document.getElementById('intitule_liste_sto').style.color = "#474f51";
			document.getElementById('intitule_liste_sto').style.textDecoration = "none";
		} else {
			document.getElementById("liste_sto").innerHTML = "";
			document.getElementById('fleche_sto').style.transform = "rotate(0deg)";
			document.getElementById('intitule_liste_sto').style.color = "#ed391b";
			document.getElementById('intitule_liste_sto').style.textDecoration = "underline";
		}
	})
};

	//esthétique
var liste_rides=document.getElementsByClassName("rides"),li=liste_rides.length,i;
for(i=0;i<li;i++) {
	liste_rides[i].addEventListener('click', function () {
		if(window.matchMedia("(min-width: 737px)").matches) {
			$("html, body").animate({
						scrollTop : $(rides).offset().top +230
				}, "slow");
		} else {
			$("html, body").animate({
						scrollTop : $(rides).offset().top +380
				}, "slow");
			}
	})
};

var intitulesListesEsthetique=document.getElementsByClassName("intitule_liste_esthetique"),li=intitulesListesEsthetique.length,i;
for(i=0;i<li;i++) {
	intitulesListesEsthetique[i].addEventListener('click', function() {
		if (document.getElementById("liste_esthetique").innerHTML === "") {
			document.getElementById("liste_esthetique").innerHTML =
			'<li><a href="esthetique.php">le traitement des rides et ridules du visage</a> avec :\
				<ol class="level2_list">\
					<li><a href="acide_hyaluronique.php">les injections d\'acide hyaluronique</a></li>\
					<li><a href="toxine_botulique.php">les injections de toxine botulique</a></li>\
				</ol>\
			</li>\
			<li><a href="blepharoplastie.php">la chirurgie esthétique des paupières ou blépharoplastie</a></li>\
			<li><a href="otoplastie.php">la chirurgie des oreilles décollées ou  otoplastie</a></li>\
			<li><a href="lifting.php">le lifting du visage et du cou</a></li>\
			<li>la rhinoplastie</li>';
			document.getElementById('fleche_esthetique').style.transform = "rotate(90deg)";
			document.getElementById('intitule_liste_esthetique').style.color = "#474f51";
			document.getElementById('intitule_liste_esthetique').style.textDecoration = "none";
		} else {
			document.getElementById("liste_esthetique").innerHTML = "";
			document.getElementById('fleche_esthetique').style.transform = "rotate(0deg)";
			document.getElementById('intitule_liste_esthetique').style.color = "#ed391b";
			document.getElementById('intitule_liste_esthetique').style.textDecoration = "underline";
		}
	})
};

	//glandes salivaires
var liste_parotidectomie=document.getElementsByClassName("parotidectomie"),li=liste_parotidectomie.length,i;
for(i=0;i<li;i++) {
liste_parotidectomie[i].addEventListener('click', function () {
	if(window.matchMedia("(min-width: 737px)").matches) {
		$("html, body").animate({
					scrollTop : $(parotidectomie).offset().top +25
			}, "slow");
	} else {
		$("html, body").animate({
					scrollTop : $(parotidectomie).offset().top +110
			}, "slow");
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
