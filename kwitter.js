function addUser(){
    user_name = document.getElementById("user_namer").value;

   localStorage.setItem("user_name", user_name);

   window.location = "kwitter_room.html";
}