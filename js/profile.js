if(window.localStorage.getItem("signin")){
    $.ajax({
        type: 'POST',  
        url: './php/profile.php',
        data: { email:window.localStorage.getItem("email") },
        success: function(response) {
            data=response.split("&");
            document.getElementById("name").innerText=data[0];
            document.getElementById("gender").innerHTML=data[1];
            document.getElementById("dob").innerHTML=data[2];
            document.getElementById("age").innerHTML=getAge(data[2]);
            document.getElementById("contact").innerHTML=data[3];
            document.getElementById("email").innerHTML=data[4];
        }
    });
}else{
    window.location.href = "./index.html";
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function logout(){
    window.localStorage.clear();
    window.location.href="./index.html";
}