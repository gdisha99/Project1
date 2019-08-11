var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var span2 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];

btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

span1.onclick = function() {
  modal1.style.display = "none";
document.getElementById("id_3").innerHTML = "";
document.getElementById("id_4").innerHTML = "";
document.getElementById("id_5").innerHTML = "";
document.getElementById("id_6").innerHTML = "";
}
span2.onclick = function() {
  modal2.style.display = "none";
document.getElementById("id_1").innerHTML = "";
document.getElementById("id_2").innerHTML = "";

}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.addEventListener('click' , function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
});
window.addEventListener('click' , function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
});