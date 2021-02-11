//ADD YOUR FIREBASE LINKS HERE
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
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
  function addroom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding children/rooms"
    });
    localStorage.setItem("room_name",room_name);
    window.alert("so we got everything out of your house :)");
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room name:"+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='rediretToRoomName(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   //End code
   });});}
getData();
function rediretToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.alert("get more stuff");
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.alert("ok i'm giving you 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000$ poor");
  window.location="index.html";
}