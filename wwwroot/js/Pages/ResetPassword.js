$(document).ready(function () {
    //debugger;
    $('#CONFIRMPASSWORD').keyup(function () {
        var PASSWORD = $('#PASSWORD').val();
        var CONFIRMPASSWORD = $('#CONFIRMPASSWORD').val();
        if (CONFIRMPASSWORD != PASSWORD) {
            $('#showerror').html('Password Not Matched');
            $('#showerror').css('color', 'red');
            return false;
        }
        else {
            $('#showerror').html('');
            return true;
        }
    });
});

function ValidateEmail() {
    //debugger;
    var chkEmailflag = false;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if ($("#EMAILID").val() == "") {
        $("#divemail").remove(); 
        $("#EMAILID").parent().after("<div id='divemail' style='color:red;margin-bottom: 20px;'>Please enter Email.</div>");
        chkEmailflag = true;
    }
    else {
        $("#divemail").remove();
        if (!($("#EMAILID").val().match(validRegex))) {
            $("#EMAILID").parent().after("<div id='divemail' style='color:red;margin-bottom: 20px;'>Please enter valid Email.</div>");
            chkEmailflag = true;
        }
        else {
            $("#divemail").remove(); 
        }
    }

    if (chkEmailflag == true) {
        return;
    }
}

function ValidatePassword() {
    //debugger;
    var validPassRegex = /^(?=.*?[A-Z](?=.*\d)(?=.*?[a-z])(?=.*?[#?!@$%^&*-])).{8,}$/;
    var chkPassflag = false;
    if ($("#PASSWORD").val() == "") {
        $("#divpass").remove();
        $("#PASSWORD").parent().after("<div id='divpass' style='color:red;margin-bottom: 20px;'>Please enter Password.</div>");
        chkPassflag = true;
    }
    else {
        $("#divpass").remove();
        if (!($("#PASSWORD").val().match(validPassRegex))) {
            $("#PASSWORD").parent().after("<div id='divpass' style='color:red;margin-bottom: 20px;'>Please enter valid Password. (Atleast 8 characters with 1 Uppercase, 1 Number and 1 Special)</div>");
            chkPassflag = true;
        }
        else {
            $("#divpass").remove(); 
        }
    }
    if (chkPassflag == true) {
        return;
    }
}

function ValidateConfirmPassword() {
    //debugger;
    var chkCPwdflag = false;
    $("#showerror").remove();
    $("#divcpass").remove();
    if ($("#CONFIRMPASSWORD").val() == "") {
        $("#divcpass").remove();
        $("#CONFIRMPASSWORD").parent().after("<div id='divcpass' style='color:red;margin-bottom: 20px;'>Please enter Confirm Password.</div>");
        chkCPwdflag = true;
    }
    else if ($('#CONFIRMPASSWORD').val() != $('#PASSWORD').val()) {
        $("#CONFIRMPASSWORD").parent().after("<div id='divcpass' style='color:red;margin-bottom: 20px;'>Password Not Matched.</div>");
        chkCPwdflag = true;
    }
    else {
        $("#divcpass").remove(); 
    }
    if (chkCPwdflag == true) {
        return;
    }
}

function ResetPassword() {
    //debugger;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var validPassRegex = /^(?=.*?[A-Z](?=.*\d)(?=.*?[a-z])(?=.*?[#?!@$%^&*-])).{8,}$/;

    var chkflag = false;
    $("#divemail").remove();
    $("#divpass").remove();
    $("#divcpass").remove();
    $("#showerror").remove();
    document.getElementById("lblMessage").value = "";

    if ($("#EMAILID").val() == "") {
        $("#divemail").remove(); // remove it
        $("#EMAILID").parent().after("<div id='divemail' style='color:red;margin-bottom: 20px;'> Email cannot be blank.</div>");
        chkflag = true;
    }
    else {
        $("#divemail").remove();
        if (!($("#EMAILID").val().match(validRegex))) {
            $("#EMAILID").parent().after("<div id='divemail' style='color:red;margin-bottom: 20px;'>Invalid Email.</div>");
            chkflag = true;
        }
        else {
            $("#divemail").remove(); // remove it
        }
    }
    if ($("#PASSWORD").val() == "") {
        $("#divpass").remove();
        $("#PASSWORD").parent().after("<div id='divpass' style='color:red;margin-bottom: 20px;'>Please enter Password.</div>");
        chkflag = true;
    }
    else {
        $("#divpass").remove();
        if (!($("#PASSWORD").val().match(validPassRegex))) {
            $("#PASSWORD").parent().after("<div id='divpass' style='color:red;margin-bottom: 20px;'>Please enter valid Password. (Atleast 8 characters with 1 Uppercase, 1 Number and 1 Special)</div>");
            chkflag = true;
        }
        else {
            $("#divpass").remove(); // remove it
        }
    }

    if ($("#CONFIRMPASSWORD").val() == "") {
        $("#divcpass").remove();
        $("#CONFIRMPASSWORD").parent().after("<div id='divcpass' style='color:red;margin-bottom: 20px;'>Please enter Confirm Password.</div>");
        chkflag = true;
    }
    else if ($('#CONFIRMPASSWORD').val() != $('#PASSWORD').val()) {
        $("#divcpass").remove();
        $("#CONFIRMPASSWORD").parent().after("<div id='divcpass' style='color:red;margin-bottom: 20px;'>Password Not Matched.</div>");
        chkflag = true;
    }
    else {
        $("#divcpass").remove(); // remove it
    }
   

    if (chkflag == true) {
        //alert("testme");
        return false;
    }

   
    Email = $('#EMAILID').val();
    Password = $('#PASSWORD').val();
    var data = {
        EMAILID: Email,
        PASSWORD: Password,
    };

    //debugger;
    var Controller = "User";
    var Action = "ResetPassword";
    var URL = "/" + Controller + "/" + Action;
    //ResetFields();
    $.ajax({
        type: "POST",
        url: URL,
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (response) {
            //debugger;
            alert("Reset Password Successful.");
            if (response != null) {
                //ClearResetPassword();
                window.location.href = "/User/ResetPassword";
            } else {
                alert("Reset Password Successful.");
                window.location.href = "/User/ResetPassword";
                //alert("Something went wrong");
                //ClearResetPassword();
            }
        },
        failure: function (response) {
            alert("Reset Password Successful.");
            window.location.href = "/User/ResetPassword";
            //alert(response.responseText);
            //ClearResetPassword();
        },
        error: function (response) {
            alert("Reset Password Successful.");
            window.location.href = "/User/ResetPassword";
            //alert(response.responseText);
            //ClearResetPassword();
        }
    });
}
