var firebaseConfig = {
    apiKey: "AIzaSyDM37CtUn3eqzPRP1u8WELjmvQFiIxKMMM",
    authDomain: "letschatappbase.firebaseapp.com",
    databaseURL: "https://letschatappbase-default-rtdb.firebaseio.com",
    projectId: "letschatappbase",
    storageBucket: "letschatappbase.appspot.com",
    messagingSenderId: "41917450611",
    appId: "1:41917450611:web:402343f63648546072dd06"
  };
  
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS

room_name = localStorage.getItem(room_name);
user_name = localStorage.getItem(user_name);

room_name = localStorage.getItem("room_name"); user_name = localStorage.getItem("user_name"); 
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
    like:0             
    });
       
    document.getElementById("msg").value = "";
}
       
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;

//Start code

//End code
    } });  }); }
getData();
