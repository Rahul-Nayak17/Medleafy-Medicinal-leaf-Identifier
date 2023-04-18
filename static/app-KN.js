let image = document.getElementById("plant-image");
let medicinalValues = document.getElementById("medicinal-properties");
let plant_name=document.getElementById("plant-name");
var result= document.getElementById('result').dataset.value;

if (result === "Amruthballi") {
  image.src = "static/amruthballi.png";
  plant_name.innerHTML="<strong>ಅಮೃತ ಬಳ್ಳಿ ಎಲೆ</strong>";
  medicinalValues.innerHTML = "<ul><li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ಟಿನೋಸ್ಪೊರಾ ಕಾರ್ಡಿಫೋಲಿಯಾ</li><li>ದೀರ್ಘಕಾಲದ, ಮರುಕಳಿಸುವ ಜ್ವರಗಳಲ್ಲಿ ಅದ್ಭುತವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.</li><li>ಇದು ಉರಿಯೂತದ, ಆಂಟಿಪೈರೆಟಿಕ್ ಮೂಲಿಕೆಯಾಗಿದ್ದು, ಸೋಂಕಿನ ವಿರುದ್ಧ ಹೋರಾಡಲು ನಿಮ್ಮ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ಆರಂಭಿಕ ಚೇತರಿಕೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಇದು ಡೆಂಗ್ಯೂ ಜ್ವರದಲ್ಲಿ ಪ್ಲೇಟ್ಲೆಟ್ ಸಂಖ್ಯೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ತೊಡಕುಗಳ ಸಾಧ್ಯತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li>  <li>ಇದು ಇನ್ಸುಲಿನ್ ಉತ್ಪಾದನೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಇದು ಅಂತಿಮವಾಗಿ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ.</li>  <li>ಅಲ್ಸರ್, ಕಿಡ್ನಿ ಸಮಸ್ಯೆಗಳಂತಹ ಮಧುಮೇಹದ ತೊಂದರೆಗಳಿಗೂ ಗಿಲೋಯ್ ಉಪಯುಕ್ತವಾಗಿದೆ.</li>  <li>ಗಿಲೋಯ್ ಜೀರ್ಣಕ್ರಿಯೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ ಮತ್ತು ಅತಿಸಾರ, ಕೊಲೈಟಿಸ್, ವಾಂತಿ ಮುಂತಾದ ಜೀರ್ಣಕ್ರಿಯೆಗೆ ಸಂಬಂಧಿಸಿದ ಸಮಸ್ಯೆಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li>  <li>ನೆನಪಿನ ಶಕ್ತಿ ಮತ್ತು ಅರಿವಿನ ಕಾರ್ಯಗಳನ್ನು ವರ್ಧಿಸುವ ಶಕ್ತಿಯನ್ನೂ ಹೊಂದಿದೆ.</li>  <li>ಗಿಲೋಯ್ ಉರಿಯೂತದ ಮತ್ತು ಸಂಧಿವಾತ ವಿರೋಧಿ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿದ್ದು ಅದು ಸಂಧಿವಾತ ಮತ್ತು ಗೌಟ್ ಅನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li>  <li>ಆಸ್ತಮಾದಿಂದ ಉಂಟಾಗುವ ಉಸಿರಾಟದ ತೊಂದರೆಗಳನ್ನು ಶ್ವಾಸನಾಳದ ಉರಿಯೂತದಿಂದ ಕಂಡುಹಿಡಿಯಬಹುದು</li>  </ul>";
} else if (result === "Betel") {
  image.src = "static/betel.png";
  plant_name.innerHTML="<strong>ವೀಳ್ಯದೆಲೆ</strong>";
  medicinalValues.innerHTML = "<ul>  <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>-ಪೈಪರ್ ಬೆಟಲ್.</li>  <li>ಮಧುಮೇಹ ವಿರೋಧಿ ಏಜೆಂಟ್.</li>  <li>ಅಧಿಕ ಕೊಲೆಸ್ಟ್ರಾಲ್ ಮಟ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li>  <li>ಕ್ಯಾನ್ಸರ್ ವಿರೋಧಿ ಏಜೆಂಟ್.</li>  <li>ಒಂದು ನಂಜುನಿರೋಧಕ.</li>  <li>ಒಂದು ಉಸಿರು-ಫ್ರೆಶ್ನರ್.</li>  <li>ಒಂದು ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ.</li>  <li>ಅಲರ್ಜಿಯ ಪ್ರತಿಕ್ರಿಯೆಗಳಿಂದ ರಕ್ಷಿಸಿ.</li>  <li>ಗಾಯಗಳನ್ನು ಸರಿಪಡಿಸಿ.</li>  <li>ಮಲಬದ್ಧತೆಯ ಸಂದರ್ಭದಲ್ಲಿ ಬಳಸಬಹುದು..</li>  <li>ತೀವ್ರ ತಲೆನೋವಿನಿಂದ ನೋವು ನಿವಾರಿಸಲು.</li>  <li>ಗ್ಯಾಸ್ಟ್ರಿಕ್ ಹುಣ್ಣುಗಳಿಗೆ ಅನುಕೂಲಕರವಾದ ಕಿಣ್ವಕ ಚಟುವಟಿಕೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ. </li>  </ul>";
} else if (result === "Brahmi") {
  image.src = "static/brahmi.png";
  plant_name.innerHTML="<strong>ಬ್ರಾಹ್ಮಿ ಎಲೆ</strong>";
  medicinalValues.innerHTML = "<ul><li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ಎಂಟೆಲ್ಲಾ ಏಷ್ಯಾಟಿಕಾ.</li><li>ಮೆದುಳಿನ ಕಾರ್ಯವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಆತಂಕ ಮತ್ತು ಒತ್ತಡವನ್ನು ನಿವಾರಿಸುತ್ತದೆ.</li>   <li>ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ ಪರಿಣಾಮಗಳನ್ನು ಹೊಂದಿರುವ ಪ್ರಬಲ ಸಂಯುಕ್ತಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.</li>  <li>ಉರಿಯೂತವನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು.</li>  ಎಡಿಎಚ್‌ಡಿ (ಗಮನ ಕೊರತೆ ಹೈಪರ್ಆಕ್ಟಿವಿಟಿ ಡಿಸಾರ್ಡರ್) ಲಕ್ಷಣಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li>  <li>ರಕ್ತದೊತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li>  <li>ಕ್ಯಾನ್ಸರ್ ವಿರೋಧಿ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿವೆ.</li>  <li>ಬ್ರಾಹ್ಮಿ ಯಕೃತ್ತಿನ ಕಾರ್ಯವನ್ನು ಉತ್ತೇಜಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ನಿರ್ವಿಶೀಕರಣವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.</li>  <li>ಸೂಚಿಸಲಾದ ಚಿಕಿತ್ಸೆಯೊಂದಿಗೆ ಬ್ರಾಹ್ಮಿ ಕ್ಯಾಪ್ಸುಲ್ಗಳು ಅಥವಾ ಮಾತ್ರೆಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವುದರಿಂದ ಮೆದುಳಿನಲ್ಲಿ ವ್ಯವಸ್ಥಿತ ಊತವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li>  <li>ಇದು ಮೂತ್ರಪಿಂಡದಲ್ಲಿ ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ ಚಟುವಟಿಕೆಗಳನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ, ಇದು ಮೂತ್ರಪಿಂಡದ ಕಾರ್ಯವನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ದೈಹಿಕ ವಿಷವನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ತೆಗೆದುಹಾಕಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li>  <li>ಹೈಪರ್ಆಕ್ಟಿವಿಟಿ ಮತ್ತು ಒತ್ತಡವನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಮೂಲಕ ನಿದ್ರೆಯ ಮಾದರಿಗಳನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ನಿದ್ರಾಹೀನತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li>  <li>ಬ್ರಾಹ್ಮಿ ಬೇರುಗಳನ್ನು ಬಲಪಡಿಸುತ್ತದೆ, ಒಡೆದ ತುದಿಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತದೆ ಮತ್ತು ತಲೆಹೊಟ್ಟು ತಡೆಯುತ್ತದೆ.</li>  <li>ಬ್ರಾಹ್ಮಿಯು ಉತ್ಕರ್ಷಣ ನಿರೋಧಕಗಳು ಮತ್ತು ವಯಸ್ಸಾದ ವಿರೋಧಿ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿದ್ದು ಅದು ಜೀವಕೋಶಗಳ ಪುನರುತ್ಪಾದನೆ ಮತ್ತು ಕಾಲಜನ್ ಉತ್ಪಾದನೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ.</li>  </ul>";
}

else if (result === "Doddapatra") {
    image.src = "static/doddapatra.png";
    plant_name.innerHTML="<strong>Doddapatra</strong>";
    medicinalValues.innerHTML = "<ul> <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ಕೋಲಿಯಸ್ ಅಂಬೊನಿಕಸ್</li> <li>ಮೂತ್ರ ವಿಸರ್ಜನೆಯನ್ನು ಉತ್ತೇಜಿಸುವ ಮೂಲಕ ದೇಹವನ್ನು ನಿರ್ವಿಷಗೊಳಿಸಿ.</li> <li>ಶೀತಗಳ ವಿರುದ್ಧ ರಕ್ಷಿಸಲು.</li> <li>ಸಂಧಿವಾತದ ನೋವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li> <li>ಸ್ತನ ಕ್ಯಾನ್ಸರ್ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಧನಾತ್ಮಕ ಪರಿಣಾಮ.</li> <li>ಜೀರ್ಣಕ್ರಿಯೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.</li> <li>ಹೆರಿಗೆಯ ನಂತರದ ತಿಂಗಳು ಅಥವಾ ನಂತರ ಹಾಲುಣಿಸುವಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ಇದನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಅಡುಗೆ ಮತ್ತು ಸುವಾಸನೆ ಭಕ್ಷ್ಯಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಗಾಯದ ಗುಣಪಡಿಸುವ ಗುಣಲಕ್ಷಣಗಳು.</li> </ul>";
  }
  else if (result === "Hipli") {
    image.src = "static/hipli.png";
    plant_name.innerHTML="<strong>ಹಿಪ್ಪಲಿ/ ಉದ್ದ ಮೆಣಸು ಎಲೆ</strong>";
    medicinalValues.innerHTML = "<ul> <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ಪೈಪರ್ ಲಾಂಗಮ್.</li> <li>ಉಸಿರಾಟದ ತೊಂದರೆಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತದೆ..</li> <li>ಅದರ ಆಂಟಿಪೈರೆಟಿಕ್ ಗುಣಲಕ್ಷಣಗಳಿಂದಾಗಿ ದೀರ್ಘಕಾಲದ ಜ್ವರಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡುತ್ತದೆ..</li> <li>ಮಧುಮೇಹವನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ..</li> <li>ರಕ್ತದಲ್ಲಿ ಗ್ಲೂಕೋಸ್ ಬಿಡುಗಡೆಯಾಗುವ ದರವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ..</li> <li>ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಸೋಂಕಿನ ವಿರುದ್ಧ ಹೋರಾಡುತ್ತದೆ..</li> <li>ಜೀರ್ಣಕಾರಿ ಸಮಸ್ಯೆಗಳಾದ ವಾಯು ಮತ್ತು ಎದೆಯುರಿ ಅಥವಾ ಮಂದವಾದ ಹಸಿವನ್ನು ಅನುಭವಿಸುತ್ತಿದ್ದರೆ, ಪಿಪ್ಪಲಿ ಸಹಾಯ ಮಾಡಬಹುದು..</li> <li>ನಿದ್ರಾಹೀನತೆಯಂತಹ ನಿದ್ರಾಹೀನತೆಯ ಸಮಸ್ಯೆಗಳಿಗೆ ಜೇನುತುಪ್ಪದ ಜೊತೆಗೆ ಉದ್ದನೆಯ ಕಾಳುಮೆಣಸನ್ನು ಪರಿಹಾರವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ..</li> <li>ಇದು ಮೂಲಭೂತವಾಗಿ ದೇಹದಲ್ಲಿನ ಕೊಬ್ಬನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕೊಬ್ಬಿನ ವಿಷವನ್ನು ಹೊರಹಾಕುತ್ತದೆ, ಇದು ಹೆಚ್ಚುವರಿ ತೂಕವನ್ನು ಕಳೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ..</li> <li>ಕ್ಷಯರೋಗ ಚಿಕಿತ್ಸೆಯ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ..</li> <li>ಹಲ್ಲುನೋವುಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಚಯಾಪಚಯವನ್ನು ಹೆಚ್ಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> </ul>";
  }
  else if (result === "Mint") {
    image.src = "static/mint.jpeg";
    plant_name.innerHTML="<strong>ಪುದೀನ ಎಲೆ</strong>";
    medicinalValues.innerHTML = "<ul>    <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>-ಮೆಂತಾ.</li>    <li>ವಿಟಮಿನ್ ಎ ಮತ್ತು ಉತ್ಕರ್ಷಣ ನಿರೋಧಕಗಳ ಮೂಲ.</li>    <li>ಕೆರಳಿಸುವ ಕರುಳಿನ ಸಹಲಕ್ಷಣಗಳನ್ನು ಸುಧಾರಿಸಿ.</li>    <li>ಅಜೀರ್ಣವನ್ನು ನಿವಾರಿಸಲು ಸಹಾಯ ಮಾಡಿ.</li>    <li>ಮೆದುಳಿನ ಕಾರ್ಯವನ್ನು ಸುಧಾರಿಸಿ.</li>    <li>ಶೀತ ರೋಗಲಕ್ಷಣಗಳನ್ನು ಸುಧಾರಿಸುತ್ತದೆ.</li>    <li>ಬಾಯಿ ಫ್ರೆಶ್ನರ್</li>    <li>ಹಿಮೋಗ್ಲೋಬಿನ್ ಮಟ್ಟವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ.</li>    <li>ಅದ್ಭುತ ಹಸಿವನ್ನು ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.</li>    <li>ಆಸ್ತಮಾ ರೋಗಿಗಳಿಗೆ ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.</li>    <li>ನಿಮ್ಮ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಸುಧಾರಿಸಿ.</li>    <li>ಆರೋಗ್ಯಕರ ರೀತಿಯಲ್ಲಿ ತೂಕವನ್ನು ಕಳೆದುಕೊಳ್ಳುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವನ್ನು ವಹಿಸುತ್ತದೆ.</li>    <li>ಮೊಡವೆ, ಗಾಯದಂತಹ ಚರ್ಮಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಸಮಸ್ಯೆಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಮೊಡವೆ ಪ್ರಕೋಪಗಳಿಗೆ ಸಂಬಂಧಿಸಿದ ಉರಿಯೂತ ಮತ್ತು ಕೆಂಪು ಬಣ್ಣವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li>   <li>ಕೂದಲಿನ ಬೆಳವಣಿಗೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ ಮತ್ತು ಕೂದಲು ಉದುರುವುದನ್ನು ತಡೆಯುತ್ತದೆ.</li> </ul>";
  }
  else if (result === "Neem") {
    image.src = "static/neem.png";
    plant_name.innerHTML="<strong>ಬೇವಿನ ಎಲೆ</strong>";
    medicinalValues.innerHTML = "<ul> <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ಅಜಾಡಿರಾಚ್ಟಾ ಇಂಡಿಕಾ</li> <li>ಇದು ಕ್ಯಾನ್ಸರ್ ಕೋಶಗಳನ್ನು ಕೊಲ್ಲುತ್ತದೆ.</li> <li>ಬೇವಿನ ಬೀಜದ ರಸವು ಕರುಳಿನ ಹುಳುಗಳು ಮತ್ತು ಇತರ ಕರುಳಿನ ಪ್ರದೇಶದಲ್ಲಿ ಇರಬಹುದಾದ ಅನಗತ್ಯ ಪರಾವಲಂಬಿ ಜೀವಿಗಳನ್ನು ನಾಶಮಾಡುವಲ್ಲಿ ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆದೆ.</li> <li>ಇದು ತ್ವಚೆಗೆ ಉತ್ತಮ ಆಂಟಿಬ್ಯಾಕ್ಟೀರಿಯಲ್ ಕ್ಲೆನ್ಸರ್ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.</li> <li>ಬೇವಿನ ರಸವನ್ನು ಕುಡಿಯುವುದು ಒಬ್ಬರ ಜೀರ್ಣಕ್ರಿಯೆಯ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಮರುಸಂಘಟಿಸಲು ಮತ್ತು ರೀಬೂಟ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಹಸಿವನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.</li> <li>ಮಧುಮೇಹ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> ಐಡಿಗಳು ಗಾಯಗಳನ್ನು ಗುಣಪಡಿಸುವುದು.</li> <li>ವಾಕರಿಕೆ ನಿವಾರಿಸುತ್ತದೆ.</li> <li>ಸೊಳ್ಳೆ ನಿವಾರಕವಾಗಿ.</li> <li>ಚರ್ಮದ ಮುಲಾಮುವಾಗಿ ಬಳಸಿ.</li> <li>ಹಲ್ಲಿನ ಪ್ಲೇಕ್ ವಿರುದ್ಧ ಹೋರಾಡುತ್ತದೆ ಮತ್ತು ಬಾಯಿಯಲ್ಲಿರುವ ಬ್ಯಾಕ್ಟೀರಿಯಾದ ಪ್ರಮಾಣವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li> <li>ತಲೆಹೊಟ್ಟು ತೆಗೆದುಹಾಕಿ ಮತ್ತು ತಲೆಹೊಟ್ಟು ವಿರುದ್ಧ ತಡೆಗಟ್ಟುವ ಕ್ರಮವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಬೇವಿನಲ್ಲಿ ಉರಿಯೂತ ನಿವಾರಕ ಗುಣವಿದ್ದು ಮೊಡವೆಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಬೇವು ವೈಜ್ಞಾನಿಕವಾಗಿ ಆಂಟಿಫಂಗಲ್ ಆಸ್ತಿಯನ್ನು ಹೊಂದಿದೆ, ಇದು ಶಿಲೀಂಧ್ರಗಳ ಸೋಂಕಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಬೇವು ಅದರ ಆಂಟಿಮೈಕ್ರೊಬಿಯಲ್ ಮತ್ತು ಆಂಟಿಬ್ಯಾಕ್ಟೀರಿಯಲ್ ಪರಿಣಾಮಗಳಿಗೆ ಹೆಸರುವಾಸಿಯಾಗಿದೆ. ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸುವಲ್ಲಿ ಈ ಗುಣಲಕ್ಷಣಗಳು ದೊಡ್ಡ ಪಾತ್ರವನ್ನು ವಹಿಸುತ್ತವೆ.</li> <li>ಪೀಡಿತ ಪ್ರದೇಶದ ಮೇಲೆ ಬೇವಿನ ಎಣ್ಣೆ ಅಥವಾ ಸಾರವನ್ನು ಅನ್ವಯಿಸುವುದು ನೋವು ಮತ್ತು ಅಸ್ವಸ್ಥತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> </ul>";
  }
  else if (result  === "Parijata") {
    image.src = "static/parijatha.jpeg";
    plant_name.innerHTML="<strong>ಪಾರಿಜಾತ ಎಲೆ</strong>";
    medicinalValues.innerHTML = "<ul> <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ನಿಕ್ಟಾಂಥೆಸ್ ಆರ್ಬರ್ ಟ್ರಿಸ್ಟಿಸ್</li> <li>ಇದು ಮಲೇರಿಯಾ, ಡೆಂಗ್ಯೂ ಮತ್ತು ಚಿಕೂನ್‌ಗುನ್ಯಾ ಜ್ವರ ಸೇರಿದಂತೆ ವಿವಿಧ ವಾಕರಿಕೆ ತರಹದ ಜ್ವರಗಳನ್ನು ಗುಣಪಡಿಸುತ್ತದೆ.</li> <li>ಸಂಧಿವಾತದ ಮೊಣಕಾಲು ನೋವಿನ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಪಾರಿಜಾತದ ಎಲೆಗಳು ಪ್ರಯೋಜನಕಾರಿ.</li> <li>ಪಾರಿಜಾತ ಎಲೆಗಳು ಮತ್ತು ಹೂವುಗಳಿಂದ ಮಾಡಿದ ಚಹಾವು ಕೆಮ್ಮು, ಶೀತ ಮತ್ತು ಬ್ರಾಂಕೈಟಿಸ್ ಅನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.</li> <li> ಇದು ಇ.ಕೋಲಿಯಂತಹ ಸೂಕ್ಷ್ಮಾಣುಗಳನ್ನು ತಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. , ಸ್ಟ್ಯಾಫ್ ಸೋಂಕು ಮತ್ತು ಕೆಲವು ಶಿಲೀಂಧ್ರಗಳ ಸೋಂಕು.</li> <li>ಪಾರಿಜಾತದ ಹೂವುಗಳು ಮತ್ತು ಎಲೆಗಳು ಅದರಲ್ಲಿ ಎಥೆನಾಲ್ ಇರುವ ಕಾರಣ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಇಮ್ಯುನೊಸ್ಟಿಮ್ಯುಲೇಟರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.</li> <li>ಪಾರಿಜಾತದ ಹೂವುಗಳು ಮತ್ತು ಎಲೆಗಳು ಅದರಲ್ಲಿ ಎಥೆನಾಲ್ ಇರುವ ಕಾರಣ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಇಮ್ಯುನೊಸ್ಟಿಮ್ಯುಲೇಟರಿಯಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತವೆ.</li> <li>ತಲೆಹೊಟ್ಟು ಮತ್ತು ಕೂದಲಿನ ಪರೋಪಜೀವಿಗಳನ್ನು ತೆರವುಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ನಿಯಂತ್ರಿಸುತ್ತದೆ.</li> <li>ಕೂದಲಿನ ಟಾನಿಕ್ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ ಮತ್ತು ಕೂದಲನ್ನು ಬಲಪಡಿಸಲು ಮತ್ತು ಕೂದಲು ಉದುರುವಿಕೆಯನ್ನು ತಡೆಯಲು ಬಳಸಲಾಗುತ್ತದೆ.</li> <li> ಪಾರಿಜಾತದ ಎಲೆಗಳು ಮಲೇರಿಯಾ ಜ್ವರವನ್ನು ನಿವಾರಿಸುತ್ತದೆ ಮತ್ತು ದೇಹದಲ್ಲಿ ಪರಾವಲಂಬಿ ಸಾಂದ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಮುಟ್ಟಿನ ಸೆಳೆತವನ್ನು ನಿವಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಹೈಪರ್ ಆಸಿಡಿಟಿ, ವಾಕರಿಕೆ ಇತ್ಯಾದಿ ಜೀರ್ಣಕಾರಿ ಸಮಸ್ಯೆಗಳನ್ನು ನಿವಾರಿಸುತ್ತದೆ.</li> </ul>";
  }
  else if (result === "Peepal") {
    image.src = "static/peepal.png";
    plant_name.innerHTML="<strong>ಅರಳಿ ಎಲೆ</strong>";
    medicinalValues.innerHTML = "<ul><li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: Ficus Religiosa.</li> <li>ಉತ್ಕರ್ಷಣ ನಿರೋಧಕವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.</li> <li>ಫಿಟ್ಸ್‌ನ ತೀವ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಅಥವಾ ತಡೆಯುತ್ತದೆ.</li> <li>ಸೂಕ್ಷ್ಮಜೀವಿಗಳನ್ನು ಕೊಲ್ಲುತ್ತದೆ.</li> <li>ಗಾಯದ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಸಹಾಯ.</li> <li>ಅಲ್ಸರ್ ವಿರೋಧಿ ಏಜೆಂಟ್ ಆಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.</li> <li>ಮೂತ್ರಪಿಂಡದ ರಕ್ಷಣಾತ್ಮಕ ಏಜೆಂಟ್ ಆಗಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ತೀವ್ರ ಅಸಹನೀಯ ಹೊಟ್ಟೆ ನೋವನ್ನು ನಿವಾರಿಸಬಹುದು.</li> <li>ಅದರ ಸಂಭಾವ್ಯ ತಂಪಾಗಿಸುವ ಸ್ವಭಾವದಿಂದಾಗಿ ಜ್ವರದಲ್ಲಿ ಪರಿಣಾಮಕಾರಿಯಾಗಿದೆ.</li> <li>ಪೀಪಲ್ ಎಲೆಗಳು ಕಿವಿಗೆ ಸಂಬಂಧಿಸಿದ ಸಮಸ್ಯೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಬಹುದು.</li> </ul>";
  }
  else if (result === "Tulsi") {
    image.src = "static/tulsi.png";
    plant_name.innerHTML="<strong>ತುಳಸಿ ಎಲೆ</strong>";
    medicinalValues.innerHTML = "<ul> <li><strong>ವೈಜ್ಞಾನಿಕ ಹೆಸರು</strong>: ಒಸಿಮಮ್ ಟೆನ್ಯುಫ್ಲೋರಮ್< </li> <li>ಗಂಟಲಿನ ಸೋಂಕಿನಂತಹ ಸೋಂಕುಗಳನ್ನು ಗುಣಪಡಿಸುತ್ತದೆ.</li> <li>ಕೃಷ್ಣ ತುಳಸಿಯ ಎಣ್ಣೆಯನ್ನು ಕಿವಿ ಹನಿಗಳಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಮಲೇರಿಯಾವನ್ನು ಗುಣಪಡಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಮೊಡವೆ, ಚರ್ಮದ ಸೋಂಕುಗಳಿಗೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು, ಕಪ್ಪು ಕಲೆಗಳನ್ನು ಹಗುರಗೊಳಿಸಲು ಮತ್ತು ಚರ್ಮದ ವಿನ್ಯಾಸವನ್ನು ಸುಧಾರಿಸಲು.</li> <li>ತುಳಸಿಯನ್ನು ಮೊಟ್ಟೆಯೊಂದಿಗೆ ಬೆರೆಸಿ ಮಿಶ್ರಣ ಮಾಡಿದರೆ ಚರ್ಮದ ರಂಧ್ರಗಳನ್ನು ಬಿಗಿಗೊಳಿಸುವುದು.</li> <li>ಒಣ ನೆತ್ತಿಯನ್ನು ತಡೆಯಲು ತುಳಸಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ತುಳಸಿ ಚಹಾವು ನಿಮ್ಮ ಚಯಾಪಚಯವನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ದೇಹವು <li>ಅಗತ್ಯವಾದ ಪೋಷಕಾಂಶಗಳನ್ನು ಹೀರಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ರಾತ್ರಿಯಿಡೀ ಬೇಯಿಸಿದ ನೀರಿನಲ್ಲಿ ತುಳಸಿ ಎಲೆಗಳನ್ನು ನಿಮ್ಮ ಕಣ್ಣುಗಳನ್ನು ತೊಳೆಯಲು ಬಳಸಬಹುದು.</li> <li>ಧೂಮಪಾನವನ್ನು ನಿಲ್ಲಿಸಲು ತುಳಸಿ ಎಲೆಗಳನ್ನು ತಿನ್ನುವುದು ಉತ್ತಮ ಸಹಾಯವಾಗಿದೆ ಮತ್ತು ಇದು ನಿಮ್ಮ ದೇಹದಿಂದ ನಿಕೋಟಿನ್ ಅಂಶವನ್ನು ಹೊರಹಾಕಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಇದು ರಕ್ತ ಶುದ್ಧೀಕರಣಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ಜ್ವರವನ್ನು ಗುಣಪಡಿಸಲು ಸಹಾಯ ಮಾಡಬಹುದು.</li> <li>ಕೀಟ ಕಡಿತಕ್ಕೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಹೃದ್ರೋಗ ಮತ್ತು ಜ್ವರಕ್ಕೆ ಚಿಕಿತ್ಸೆ ನೀಡಲು ಸಹ ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಅಸ್ತಮಾ ಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ.</li> <li>ತುಳಸಿಯನ್ನು ಜೀರ್ಣಾಂಗವ್ಯೂಹದ ವಿವಿಧ ಕಾಯಿಲೆಗಳಿಗೆ ಪರಿಹಾರವಾಗಿ ಮತ್ತು <li>ಹಸಿವನ್ನು ಸುಧಾರಿಸಲು ಬಳಸಲಾಗುತ್ತದೆ.</li> <li>ಬಲವಾದ ಉತ್ಕರ್ಷಣ ನಿರೋಧಕ ಗುಣಲಕ್ಷಣಗಳನ್ನು ಹೊಂದಿವೆ.</li> <li>ತುಳಸಿ ಎಲೆಗಳು ಟೈಪ್ 2 ಡಯಾಬಿಟಿಸ್ ರೋಗಿಗಳಲ್ಲಿ ರಕ್ತದಲ್ಲಿನ ಗ್ಲೂಕೋಸ್ ಮಟ್ಟವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಎಂದು ತೋರಿಸಿದೆ.</li> </ul>";
  }
// continue the same pattern for all 10 classes
else {
  // handle the case where there's no match
  image.src = "static/error.png";
  medicinalValues.innerHTML = "<h1>Input image does not belong to any of the 10 trained classes</h1>";
}