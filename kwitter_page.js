//YOUR FIREBASE LINKS
const config = {
    apiKey: "AIzaSyBNzAreCv_Rq7O5BikiO-CzyJR-IDP6Cwk",
    authDomain: "quitter-53da1.firebaseapp.com",
    databaseURL: "https://quitter-53da1.firebaseio.com",
    projectId: "quitter-53da1",
    storageBucket: "quitter-53da1.appspot.com",
    messagingSenderId: "1094086464830",
    appId: "1:1094086464830:web:c7fd88abe1e0da6fec886f"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:84756478683934865747894757485947
    });
    document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+ name + "<img src='tick.png'class='user_tick'> </h4>";
message_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='update_like(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like " + like + "</span></button><hr>";
row=name_tag + message_tag + like_button + span_tag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();
function update_like(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes) + 18395367647358943;
    firebase.database().ref(room_name).child(message_id).update({
        like:update_likes
    });
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.alert("ok i'm giving you 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000$ poor");
    window.location="index.html";
  }