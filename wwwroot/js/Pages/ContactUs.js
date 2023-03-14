function ValidateFName() {
    debugger;
    var chkFnameflag = false;
    if ($("#FIRSTNAME").val() == "") {
        $("#divfirstname").remove();
        $("#FIRSTNAME").after("<div id='divfirstname' class='error-message'>Please enter First Name.</div>");
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
        $("#LASTNAME").after("<div id='divlastname' class='error-message'>Please enter Last Name.</div>");
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
        $("#Content").after("<div id='divContent' class='error-message'>Please enter Content.</div>");
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
        $("#EMAILID").after("<div id='divemail' class='error-message'>Please enter Email.</div>");
        chkEmailflag = true;
    }
    else {
        $("#divemail").remove();
        if (!($("#EMAILID").val().match(validRegex))) {
            $("#EMAILID").after("<div id='divemail' class='error-message'>Please enter valid Email.</div>");
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

function SaveContactUs() {
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
        $("#FIRSTNAME").after("<div id='divfirstname' class='error-message'>Please enter First Name.</div>");
        chkflag = true;
    }
    else {
        $("#divfirstname").remove();
    }
    if ($("#LASTNAME").val() == "") {
        $("#divlastname").remove();
        $("#LASTNAME").after("<div id='divlastname' class='error-message'>Please enter Last Name.</div>");
        chkflag = true;
    }
    else {
        $("#divlastname").remove();
    }
    if ($("#EMAILID").val() == "") {
        $("#divemail").remove();
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
            $("#divemail").remove();
        }
    }
    if ($("#Content").val() == "") {
        $("#divContent").remove();
        $("#Content").after("<div id='divContent' class='error-message'>Please enter Content.</div>");
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
    $('#cover-spin').show(0);
    $.ajax({
        type: "POST",
        url: URL,
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (response) {
            debugger;
            if (response != null) {
                debugger;
                var arrayValues = Object.values(response);
                if (arrayValues[0] == "fail") {
                    swal("Error", arrayValues[1], "error");
                    $('#cover-spin').hide();
                    ResetFields();
                }
                else {
                    swal("Success!", arrayValues[1], "success");     
                    $('#cover-spin').hide();

                }
            } else {
                swal("Error", 'Some Error', "error");
                $('#cover-spin').hide();


            }
        }
    });


}

function ResetFields() {
    //debugger;
    $("#FIRSTNAME").val('');
    $('#LASTNAME').val('');
    $('#EMAILID').val('');
    $('#Content').val('');
    $("#divfirstname").remove();
    $("#divlastname").remove()
    $("#divemail").remove();
    $("#divContent").remove();
}