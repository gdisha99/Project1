var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn4 = document.getElementById("sign_up");
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

//like function
var numberOfClicks=0;
function postLiked(){
   var button = document.getElementById("addLike")
   button.innerHTML = '<i class="fa fa-thumbs-up ">'+'</i>'+'&nbsp;'+"Liked!";
   button.style.border="none";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likesCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likesCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }
    }

//comments function..
function addComments(id){
   if (id.value.length>0){
    var addEventName = id.value ;
    document.getElementById('addEventNames').innerHTML += '<p id="comment">' + addEventName + '</p>' ; 
    var a = document.getElementById('userComments');         
    a.value=a.defaultValue;
   }
}

var titleConetnt = document.getElementById('blogTitleNew');
var contentText = document.getElementById('blogBody');
var editButton = document.getElementById('editButton');
var saveButton = document.getElementById('saveButton');
// edit and save the content
function editContent(){
    contentText.contentEditable="true";
    titleConetnt.contentEditable="true";
    contentText.style.border="1px solid red";
    titleConetnt.style.border="1px solid red";
    editButton.style.display="none";
    saveButton.style.display="block";
    contentText.focus();
}

function saveContent(){
    contentText.contentEditable="false";
    titleConetnt.contentEditable="false";
    contentText.style.border="none";
    titleConetnt.style.border="none";
    editButton.style.display="block";
    saveButton.style.display="none"; 
}