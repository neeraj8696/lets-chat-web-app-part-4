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
  roomname = localStorage.getItem("room_name")
  function send()
  {
      Msg=document.getElementById("msg").value 
      firebase.database().ref(roomname).push({
          name: username,
  message: Msg,
  like:0
      });
      document.getElementById("msg").value = ""
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  name = message_data['name']
  message = message_data['message']
  like = message_data['like']
  name_tag = "<h4>" + name + "</h4>"  
  message_tag = "<h4 class='message_h4'>" +message + "</h4>"
  like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value = "+like+" onclick='update_like(this.id)'> likes:" + like + "</button>"
  row = name_tag + message_tag + like_button 
  document.getElementById("output").innerHTML += row
  }});
  });
  }
  getData();
  function update_like(message_id)
  {
  button_id = message_id
  likes = document.getElementById(button_id).value 
  updatedLIkes = Number(likes) + 1
  firebase.database().ref(room_name).child(message_id).update({
      like:updatedLIkes
  
  });
  }
  function logout()   
  {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location ="index.html"
  }