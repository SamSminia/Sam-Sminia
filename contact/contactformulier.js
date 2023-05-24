function validateForm() {
  const naam = document.getElementById("naam").value;
  const email = document.getElementById("email").value;
  const onderwerp = document.getElementById("onderwerp").value;
  const bericht = document.getElementById("bericht").value;

  if (naam === "" || email === "" || onderwerp === "" || bericht === "") {
    alert("Vul alle velden in.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Voer een geldig e-mailadres in.");
    return false;
  }

  return true;
}
