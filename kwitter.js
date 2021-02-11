function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.alert("we found your house and are going to rob it.");
    window.location="kwitter_room.html";
}