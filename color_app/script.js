const inputRedValue = document.getElementById("input-red-scale");
const inputGreenValue = document.getElementById("input-green-scale");
const inputBlueValue = document.getElementById("input-blue-scale");
const activeButton = document.getElementById("active-button");

activeButton.addEventListener("click", setNewColor);

colorWasPicked = false;

function setNewColor() {
  let redValue = parseInt(inputRedValue.value);
  let blueValue = parseInt(inputBlueValue.value);
  let greenValue = parseInt(inputGreenValue.value);

  const colorValuesArray = [redValue, greenValue, blueValue];
  const rgbCombined = `rgb(${redValue},${greenValue},${blueValue})`;
  let continueTerm = false;
  const currentColorMessage = "You have picked this color right now!";

  for (i = 0; i < colorValuesArray.length; i++) {
    if (
      !colorValuesArray[i] ||
      colorValuesArray[i] < 0 ||
      colorValuesArray[i] > 255
    ) {
      document.getElementById("input-error").innerHTML =
        "input must be a number between 0 to 255. please try again!";
      document.getElementById("if-color1-shown").innerHTML = "";
      document.getElementById("if-color2-shown").innerHTML = "";
      continueTerm = false;
      break;
    } else {
      continueTerm = true;
    }
  }

  if (continueTerm) {
    if (!colorWasPicked) {
      document.getElementById("picked-color1").style.backgroundColor =
        rgbCombined;
      document.getElementById("if-color1-shown").innerHTML =
        currentColorMessage;
      document.getElementById("if-color2-shown").innerHTML = "";
      document.getElementById("input-error").innerHTML = "";
      colorWasPicked = true;
      return;
    } else {
      document.getElementById("picked-color2").style.backgroundColor =
        rgbCombined;
      document.getElementById("if-color2-shown").innerHTML =
        currentColorMessage;
      document.getElementById("if-color1-shown").innerHTML = "";
      document.getElementById("input-error").innerHTML = "";
      colorWasPicked = false;
    }
  }
}
