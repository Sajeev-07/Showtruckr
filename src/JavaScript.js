
var id_name;
var valid_name=false;
var valid_pass=false;
var valid_mail=false;

var user1={
    email:"sajeev1@gmail.com",
    pwd:"567dsfvs"
};
var user2={
    email:"sajeev1@gmail.com",
    pwd:"567dsfvs"
};
var user3={
    email:"sajeev1@gmail.com",
    pwd:"567dsfvs"
};
var user4={
    email:"sajeev1@gmail.com",
    pwd:"567dsfvs"
};
var user5={
    email:"sajeev1@gmail.com",
    pwd:"567dsfvs"
};
var userList=[user1,user2,user3,user4,user5];

// function checkmail(){
//     document.getElementById("email").style.borderColor="red";
// }

function login() {
   var mail=document.getElementById("email").value;
   var pwd=document.getElementById("pwd").value;
   for(var j=0; j<5; j++){
       if(mail==userList[j]['email'] && pwd==userList[j]['pwd']){
           return alert('Successfully');
       }
   }
   alert('Invalid input');
}
/*function login_validation() {


    var pwd_id = document.getElementById("pwd");

    if (pwd_id.value != "") {

    } else {
        document.getElementById("validation_p").innerHTML = "this field can't be empty";
    }
}

function login() {
    var user_id = ["Sajeev", "Ukistuent", "Ukiadmin", "Nayan", "Rajini"]
    var user_name = ["sajeev@gmail.com", "ukistudent@gmail.com", "ukiadmin@gmail.com", "nayan@gmail.com", "rajini@gmail.com"];
    var password = ["Sajeev@123!", "Ukistu@123!", "Ukiadmin@123!", "Nayan@123!", "Rajini@123!"];
   



    var mail_id = document.getElementById("email").value;
    var pwd_id = document.getElementById("pwd").value;

    //var mail_id = document.getElementById("email");

    var mail_validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var valid_check;


    if (mail_id != "") {

        if (mail_id.match(mail_validation)) {
            document.getElementById("validation_e").innerHTML = "";
            for (i = 0; i < user_name.length; i++) {

                var name = user_id[i];
                var x = user_name[i];
                var y = password[i];


                if ((x == mail_id) && (y == pwd_id)) {
                    valid_check = "true";
                }
            }

            if (valid_check == "true") {
                alert("login successful" + id_name);
            } else {
                alert("Wrong user name and password");
                location.reload();
            }

        } else
            document.getElementById("validation_e").innerHTML = "Enter a valid email id";

    } else {
        document.getElementById("validation_e").innerHTML = "this field can't be empty";
    }*/

// }*/

/*----------Sign Up---------------*/

function name_validation() {

    var user_id = document.getElementById("user1");
    var letters = /^[A-Za-z]+$/;

    if (user_id.value != "") {
        if (user_id.value.match(letters)) {

            if (user_id.value.length < 5) {
                document.getElementById("validation_n").innerHTML = "Name should be contain atleast 5 letters";
            } else {
                document.getElementById("validation_n").innerHTML = "";
                valid_name = true;
            }

        } else {
            document.getElementById("validation_n").innerHTML = "Type alphabet letters only";

        }
    } else {
        document.getElementById("validation_n").innerHTML = "this field can't be empty";
    }
}


function myFunction() {
    var mail_id = document.getElementById("email").value;

    var mail_validation =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

           if (mail_id != "") {

        if (mail_id.match(mail_validation)) {
            document.getElementById("validation_e").innerHTML = "";
            valid_mail = true;
        } else
            document.getElementById("validation_e").innerHTML = "Enter a valid email id";

    } else {
        document.getElementById("validation_e").innerHTML = "this field can't be empty";
    }


}

function password_validation() {


    var pwd_id = document.getElementById("pwd");
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");

    if (pwd_id.value != "") {

        if (pwd_id.value.length <= 8) {

            document.getElementById("validation_p").innerHTML = "include Upper and lower case letters, numbers and Charecters";
            document.getElementById("password_color_valid").className = "mystyle";
        }
        else if (false == enoughRegex.test(pwd_id.value)) {
            document.getElementById("validation_p").innerHTML = "include Upper and lower case letters, numbers and Charecters";
            document.getElementById("password_color_valid").className = "mystyle";

        } else if (strongRegex.test(pwd_id.value)) {
            document.getElementById("password_color_valid").className = "mystyle2";
            document.getElementById("validation_p").innerHTML = "";
            valid_pass = true;


        } else if (mediumRegex.test(pwd_id.value)) {
            document.getElementById("password_color_valid").className = "mystyle1";
            document.getElementById("validation_p").innerHTML = "";
            valid_pass = true;


        } else {
            document.getElementById("password_color_valid").className = "mystyle";
        }

    } else {
        document.getElementById("validation_p").innerHTML = "this field can't be empty";
    }
}

function signupFunc() {

    if (valid_mail == true && valid_name == true && valid_pass == true) {
        alert("successful");
    }
    else if (valid_mail == true) {
        document.getElementById("validation_e").innerHTML = "";
        document.getElementById("validation_n").innerHTML = "Please enter valid data";
        document.getElementById("validation_p").innerHTML = "Please enter valid data";
    } else if (valid_name == true) {
        document.getElementById("validation_n").innerHTML = "";
        document.getElementById("validation_e").innerHTML = "Please enter valid data";
        document.getElementById("validation_p").innerHTML = "Please enter valid data";
    } else if (valid_pass == true) {
        document.getElementById("validation_p").innerHTML = "";
        document.getElementById("validation_n").innerHTML = "Please enter valid data";
        document.getElementById("validation_e").innerHTML = "Please enter valid data";
    } else {

        document.getElementById("validation_p").innerHTML = "Please enter valid data";
        document.getElementById("validation_n").innerHTML = "Please enter valid data";
        document.getElementById("validation_e").innerHTML = "Please enter valid data";
    }

}

function show() {
    var pwd_id = document.getElementById("pwd");
    $('#pwd').replaceWith('<input type="text" class="form-control pwd_t" id="pwd" placeholder="Password" value="' + pwd_id.value + '" name="pwd" oninput="password_validation()" required />')
    $('#show_eye').replaceWith('<i id="show_eye" class="glyphicon glyphicon-eye-close show_hide " onclick="hide()" ></i>')
}

function hide() {
    var pwd_id = document.getElementById("pwd");
    $('#pwd').replaceWith('<input type="password" class="form-control pwd_t" id="pwd" placeholder="Password" value="' + pwd_id.value + '" name="pwd" oninput="password_validation()" required />')
    $('#show_eye').replaceWith('<i class="glyphicon glyphicon-eye-open show_hide " id="show_eye" onclick="show()" ></i>')
}
