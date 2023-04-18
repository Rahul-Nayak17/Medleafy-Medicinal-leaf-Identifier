// let image = document.getElementById("plant-image");
// let medicinalValues = document.getElementById("medicinal-properties");
// let plant_name=document.getElementById("plant-name");
// var result= document.getElementById('result').dataset.value;

// if (result === "Amruthballi") {
//   image.src = "static/amruthballi.png";
//   plant_name.innerHTML="Amruthballi";
//   medicinalValues.innerHTML = "Medicinal properties of Amruthballi:";
// } else if (result === "Betel") {
//   image.src = "static/betel.png";
//   plant_name.innerHTML="Betel";
//   medicinalValues.innerHTML = "Medicinal properties of Betel";
// } else if (result === "Brahmi") {
//   image.src = "static/brahmi.png";
//   plant_name.innerHTML="Brahmi";
//   medicinalValues.innerHTML = "<ul><li>Scientific name: entella asiatica</li><li>Boost brain function and alleviate anxiety and stress</li><li>Contains powerful compounds that may have antioxidant effects</li><li>May reduce inflammation</li><li>Help reduce ADHD(Attention deficit hyperactivity disorder )symptoms</li><li>Help lower blood pressure levels</li><li>Have anticancer properties</li><li>Brahmi helps promote liver function and supports natural detoxification</li><li>Taking Brahmi capsules or tablets along with the prescribed treatment may help reduce systemic swelling in the brain</li><li>It stimulates antioxidant activities in the kidneys, it can help improve renal function and eliminate bodily toxins effectively</li><li>Help improve sleep patterns and reduce insomnia by reducing hyperactivity and stress</li><li>Brahmi strengthens the roots, treats split ends, and prevents dandruff</li><li>Brahmi has antioxidants and anti-aging properties that promote cell regeneration and collagen production</li></ul>";
// }

// else if (result === "Doddapatra") {
//     image.src = "static/doddapatra.png";
//     plant_name.innerHTML="Doddapatra";
//     medicinalValues.innerHTML = "Medicinal properties of Doddapatra";
//   }
//   else if (result === "Hipli") {
//     image.src = "static/hipli.png";
//     plant_name.innerHTML="Hipli";
//     medicinalValues.innerHTML = "Medicinal properties of Hipli";
//   }
//   else if (result === "Mint") {
//     image.src = "static/mint.jpeg";
//     plant_name.innerHTML="Mint";
//     medicinalValues.innerHTML = "Medicinal properties of Mint";
//   }
//   else if (result === "Neem") {
//     image.src = "static/neem.png";
//     plant_name.innerHTML="Neem";
//     medicinalValues.innerHTML = "Medicinal properties of Nemm";
//   }
//   else if (result  === "Parijata") {
//     image.src = "static/parijatha.jpeg";
//     plant_name.innerHTML="Parijata";
//     medicinalValues.innerHTML = "Medicinal properties of Parijata";
//   }
//   else if (result === "Peepal") {
//     image.src = "static/peepal.png";
//     plant_name.innerHTML="Peepal";
//     medicinalValues.innerHTML = "Medicinal properties of Peepal";
//   }
//   else if (result === "Tulsi") {
//     image.src = "static/tulsi.png";
//     plant_name.innerHTML="<strong>Tulsi</strong>";
//     medicinalValues.innerHTML = "Medicinal properties of Tulsi";
//   }
// // continue the same pattern for all 10 classes
// else {
//   // handle the case where there's no match
//   image.src = "static/tulsi.png";
//   medicinalValues.innerHTML = result;
// }

let image = document.getElementById("plant-image");
let medicinalValues = document.getElementById("medicinal-properties");
let plant_name=document.getElementById("plant-name");
var result= document.getElementById('result').dataset.value;

if (result === "Amruthballi") {
  image.src = "static/amruthballi.png";
  plant_name.innerHTML="Amruthballi";
  medicinalValues.innerHTML = "<ul><li><strong>Scientific name</strong>: Tinospora cordifolia</li><li>It is an anti-inflammatory, antipyretic herb which helps to boost your immunity to fight against the infection and also helps in early recovery. </li><li>It acts wonderfully in chronic, recurrent fevers</li><li>It improves platelet count in dengue fever and reduces the chances of complication </li><li>It helps to enhance the production of insulin which ultimately controls the blood sugar levels</li><li>Giloy is also useful for diabetes complications like ulcers, kidney problems.</li><li>Giloy improves digestion and reduces digestion-related problems like diarrhoea, colitis, vomiting</li><li>also has the power to enhance memory and cognitive functions.</li><li>Giloy contains anti-inflammatory and anti-arthritic properties which help to reduce arthritis and gout.</li><li>Breathing problems caused by asthma can be traced to inflammation of the trachea</li><li>Giloy can also improve blood circulation which bestows a natural glow to the skin.</li></ul>";
} else if (result === "Betel") {
  image.src = "static/betel.png";
  plant_name.innerHTML="Betel";
  medicinalValues.innerHTML = "<ul><li><strong>Scientific name</strong>: Piper betle</li><li>Anti-diabetic Agent</li><li>Lowers High Cholesterol Levels</li> <li>Anti-cancer Agent</li><li>an antiseptic</li><li>a breath-freshener</li><li>an antioxidant</li><li>protect against allergic reactions</li> <li>heal wounds </li><li>may be used in case of constipation</li><li>to relieve pain from severe headache</li><li>increase enzymatic activity which may be advantageous for gastric ulcers. </li></ul>";
} else if (result === "Brahmi") {
  image.src = "static/brahmi.png";
  plant_name.innerHTML="Brahmi";
  medicinalValues.innerHTML = "<ul><li><strong>Scientific name</strong>: entella asiatica</li><li>Boost brain function and alleviate anxiety and stress</li><li>Contains powerful compounds that may have antioxidant effects</li><li>May reduce inflammation</li><li>Help reduce ADHD(Attention deficit hyperactivity disorder )symptoms</li><li>Help lower blood pressure levels</li><li>Have anticancer properties</li><li>Brahmi helps promote liver function and supports natural detoxification</li><li>Taking Brahmi capsules or tablets along with the prescribed treatment may help reduce systemic swelling in the brain</li><li>It stimulates antioxidant activities in the kidneys, it can help improve renal function and eliminate bodily toxins effectively</li><li>Help improve sleep patterns and reduce insomnia by reducing hyperactivity and stress</li><li>Brahmi strengthens the roots, treats split ends, and prevents dandruff</li><li>Brahmi has antioxidants and anti-aging properties that promote cell regeneration and collagen production</li></ul>";
}

else if (result === "Doddapatra") {
    image.src = "static/doddapatra.png";
    plant_name.innerHTML="Doddapatra";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific name</strong>: Coleus Amboinicus</li><li>detoxify the body by stimulating urination</li> <li>defend against colds</li> <li>ease the pain of arthritis</li><li>positive effect on treating breast cancer</li><li>boost digestion</li><li>It is used to stimulate lactation for the month or so following childbirth. </li> <li>Used in cooking and flavoring dishes. </li><li>wound healing properties </li></ul>";
  }
  else if (result === "Hipli") {
    image.src = "static/hipli.png";
    plant_name.innerHTML="Hipli";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific name</strong>: Piper longum</li><li>Treats Respiratory Problems</li> <li>treat chronic fevers due to its anti-pyretic properties.</li><li>Helps Manage Diabetes</li><li>regulate the rate at which glucose is released in the blood. </li><li>Fights against bacterial infections</li><li>digestive problems like flatulence and heartburn or are experiencing a dulled appetite, pippali can help</li> <li>Long Pepper along with honey is used as a remedy for sleeping problems like insomnia</li><li>It basically decreases the fat in the body and also gets rid of fatty toxins, which helps you lose the additional weight. </li><li>Improves Effectiveness of Tuberculosis Treatment</li><li>Helps in toothache</li><li> Helps Boost Metabolism</li></ul>";
  }
  else if (result === "Mint") {
    image.src = "static/mint.jpeg";
    plant_name.innerHTML="Mint";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific name</strong>: Mentha</li><li> source of vitamin A and antioxidants. </li><li> Improve Irritable Bowel Syndrome</li><li> Help Relieve Indigestion<li> Improve Brain Function</li><li> Improves Cold Symptoms</li><li> mouth freshner</li><li> improves haemoglobin levels</li> <li> known as an amazing appetizer</li> <li> highly recommended for asthma patients</li><li> improve your immunity. </li><li> play an essential role in losing weight in a healthy way</li><li> to treat skin related problems like acne, scar</li> <li> lowers the inflammation and redness associated with acne outbursts</li> <li> promotes hair growth and prevents hair fall. </li></ul>";
  }
  else if (result === "Neem") {
    image.src = "static/neem.png";
    plant_name.innerHTML="Neem";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific Name</strong>:Azadirachta indica</li><li>it kills cancerous cells</li><li>neem seed juice is effective in destroying intestinal worms and other</li><li>unwanted parasitic organisms that may be present in the intestinal tract.</li><li>it will act as a good antibacterial cleanser for skin,</li><li>Drinking neem juice can help reorganize and reboot one’s digestive process. </li> <li>enhances appetite</li><li>helps manage diabetic conditions</li><li> healing of wounds</li><li>relieves nausea</li><li>used as a mosquito repellant</li><li> use as a skin ointment. </li><li>Fights dental plaque and reduce the amount of bacteria present in the mouth</li> <li>remove dandruff and is also used as a preventive measure against dandruff</li> <li>Neem has an anti-inflammatory property which helps reduces acne. </li><li>Neem has scientifically proven antifungal property which helps treat fungal infections. </li><li>Neem is known for its antimicrobial and antibacterial effects. These properties play a huge role in boosting immunity. </li> <li>Application of neem oil or extract on the affected area can help reduce pain and discomfort. </li></ul>";
  }
  else if (result  === "Parijata") {
    image.src = "static/parijatha.jpeg";
    plant_name.innerHTML="Parijata";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific Name</strong>: Nyctanthes arbor tristis</li> <li>It cures various nauseous types of fever including malaria, dengue, and chikungunya fevers</li><li>Parijat leaves are beneficial in the treatment of arthritic knee pain. </li><li>A tea made from Parijat leaves and flowers reduces cough, cold, and bronchitis. </li><li> It helps to inhibit germs like E. coli. , staph infection, and some fungal infection. </li><li>Parijat flowers and leaves act as immunostimulatory to boost immunity due to the presence of ethanol in it. </li> <li>Parijat flowers and leaves act as an immunostimulatory to boost immunity due to the presence of ethanol in it. </li><li>clears and controls dandruff and hair lice</li><li>works as a hair tonic and are used to strengthen the hairs and prevent hair fall</li><li> Parijat leaves alleviate malaria fever and helps reduce the parasite concentration in the body</li><li>Helps to relieve menstrual cramps</li><li>Cures digestive problems such as hyperacidity, nausea, etc. </li></ul>";
  }
  else if (result === "Peepal") {
    image.src = "static/peepal.png";
    plant_name.innerHTML="Peepal";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific Name</strong>:Ficus Religiosa</li> <li>act as an antioxidant</li> <li>reduces or prevents the severity of fits</li> <li>kills microbes</li><li>help in wound healing</li> <li> act as an anti-ulcer agent</li><li> help as a kidney-protective agent</li><li>Severe intolerable stomach pain may be relieved </li> <li>effective in fever due to its potential cooling nature</li><li> peepal leaves may help with ear-related problems. </li></ul>";
  }
  else if (result === "Tulsi") {
    image.src = "static/tulsi.png";
    plant_name.innerHTML="<strong>Tulsi</strong>";
    medicinalValues.innerHTML = "<ul><li><strong>Scientific Name</strong>: Ocimum tenuiflorum</li><li>cure infections such as throat infections</li><li>The oil from Krishna Tulsi is used as ear drops. </li><li>used to cure malaria</li><li>to treat acne, skin infections, lighten dark spots and improve skin texture. </li><li>Tulsi mixed with eggs and mixed can help in tightening skin pores. </li><li>Tulsi can help prevent dry scalp. </li><li>Tulsi tea controls your metabolism and helps your body absorb essential nutrients</li><li>Tulsi leaves left in boiled water overnight can be used to wash your eyes</li><li>The best aid to stop smoking is by munching tulsi leaves and this help get the nicotine content off your body. </li> <li>It helps in the purification of blood</li><li>can help cure fever. </li><li>is used to treat insect bites. </li><li>is also used to treat  heart disease  and fever. </li> <li>helps in treating  Asthma. </li><li>Tulsi is used as a remedy for a range of gastrointestinal diseases as well as to improve appetite</li></ul>";
  }
// continue the same pattern for all 10 classes
else {
  // handle the case where there's no match
  image.src = "static/error.png";
  medicinalValues.innerHTML = "<h2>Input image does not belong to any of the 10 trained classes</h2";
}
