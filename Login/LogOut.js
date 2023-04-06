const { default: firebase } = require("@firebase/app-compat");
const { link } = require("fs");

firebase.auth().onAuthStateChanged(function(user){

    if (user) {    
        const uid = user.uid;
        console.log("User On Web");
        document.getElementById("on").style.display = block;
        document.getElementById("off").style.display = none;
    } else {
        console.log("user Not On web");
        document.getElementById("off").style.display = block;
        document.getElementById("on").style.display = none;
    }
});

function signOut(){
    firebase.auth().signOut();
}


