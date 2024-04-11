var firebaseConfig = {
    apiKey: "AIzaSyCsxjbKTFXxtokL5IMKXpJe403d9ci7fWs",
    authDomain: "kwitter-c93-9a60f.firebaseapp.com", 
    databaseURL:"https://kwitter-c93-9a60f-default-rtdb.firebaseio.com",
    projectId: "kwitter-c93-9a60f",
    torageBucket: "kwitter-c93-9a60f.appspot.com",
    messagingSenderId: "334058894589",
    appId: "1:334058894589:web:676874d6f84b91bd97fa94"
 };

    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
    document.getElementById("user_name").innerHTML="Hola" + user_name + "!";

    function addRoom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).udapte({
            purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location.replace("kwitter_page.html");
    }

    function getRoom(){
        firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names );
        row = "<div class= 'room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
        });});

    }

    getRoom();

    function redirectToRoomName(Room_names){
        console.log(Room_names);
        localStorage.setItem("room_name", Room_names);
        window.location = "kwitter_page.html";
    }
    
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("index.html");

        
    }