<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $naam = $_POST["naam"];
  $email = $_POST["email"];
  $onderwerp = $_POST["onderwerp"];
  $bericht = $_POST["bericht"];

  $ontvanger = "samsminiazakelijk@gmail.com";
  $onderwerp = "Contactformulier ingediend";
  $inhoud = "Naam: $naam\nE-mailadres: $email\nOnderwerp: $onderwerp\nBericht:\n$bericht";

  mail($ontvanger, $onderwerp, $inhoud);
}
?>
