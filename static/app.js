let image = document.getElementById("plant-image");
let medicinalValues = document.getElementById("medicinal-properties");
let plant_name=document.getElementById("plant-name");
let result = "{{ result }}";

if (result === "Amruthballi") {
  image.src = "static/amruthballi.png";
  plant_name.innerHTML="Amruthballi";
  medicinalValues.innerHTML = "Medicinal properties of Amruthballi:";
} else if (result === "Betel") {
  image.src = "static/betel.png";
  plant_name.innerHTML="Betel";
  medicinalValues.innerHTML = "Medicinal properties of Betel";
} else if (result === "Brahmi") {
  image.src = "static/brahmi.png";
  plant_name.innerHTML="Brahmi";
  medicinalValues.innerHTML = "Medicinal properties of Brahmi";
}
else if (result === "Doddapatra") {
    image.src = "static/doddapatra.png";
    plant_name.innerHTML="Doddapatra";
    medicinalValues.innerHTML = "Medicinal properties of Doddapatra";
  }
  else if (result === "Hipli") {
    image.src = "static/hipli.png";
    plant_name.innerHTML="Hipli";
    medicinalValues.innerHTML = "Medicinal properties of Hipli";
  }
  else if (result === "Mint") {
    image.src = "static/mint.jpeg";
    plant_name.innerHTML="Mint";
    medicinalValues.innerHTML = "Medicinal properties of Mint";
  }
  else if (result === "Neem") {
    image.src = "static/neem.png";
    plant_name.innerHTML="Neem";
    medicinalValues.innerHTML = "Medicinal properties of Nemm";
  }
  else if (result  === "Parijata") {
    image.src = "static/parijatha.jpeg";
    plant_name.innerHTML="Parijata";
    medicinalValues.innerHTML = "Medicinal properties of Parijata";
  }
  else if (result === "Peepal") {
    image.src = "static/peepal.png";
    plant_name.innerHTML="Peepal";
    medicinalValues.innerHTML = "Medicinal properties of Peepal";
  }
  else if (result === "Tulsi") {
    image.src = "static/tulsi.png";
    plant_name.innerHTML="<strong>Tulsi</strong>";
    medicinalValues.innerHTML = "Medicinal properties of Tulsi";
  }
// continue the same pattern for all 10 classes
else {
  // handle the case where there's no match
  image.src = "path/to/default-image.jpg";
  medicinalValues.innerHTML = "No medicinal properties found.";
}