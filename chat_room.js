var firebaseConfig = {
  apiKey: "AIzaSyBc2tHtrkYUqr2xiCk-KIMQGFEm2vzrrME",
  authDomain: "lets-chat-web-app-10487.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-10487-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-10487",
  storageBucket: "lets-chat-web-app-10487.appspot.com",
  messagingSenderId: "1079193267077",
  appId: "1:1079193267077:web:1e5c9af6c50afd7a3872ec"
};

username = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "welcome" + username + "!"
function addRoom()
{
  roomname = document.getElementById("room_name").value 
  firebase.database().ref("/").child("room_name").update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name" , roomname)
  window.location = "chat_page.html"
}
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)
       row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
       document.getElementById("output").innerHTML += row
    });
  });

}

getData();
function redirect(name)
{
  console.log(name)
  localStorage.setItem("room_name" , name )
window.location = "chat_page.html"
}
function logout()
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location= "index.html"
}