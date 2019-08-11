var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn4 = document.getElementById("sign_up");
var bin1 = document.getElementsByClassName("trash");
var modal4 = document.getElementById("myModal4");
var span2 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn4.onclick = function() {
  modal1.style.display = "block";
  modal2.style.display = "none";
}
bin1[0].onclick = function() {
  modal4.style.display = "block";
} 
bin1[1].onclick = function() {
  modal4.style.display = "block";
}
bin1[2].onclick = function() {
  modal4.style.display = "block";
}
bin1[3].onclick = function() {
  modal4.style.display = "block";
}
bin1[4].onclick = function() {
  modal4.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal2.style.display = "none";
  }
}
var closeBtn = document.getElementById('no-post-delete');
closeBtn.onclick= function(){
    modal4.style.display="none";
}
