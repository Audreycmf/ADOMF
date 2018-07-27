<?php

session_start();//on démarre la session
// $errors = [];
  $errors = array(); // on crée une vérif de champs
if(!array_key_exists('name', $_POST) || $_POST['name'] == '') {// on verifie l'existence du champ et d'un contenu
  $errors ['name'] = "Vous n'avez pas renseigné votre nom";
  }
if(!array_key_exists('surname', $_POST) || $_POST['surname'] == '') {// on verifie l'existence du champ et d'un contenu
  $errors ['surname'] = "Vous n'avez pas renseigné votre prénom";
  }
if(!array_key_exists('email', $_POST) || $_POST['email'] == '' || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) || !preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $_POST['email'])) {// on verifie existence de la clé
  $errors ['mail'] = "Veuillez renseigner un email valide";
  }
if(!array_key_exists('message', $_POST) || $_POST['message'] == '') {
  $errors ['message'] = "Vous n'avez pas écrit de message";
  }
if ($_POST['remarque'] != "") { // on place un petit filet anti robots spammers
  die();
  }
//On checke les infos transmises lors de la validation
  if(!empty($errors)){ // si erreur on renvoie vers la page précédente
  $_SESSION['errors'] = $errors;//on stocke les erreurs
  $_SESSION['inputs'] = $_POST;
  header('Location: contact.php');
  }else{
  $headers  = 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
  $headers .= 'FROM:' . htmlspecialchars($_POST['email']);
  $to = 'prevol@ch-aix.fr, amoret@ch-aix.fr, jgarconnet@ch-aix.fr';
  $subject = 'Message envoyé par ' . htmlspecialchars($_POST['name']) . ' ' . htmlspecialchars($_POST['surname']) . ' - <i>' . htmlspecialchars($_POST['email']) .'</i>';
  $message_content = '
  <table>
  <tr>
  <td><b>Emetteur du message:</b></td>
  </tr>
  <tr>
  <td>'. $subject . '</td>
  </tr>
  <tr>
  <td><b>Contenu du message:</b></td>
  </tr>
  <tr>
  <td>'. htmlspecialchars($_POST['message']) .'</td>
  </tr>
  </table>
  ';
mail($to, $subject, $message_content, $headers);
$_SESSION['success'] = 1;
  header('Location: contact.php');
  }
