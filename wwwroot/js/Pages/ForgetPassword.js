function ValidateEmail() {
    //debugger;
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
function SaveStudent() {
    const data = {
        FIRSTNAME: "HIMANSHU",
        LASTNAME: "MISHRA",
        EMAILID: "himanshu@yopmai.com",
        USERTYPE: 1,
        PASSWORD: true
    };
    $.ajax({
        url: '/User/ForgetPassword',
        type: 'POST',
        type: "post",
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        success:
            function (result, status, xhr) { /*hooray!*/ },
        error:
            function (xhr, status, error) { /*houston, we have a problem!*/ }
    });
}

//FName = $("#FIRSTNAME").val();
    //LName = $('#LASTNAME').val();
    //Email = $('#EMAILID').val();
    //Content = $('#Content').val();
    //var data = {
    //    FIRSTNAME: FName,
    //    LASTNAME: LName,
    //    EMAILID: Email,
    //    Content: Content,
    //};

function ForgetPassword() {
    debugger;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    var chkflag = false;
    $("#divemail").remove();
    document.getElementById("lblMessage").value = "";


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
    if (chkflag == true) {
        //alert("testme");
        return false;
    }
   var Email = $('#EMAILID').val();
    const data = {
        EMAILID: Email,
       };

    //debugger;
    var Controller = "User";
    var Action = "ForgetPassword";
    var URL = "/" + Controller + "/" + Action;
    //ResetFields();
    $.ajax({
        type: "POST",
        url: URL,
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (response) {
            //debugger;
            alert("Forget Password Successful.");
            if (response != null) {
                //ClearForgetPassword();
                window.location.href = "/User/ForgetPassword";
            } else {
                alert("Forget Password Successful.");
                window.location.href = "/User/ForgetPassword";
                //alert("Something went wrong");
                //ClearForgetPassword();
            }
        },
        failure: function (response) {
            alert("Forget Password Failure.");
            window.location.href = "/User/ForgetPassword";
            //alert(response.responseText);
            //ClearForgetPassword();
        },
        error: function (response) {
            debugger;
            alert("Forget Password Error.");
            window.location.href = "/User/ForgetPassword";
            //alert(response.responseText);
            //ClearForgetPassword();
        }
    });


}

function ClearForgetPassword() {
   // debugger;
    document.getElementById("btnSubmit").disabled = false;
    $('#EMAILID').val('');
    $("#divemail").remove();
    document.getElementById("lblMessage").value = "";
}