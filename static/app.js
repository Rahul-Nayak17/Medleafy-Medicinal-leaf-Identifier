let image = document.getElementById("plant-image");
let medicinalValues = document.getElementById("medicinal-properties");
let plant_name=document.getElementById("plant-name");
var result= document.getElementById('result').dataset.value;

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
  medicinalValues.innerHTML = "<ul><li>Scientific name: entella asiatica</li><li>Boost brain function and alleviate anxiety and stress</li><li>Contains powerful compounds that may have antioxidant effects</li><li>May reduce inflammation</li><li>Help reduce ADHD(Attention deficit hyperactivity disorder )symptoms</li><li>Help lower blood pressure levels</li><li>Have anticancer properties</li><li>Brahmi helps promote liver function and supports natural detoxification</li><li>Taking Brahmi capsules or tablets along with the prescribed treatment may help reduce systemic swelling in the brain</li><li>It stimulates antioxidant activities in the kidneys, it can help improve renal function and eliminate bodily toxins effectively</li><li>Help improve sleep patterns and reduce insomnia by reducing hyperactivity and stress</li><li>Brahmi strengthens the roots, treats split ends, and prevents dandruff</li><li>Brahmi has antioxidants and anti-aging properties that promote cell regeneration and collagen production</li></ul>";
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
  image.src = "static/tulsi.png";
  medicinalValues.innerHTML = result;
}