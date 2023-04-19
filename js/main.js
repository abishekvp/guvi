if (window.localStorage.getItem("signin")){
    window.location.href="./profile.html";
}

function signup(){
    var name = document.getElementById("su-name").value;
    var gender = document.getElementById("su-gender").value;
    var dob = document.getElementById("su-dob").value;
    var contact = document.getElementById("su-contact").value;
    var email = document.getElementById("su-email").value;
    var password = document.getElementById("su-password").value;
    var re_password = document.getElementById("su-re_password").value;

    if(name!="" && gender!="" && dob!="" && contact!="" && email!="" && password===re_password){
        $.ajax({
            type: 'POST',  
            url: './php/signup.php', 
            data: { name:name, gender:gender, dob:dob, contact:contact, email:email, password:password },
            success: function(response) {
                if(response=="registered"){
                    window.localStorage.setItem("signin", true);
                    window.localStorage.setItem("email", email);
                    window.location.href="./profile.html";
                }
                else if(response=="exists") {
                    alert("User with this email already Registered");
                }
            }
        });
    }else{
        alert("Provide required details");
    }
}

function signin(){
    var email = document.getElementById("si-email").value;
    var password = document.getElementById("si-password").value;
    
    if(email!="" && password!=""){
        $.ajax({
            type: 'POST',  
            url: './php/signin.php',
            data: { email:email, password:password },
            success: function(response) {
                if(response=="found"){
                    window.localStorage.setItem("signin", true);
                    window.localStorage.setItem("email", email);
                    window.location.href="./profile.html";
                }
                else if(response=="notfound") {
                    alert("user not found");
                    window.localStorage.setItem("signin", false);
                }
            }
        });
    }else{
        alert("Provide required details");
    }
}

