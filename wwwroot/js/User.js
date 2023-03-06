

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

function CreateUser() {
    debugger;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    /* var validPassRegex = /^(?=.*?[A-Z](?=.*\d)(?=.*?[#?!@$%^&*-])).{8,}$/;*/
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
        $("#FIRSTNAME").parent().after("<div id='divfirstname' style='color:red;margin-bottom: 20px;'>Please enter First Name.</div>");
        chkflag = true;
    }
    else {
        $("#divfirstname").remove(); // remove it
    }
    if ($("#LASTNAME").val() == "") {
        $("#divlastname").remove();
        $("#LASTNAME").parent().after("<div id='divlastname' style='color:red;margin-bottom: 20px;'>Please enter Last Name.</div>");
        chkflag = true;
    }
    else {
        $("#divlastname").remove(); // remove it
    }
    if ($("#EMAILID").val() == "") {
        $("#divemail").remove(); // remove it
        $("#EMAILID").parent().after("<div id='divemail' style='color:red;margin-bottom: 20px;'>Please enter Email.</div>");
        chkflag = true;
    }
    else {
        $("#divemail").remove();
        if (!($("#EMAILID").val().match(validRegex))) {
            $("#EMAILID").parent().after("<div id='divemail' style='color:red;margin-bottom: 20px;'>Please enter valid Email.</div>");
           chkflag = true;
        }
        else {
            $("#divemail").remove(); // remove it
        }
    }
    if ($("#CONFIRMEMAIL").val() == "") {
        $("#divConfirmEmail").remove();
        $("#CONFIRMEMAIL").parent().after("<div id='divConfirmEmail' style='color:red;margin-bottom: 20px;'>Please enter Confirm email</div>");
        chkflag = true;
    }
    else {


        $("#divConfirmEmail").remove(); // remove it
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
    //else {
    //    $("#divpass").remove(); // remove it
    //}
    if ($("#CONFIRMPASSWORD").val() == "") {
        $("#divcpass").remove();
        $("#CONFIRMPASSWORD").parent().after("<div id='divcpass' style='color:red;margin-bottom: 20px;'>Please enter Confirm Password.</div>");
        chkflag = true;
    }
    else {
        $("#divcpass").remove(); // remove it
    }
    if ($("#USERTYPE").val() == "") {
        $("#divchoose").remove();
        $("#USERTYPE").parent().after("<div id='divchoose' style='color:red;margin-bottom: 20px;'>Please enter Type.</div>");
        chkflag = true;
    }
    else {
        $("#divchoose").remove(); // remove it
    }
    

    if (chkflag == true) {
        return;
    }

    //NEW
    FName = $("#FIRSTNAME").val();
    LName = $('#LASTNAME').val();
    Email = $('#EMAILID').val();
    Password = $('#PASSWORD').val();
    UserType = $('#USERTYPE').val();
    var data = {
        FIRSTNAME: FName,
        LASTNAME: LName,
        EMAILID: Email,
        PASSWORD:Password,
        USERTYPE: UserType,
    };
    debugger;
    var Controller = "User";
    var Action = "Index";
    var URL = "/" + Controller + "/" + Action;
    //ResetFields();
    $.ajax({
        type: "POST",
        url: URL,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        data: JSON.stringify(data),
        success: function (response) {
            debugger;
            if (response != null) {
                //ResetFields();
            } else {
                //alert("Something went wrong");
                ResetFields();
            }
        },
        failure: function (response) {
            //alert(response.responseText);
            //ResetFields();
        },
        error: function (response) {
            //alert(response.responseText);
           // ResetFields();
        }
    });


}
