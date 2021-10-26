var firebaseConfig = {
    apiKey: "AIzaSyDasuLEhoow-jcZn51F2OsmsXG5sPiz4lI",
    authDomain: "kwitter-d684a.firebaseapp.com",
    databaseURL: "https://kwitter-d684a-default-rtdb.firebaseio.com",
    projectId: "kwitter-d684a",
    storageBucket: "kwitter-d684a.appspot.com",
    messagingSenderId: "377185623197",
    appId: "1:377185623197:web:48575a1bc3c98401620874"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

  document.getElementById("user_name").innerHTML="welcome" + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value 
  firebase.database().ref("/").child(room_name).update({
      purpose : "adding room"
});

localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("room_name" + Room_names);
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}