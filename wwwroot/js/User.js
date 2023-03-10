

function myfun() {
    var EMAILID = document.getElementById('EMAILID').value;
    var CONFIRMEMAIL = document.getElementById('CONFIRMEMAIL').value;
    if (EMAILID != CONFIRMEMAIL) {
        //swal("Failure", "Email Not Matched with Confirm Email", "warning");
        return false;
    }
    var PASSWORD = document.getElementById('PASSWORD').value;
    var CONFIRMPASSWORD = document.getElementById('CONFIRMPASSWORD').value;
    if (PASSWORD != CONFIRMPASSWORD) {
        //swal("Failure", "Password Not Matched with Confirm Password", "warning");
        return false;
    }
}

$(document).ready(function () {
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


    $('#CONFIRMEMAIL').keyup(function () {
        var EMAILID = $('#EMAILID').val();
        var CONFIRMEMAIL = $('#CONFIRMEMAIL').val();
        if (CONFIRMEMAIL != EMAILID) {
            $('#showerrorEmail').html('Email Not Matched');
            $('#showerrorEmail').css('color', 'red');
            return false;
        }
        else {
            $('#showerrorEmail').html('');
            return true;
        }
    });
});

function ValidateFname() {
    debugger;
    var chkFnameflag = false;
    if ($("#FIRSTNAME").val() == "") {
        $("#divfirstname").remove();
        $("#FIRSTNAME").parent().after("<div id='divfirstname' class='error-message'>Please enter First Name.</div>");
        chkFnameflag = true;
    }
    else {
        $("#divfirstname").remove(); // remove it
    }
    if (chkFnameflag == true) {
        return;
    }
}

function ValidateLname() {
    debugger;
    var chkLnameflag = false;
    if ($("#LASTNAME").val() == "") {
        $("#divlastname").remove();
        $("#LASTNAME").parent().after("<div id='divlastname' class='error-message'>Please enter Last Name.</div>");
        chkLnameflag = true;
    }
    else {
        $("#divlastname").remove(); // remove it
    }
    if (chkLnameflag == true) {
        return;
    }
}

function ValidateEmail() {
    debugger;
    var chkEmailflag = false;
    //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if ($("#EMAILID").val() == "") {
        $("#divemail").remove(); // remove it
        $("#EMAILID").parent().after("<div id='divemail' class='error-message'>Please enter Email.</div>");
        chkEmailflag = true;
    }
    else {
        $("#divemail").remove();
        if (!($("#EMAILID").val().match(validRegex))) {
            $("#EMAILID").parent().after("<div id='divemail' class='error-message'>Please enter valid Email.</div>");
            chkEmailflag = true;
        }
        else {
            $("#divemail").remove(); // remove it
        }
    }

    if (chkEmailflag == true) {
        return;
    }
}

function ValidatePassword() {
    debugger;
    var validPassRegex = /^(?=.*?[A-Z](?=.*\d)(?=.*?[a-z])(?=.*?[#?!@$%^&*-])).{8,}$/;
    var chkPassflag = false;
    if ($("#PASSWORD").val() == "") {
        $("#divpass").remove();
        $("#PASSWORD").parent().after("<div id='divpass' class='error-message'>Please enter Password.</div>");
        chkPassflag = true;
    }
    else {
        $("#divpass").remove();
        if (!($("#PASSWORD").val().match(validPassRegex))) {
            $("#PASSWORD").parent().after("<div id='divpass' class='error-message'>Please enter valid Password. (Atleast 8 characters with 1 Uppercase, 1 Number and 1 Special)</div>");
            chkPassflag = true;
        }
        else {
            $("#divpass").remove(); // remove it
        }
    }
    if (chkPassflag == true) {
        return;
    }
}

function ValidateConfirmEmail() {
    debugger;
    var chkCEmailflag = false;
    if ($("#CONFIRMEMAIL").val() == "") {
        $("#divConfirmEmail").remove();
        $("#CONFIRMEMAIL").parent().after("<div id='divConfirmEmail' class='error-message'>Please enter Confirm Email</div>");
        chkCEmailflag = true;
    }
    else {
        $("#divConfirmEmail").remove(); // remove it
    }
    if (chkCEmailflag == true) {
        return;
    }
}

function ValidateConfirmPassword() {
    debugger;
    var chkCPwdflag = false;
    if ($("#CONFIRMPASSWORD").val() == "") {
        $("#divcpass").remove();
        $("#CONFIRMPASSWORD").parent().after("<div id='divcpass' class='error-message'>Please enter Confirm Password.</div>");
        chkCPwdflag = true;
    }
    else {
        $("#divcpass").remove(); // remove it
    }
    if (chkCPwdflag == true) {
        return;
    }
}

function ValidateUserType() {
    debugger;
    var chkUserTypeflag = false;
    if (document.getElementById("USERTYPE").selectedIndex == 0) {
        $("#divchoose").remove();
        $("#USERTYPE").parent().after("<div id='divchoose' class='error-message'>Please enter Type.</div>");
        chkUserTypeflag = true;
    }
    else {
        $("#divchoose").remove(); // remove it
    }
    if (chkUserTypeflag == true) {
        return;
    }
}

function ValidateCheckTerm() {
    debugger;
    var chkChkflag = false;
    if (document.getElementById("CHKTERM").checked == false) {
        $("#divchk").remove();
        $("#CHKTERM").parent().after("<div id='divchk' class='error-message'>Please select term and condition.</div>");
        chkChkflag = true;
    }

    else {
        $("#divchk").remove(); // remove it
    }
    if (chkChkflag == true) {
        return;
    }
}

function CreateUser() {
    debugger;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var validPassRegex = /^(?=.*?[A-Z](?=.*\d)(?=.*?[a-z])(?=.*?[#?!@$%^&*-])).{8,}$/;

    var chkflag = false;
    $("#divfirstname").remove();
    $("#divlastname").remove()
    $("#divemail").remove();
    $("#divContent").remove();
    $("#divpass").remove();
    $("#divcpass").remove();
    $("#divConfirmEmail").remove();
    $("#divchoose").remove();


    if ($("#FIRSTNAME").val() == "") {
        $("#divfirstname").remove();
        $("#FIRSTNAME").after("<div id='divfirstname' class='error-message'>Please enter First Name.</div>");
        chkflag = true;
    }
    else {
        $("#divfirstname").remove(); // remove it
    }
    if ($("#LASTNAME").val() == "") {
        $("#divlastname").remove();
        $("#LASTNAME").after("<div id='divlastname' class='error-message'>Please enter Last Name.</div>");
        chkflag = true;
    }
    else {
        $("#divlastname").remove(); // remove it
    }
    if ($("#EMAILID").val() == "") {
        $("#divemail").remove(); // remove it
        $("#EMAILID").after("<div id='divemail' class='error-message'>Please enter Email.</div>");
        chkflag = true;
    }
    else {
        $("#divemail").remove();
        if (!($("#EMAILID").val().match(validRegex))) {
            $("#EMAILID").after("<div id='divemail' class='error-message'>Please enter valid Email.</div>");
            chkflag = true;
        }
        else {
            $("#divemail").remove(); // remove it
        }
    }
    if ($("#CONFIRMEMAIL").val() == "") {
        $("#divConfirmEmail").remove();
        $("#CONFIRMEMAIL").after("<div id='divConfirmEmail' class='error-message'>Please enter Confirm Email</div>");
        chkflag = true;
    }
    else {


        $("#divConfirmEmail").remove(); // remove it
    }

    if ($("#PASSWORD").val() == "") {
        $("#divpass").remove();
        $("#PASSWORD").after("<div id='divpass' class='error-message'>Please enter Password.</div>");
        chkflag = true;
    }
    else {
        $("#divpass").remove();
        if (!($("#PASSWORD").val().match(validPassRegex))) {
            $("#PASSWORD").after("<div id='divpass' class='error-message'>Please enter valid Password. (Atleast 8 characters with 1 Uppercase, 1 Number and 1 Special)</div>");
            chkflag = true;
        }
        else {
            $("#divpass").remove(); // remove it
        }
    }
    if ($("#CONFIRMPASSWORD").val() == "") {
        $("#divcpass").remove();
        $("#CONFIRMPASSWORD").after("<div id='divcpass' class='error-message'>Please enter Confirm Password.</div>");
        chkflag = true;
    }
    else {
        $("#divcpass").remove(); // remove it
    }
    if (document.getElementById("USERTYPE").selectedIndex == 0) {
        $("#divchoose").remove();
        $("#USERTYPE").after("<div id='divchoose' class='error-message'>Please enter Type.</div>");
        chkflag = true;
    }
    else {
        $("#divchoose").remove(); // remove it
    }
    if (document.getElementById("CHKTERM").checked == false) {
        $("#divchk").remove();
        $("#CHKTERM").parent().after("<div id='divchk' class='error-message'>Please select term and condition.</div>");
        chkflag = true;
    }

    else {
        $("#divchk").remove(); // remove it
    }

    if (chkflag == true) {
        //alert("testme");
        return false;
    }
    FName = $("#FIRSTNAME").val();
    LName = $('#LASTNAME').val();
    Email = $('#EMAILID').val();
    Password = $('#PASSWORD').val();
    UserType = $('#USERTYPE').val();
    var data = {
        FIRSTNAME: FName,
        LASTNAME: LName,
        EMAILID: Email,
        PASSWORD: Password,
        USERTYPE: UserType,
    };

    var Controller = "User";
    var Action = "Index";
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
            if (response != null) { 
               // debugger;
                var arrayValues = Object.values(response);  
                if (arrayValues[0] == "fail") {
                    debugger;
                    alert(arrayValues[1]);
                    window.location.href = "/User/Index";
                    swal("Success!", "Email Already Exists", "error");
                    //swal("Error", "Email already exist.", "error");                          
                }
                else {
                    window.location.href = "/User/Registration";
                }          
            } else {
                //debugger;
                alert("Error Occured. Please contact Administrator.");
                window.location.href = "/User/Index";
                //alert("Something went wrong");
            }
        }

        //success: function (response) {
        //    debugger;
        //    if (response != null) {
        //        alert("A1");
        //        //ResetFields();
        //        window.location.href = "/User/Registration";
        //    } else {
        //        debugger;
        //        alert("A2");
        //        window.location.href = "/User/Registration";
        //        //alert("Something went wrong");
        //        //ResetFields();
        //    }
        //},
        //failure: function (response) {
        //    debugger;
        //    alert("B");
        //    swal("Error", "Forget Password Failure.", "error");
        //    window.location.href = "/User/Index";
        //    //alert(response.responseText);
        //    //ResetFields();

        //},
        //error: function (response) {
        //    debugger;
        //    alert(response);
        //    swal("Error", "Forget Password Failure.", "error");
        //    window.location.href = "/User/Index";
        //    //alert(response.responseText);
        //    ResetFields();
        //}
    });


}

function ResetFirstRegistration() {
    debugger;
    document.getElementById("btnSubmit").disabled = false;
    $("#FIRSTNAME").val('');
    $('#LASTNAME').val('');
    $('#EMAILID').val('');
    $('#CONFIRMEMAIL').val('');
    $('#PASSWORD').val('');
    $('#CONFIRMPASSWORD').val('');
    $("#divfirstname").remove();
    $("#divlastname").remove();
    $("#divemail").remove();
    $("#divConfirmEmail").remove();
    $("#divpass").remove();
    $("#divcpass").remove();
    $("#divchoose").remove();
    $("#divchk").remove();
    $("#showerrorEmail").remove();
    $("#showerror").remove();
    document.getElementById("USERTYPE").selectedIndex = "0";
    document.getElementById("CHKTERM").checked = false;
}
