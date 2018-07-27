<?php
session_start();
 ?>

<!DOCTYPE HTML>

<html>
	<head>
		<title>Contact</title>
		<?php include("head.php") ?>
    <meta name="description" content="Cette page de contact vous permet de nous contacter par téléphone au 04.42.33.50.97 ou sur place à l'adresse hôpital
		d'Aix-en-Provence, avenue des Tamaris 13616 Aix-en-Provence selon l'horaire ou par email.">
	</head>
	<body class="subpage">
		<div id="page-wrapper">

			<!-- Header -->
				<?php include("header.php") ?>

			<!-- Content -->
				<div id="content-wrapper">
					<div id="content">
						<div class="container">
							<div class="row">
								<div class="3u 12u(mobile)">

									<!-- Sidebar -->
                    <section class="non_imprime">
                      <header>
                        <h1>Formulaire de contact</h1>
                      </header>
											<div>
											  <?php if(array_key_exists('errors',$_SESSION)): ?>
											  <div class="alert alert-danger">
												  <?php implode('<br>', $_SESSION['errors']); ?>
											  </div>
											  <?php endif; ?>
											  <?php if(array_key_exists('success',$_SESSION)): ?>
											  <div class="alert alert-success">
												  Votre email a bien été transmis !
											  </div>
											  <?php endif; ?>
	                      <form action="cible_formulaire.php" method="post">
	                        <p>
														<label for="inputname">Votre nom</label><br />
														<input required type="text" name="name" class="form-control" id="inputname" value="<?php echo isset($_SESSION['inputs']['name'])? $_SESSION['inputs']['name'] : ''; ?>"><br / >
														<label for="inputsurname">Votre prénom</label><br />
														<input required type="text" name="surname" class="form-control" id="inputname" value="<?php echo isset($_SESSION['inputs']['surname'])? $_SESSION['inputs']['surname'] : ''; ?>"><br />
														<label for="inputemail">Votre adresse mail</label><br />
	                          <input required type="email" name="email" class="form-control" id="inputemail" value="<?php echo isset($_SESSION['inputs']['email'])? $_SESSION['inputs']['email'] : ''; ?>"><br>
														<textarea required name="message" class="form-control" id="inputmessage" rows="12" placeholder="Votre message"><?php echo isset($_SESSION['inputs']['message'])? $_SESSION['inputs']['message'] : ''; ?></textarea><br>
														<label class="remarque">Remarque</label>
													  <input class="remarque" name="remarque"
													            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"
													            placeholder="nom@domaine.com">
	                          <input type="submit" name="envoyer" value="Envoyer">
	                        </p>
	                      </form>
											</div>
                    </section>

								</div>
								<div class="9u 12u(mobile) important(mobile)">

									<!-- Main Content -->
										<section>
											<header>
												<h2>Venir nous voir</h2>
											</header>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.489210240785!2d5.440450651328253!3d43.53384326805571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98da5d08f265f%3A0xd474ebff96e7a93d!2sADOMF-+Association+des+disciplines+orthodontique+et+maxillo-faciale!5e0!3m2!1sfr!2sfr!4v1527787618816" width=100% height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
                          <h3>Horaire d'ouverture du secrétariat</h3>
                        <ul class="basic-list">
                          <li>Lundi : 8h30-12h30 et 14h-16h</li>
                          <li>Mardi : 8h30-12h30 et 14h-16h</li>
                          <li>Mercredi : 8h30-12h30 et 14h-16h</li>
                          <li>Jeudi : 8h30-12h30 et 14h-16h</li>
                          <li>Vendredi : 8h30-12h30 et 14h-16h</li>
                          <li>Samedi : fermé</li>
                          <li>Dimanche : fermé</li>
                        </ul>
                        <p>
                          En cas d'urgence, en dehors des heures d'ouverture, veuillez vous rendre aux urgences de l'hôpital du pays d'Aix ou faites le 15.
                        </p>
                      <div id="liens_telechargement">
                        <a href="javascript:window.print()" class="button-big">Imprimer</a>
                        <a href="pdf/contact.pdf" class="button-big" class="right">Télécharger</a>
                      </div>
										</section>

								</div>
							</div>
						</div>
					</div>
				</div>

			<!-- Footer -->
				<?php include("footer.php") ?>

		</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/skel-viewport.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>

<?php
unset($_SESSION['inputs']); // on nettoie les données précédentes
unset($_SESSION['success']);
unset($_SESSION['errors']);
