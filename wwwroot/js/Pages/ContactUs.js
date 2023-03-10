﻿function ValidateFName() {
    debugger;
    var chkFnameflag = false;
    if ($("#FIRSTNAME").val() == "") {
        $("#divfirstname").remove();
        $("#FIRSTNAME").parent().after("<div id='divfirstname' style='color:red;margin-bottom: 20px;'>Please enter First Name.</div>");
        chkFnameflag = true;
    }
    else {
        $("#divfirstname").remove();
    }

    if (chkFnameflag == true) {
        return;
    }
}

function ValidateLName() {
    debugger;
    var chkLnameflag = false;
    if ($("#LASTNAME").val() == "") {
        $("#divlastname").remove();
        $("#LASTNAME").parent().after("<div id='divlastname' style='color:red;margin-bottom: 20px;'>Please enter Last Name.</div>");
        chkLnameflag = true;
    }
    else {
        $("#divlastname").remove();
    }
    if (chkLnameflag == true) {
        return;
    }
}

function ValidateContent() {
    debugger;
    var chkVCflag = false;
    if ($("#Content").val() == "") {
        $("#divContent").remove();
        $("#Content").parent().after("<div id='divContent' style='color:red;margin-bottom: 20px;'>Please enter Content.</div>");
        chkflag = true;
    }
    else {
        $("#divContent").remove();
    }
    if (chkVCflag == true) {
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
            $("#divemail").remove(); // remove it
        }
    }

    if (chkEmailflag == true) {
        return;
    }
}

function SaveContactUs() { //new
    var FName, LName, Email, Content;
    //var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var chkflag = false;
    $("#divfirstname").remove();
    $("#divlastname").remove()
    $("#divemail").remove();
    $("#divContent").remove();
    if ($("#FIRSTNAME").val() == "") {
        $("#divfirstname").remove();
        $("#FIRSTNAME").parent().after("<div id='divfirstname' style='color:red;margin-bottom: 20px;'>Please enter First Name.</div>");
        chkflag = true;
    }
    else {
        $("#divfirstname").remove();
    }
    if ($("#LASTNAME").val() == "") {
        $("#divlastname").remove();
        $("#LASTNAME").parent().after("<div id='divlastname' style='color:red;margin-bottom: 20px;'>Please enter Last Name.</div>");
        chkflag = true;
    }
    else {
        $("#divlastname").remove();
    }
    if ($("#EMAILID").val() == "") {
        $("#divemail").remove();
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
            $("#divemail").remove();
        }
    }
    if ($("#Content").val() == "") {
        $("#divContent").remove();
        $("#Content").parent().after("<div id='divContent' style='color:red;margin-bottom: 20px;'>Please enter Content.</div>");
        chkflag = true;
    }
    else {
        $("#divContent").remove();
    }
    if (chkflag == true) {
        return;
    }

    FName = $("#FIRSTNAME").val();
    LName = $('#LASTNAME').val();
    Email = $('#EMAILID').val();
    Content = $('#Content').val();
    var data = {
        FIRSTNAME: FName,
        LASTNAME: LName,
        EMAILID: Email,
        Content: Content,
    };
    var Controller = "Home";
    var Action = "ContactUs";
    var URL = "/" + Controller + "/" + Action;
    debugger;
    //ResetFields();
    $.ajax({

        type: "POST",
        url: URL,
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (response) {
            debugger;
            if (response != null) {
                ResetFields();
            } else {
                //alert("Something went wrong");
                ResetFields();
            }
        },
        failure: function (response) {
            //alert(response.responseText);
            ResetFields();
        },
        error: function (response) {
            //alert(response.responseText);
            ResetFields();
        }
    });
}

function ResetFields() {
    debugger;
    $("#FIRSTNAME").val('');
    $('#LASTNAME').val('');
    $('#EMAILID').val('');
    $('#Content').val('');
}
