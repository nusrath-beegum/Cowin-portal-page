document.getElementById("dv1").style.display = "block";
document.getElementById("sp1").style.borderBottom = "3px solid #1affd1";
document.getElementById("dv2").style.display = "none";
document.getElementById("dv3").style.display = "none";
function change1() {
  document.getElementById("dv1").style.display = "block";
  document.getElementById("dv2").style.display = "none";
  document.getElementById("dv3").style.display = "none";
  document.getElementById("sp1").style.borderBottom = "3px solid #1affd1";
  document.getElementById("sp2").style.borderBottom = "";
  document.getElementById("sp3").style.borderBottom = "";
}
function change2() {
  document.getElementById("dv1").style.display = "none";
  document.getElementById("dv2").style.display = "block";
  document.getElementById("dv3").style.display = "none";
  document.getElementById("sp2").style.borderBottom = "3px solid #1affd1";
  document.getElementById("sp1").style.borderBottom = "";
  document.getElementById("sp3").style.borderBottom = "";
}
function change3() {
  document.getElementById("dv1").style.display = "none";
  document.getElementById("dv2").style.display = "none";
  document.getElementById("dv3").style.display = "block";
  document.getElementById("sp3").style.borderBottom = "3px solid #1affd1";
  document.getElementById("sp2").style.borderBottom = "";
  document.getElementById("sp1").style.borderBottom = "1";
}
document.getElementById("vdc").style.display = "block"
document.getElementById("cc").style.display = "none";
document.getElementById("mc").style.display = "block";
  document.getElementById("AP").style.display = "none";
  document.getElementById("RUM").style.display = "block";
  document.getElementById("TM-NM").style.display = "none";

function leftArrow(){
  document.getElementById("vdc").style.display = "block";
  document.getElementById("cc").style.display = "none";
  document.getElementById("mc").style.display = "block";
  document.getElementById("AP").style.display = "none";
  document.getElementById("RUM").style.display = "block";
  document.getElementById("TM-NM").style.display = "none";
}
function rightArrow(){
  document.getElementById("vdc").style.display = "none";
  document.getElementById("cc").style.display = "block";
  document.getElementById("AP").style.display = "block";
  document.getElementById("mc").style.display = "none";
  document.getElementById("TM-NM").style.display = "block";
  document.getElementById("RUM").style.display = "none";

}