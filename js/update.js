if (window.localStorage.getItem("signin")===false || window.localStorage.getItem("signin")===null){
    window.location.href="./index.html";
}

document.getElementById("email").placeholder = window.localStorage.getItem("email");

function update(){
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var contact = document.getElementById("contact").value;
    var email = window.localStorage.getItem("email");
    
    if(name!="" && gender!="" && dob!="" && contact!="" && email!=""){
        $.ajax({
            type: 'POST',  
            url: './php/update.php', 
            data: { name:name, gender:gender, dob:dob, contact:contact, email:email },
            success: function(response) {
                console.log(response);
                if(response==="updated"){
                    window.location.href="./profile.html";
                }
                else{
                    console.log(response);
                }
            }
        });
    }else{
        alert("Provide required details")
    }

}
