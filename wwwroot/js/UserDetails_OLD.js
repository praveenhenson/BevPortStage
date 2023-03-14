function ValidateMobile() {
    var BUSINESSPHONE = document.getElementById('BUSINESSPHONE').value;
    if (BUSINESSPHONE != "") {
        $('.phone').inputmask('(999)-999-9999');
        $('#validmobile').remove();
        return true;
    }
    else {
        $('#validmobile').html('Invalid Mobile Number');
        $('#validmobile').css('color', 'red');
        return false;
    }
}

function ValidateEIN() {
    debugger;
    var EIN = document.getElementById('EIN').value;
    if (EIN != "") {
        $('.ein').inputmask('999-999999999');
        $("#divein").remove();
        $('#validein').remove();
        return true;
    }
    else {
        $('#validein').html('Invalid EIN Number');
        $('#validein').css('color', 'red');
        return false;
    }
}

function ValidateZip() {
    var Zipcode = document.getElementById('ZipCode').value;
    if (Zipcode != "") {
        $('.zip').inputmask('99999');
        $('#validzip').html('');
        return true;

    }

    else {
        $('#validzip').html('Invalid Zip Code');
        $('#validzip').css('color', 'red');
        return false;
    }
}

function ValidatePhone() {
    var OptionalPhone = document.getElementById('OPTIONALPHONE').value;
    if (OptionalPhone != "") {
        $('.optionalphone').inputmask('(999)-999-9999');
        $('#validoptionalmobile').remove();
        return true;
    }
    else {
        $('#validoptionalmobile').html('Invalid Mobile Number');
        $('#validoptionalmobile').css('color', 'red');
        return false;
    }
}

function ValidateExpiryDate() {
    debugger;
    var ExpiryDate = document.getElementById('ExpiryDate').value;
    if (ExpiryDate != "") {
        $('.expdate').inputmask('12-23');
        return true;
    }
    else {
        $('#validexpdate').html('Invalid Date');
        $('#validexpdate').css('color', 'red');
        return false;
    }
}


function finalregistaton() {
    debugger;
    var chkflag = false;

    $("#divbusiname").remove();
    $("#divein").remove()
    $("#divstate").remove();
    $("#divopt").remove();
    $("#divmob").remove();
    $("#divst").remove();
    $("#divtaxno").remove();
    $("#divzip").remove();


    if ($("#BUSINESSNAME").val() == "") {
        $("#divbusiname").remove();
        $("#BUSINESSNAME").parent().after("<div id='divbusiname' style='color:red;margin-bottom: 5px;size:1px'>Please enter Business Name.</div>");
        chkflag = true;
    }
    else {
        $("#divbusiname").remove(); // remove it
    }


    if ($("#EIN").val() == "") {
        $("#divein").remove();
        $("#EIN").parent().after("<div id='divein' style='color:red;margin-bottom: 5px;'>Please enter Employer Identification Number</div>");
        chkflag = true;
    }
    else {
        $("#divein").remove(); // remove it
    }


    if ($("#STREETADD").val() == "") {
        $("#divstreet2").remove();
        $("#STREETADD").parent().after("<div id='divstreet2' style='color:red;margin-bottom: 5px;'>Please enter Address</div>");
        chkflag = true;
    }
    else {
        $("#divstreet2").remove(); // remove it
    }



    if ($("#STREETADD2").val() == "") {
        $("#divst").remove();
        $("#STREETADD2").parent().after("<div id='divst' style='color:red;margin-bottom: 5px;'>Please enter Address</div>");
        chkflag = true;
    }
    else {
        $("#divst").remove(); // remove it
    }



    if ($("#STATETAXNO").val() == "") {
        $("#divtaxno").remove();
        $("#STATETAXNO").parent().after("<div id='divtaxno' style='color:red;margin-bottom:5px;'>Please enter State Tax Number</div>");
        chkflag = true;
    }
    else {
        $("#divtaxno").remove(); // remove it
    }



    if ($("#ZipCode").val() == "") {
        $("#divzip").remove();
        $("#ZipCode").parent().after("<div id='divzip' style='color:red;margin-bottom:5px;'>Please enter ZipCode</div>");
        chkflag = true;
    }
    else {
        $("#divzip").remove(); // remove it
    }



    if ($("#OPTIONALPHONE").val() == "") {
        $("#divopt").remove();
        $("#OPTIONALPHONE").parent().after("<div id='divopt' style='color:red;margin-bottom:5px;'>Please enter Optional Number.</div>");
        chkflag = true;
    }
    else {
        $("#divopt").remove(); // remove it
    }


    if ($("#BUSINESSPHONE").val() == "") {
        $("#divmob").remove();
        $("#BUSINESSPHONE").parent().after("<div id='divmob' style='color:red;margin-bottom:5px;'>Please enter Business Number</div>");
        chkflag = true;
    }
    else {
        $("#divmob").remove(); // remove it
    }

    if (chkflag == true) {
        return;
    }

    
    BName = $("#BUSINESSNAME").val();
    EIN = $('#EIN').val();
    StateTax = $('#STATETAXNO').val();
    StreetAdd = $('#STREETADD').val();
    StreetAdd2 = $('#STREETADD2').val();
    BusinessPhone = $('#BUSINESSPHONE').val();
    OptionalPhone = $('#OPTIONALPHONE').val();
    MembershipPlan = $('#MEMBERSHIPPLAN').val();
    var data = {
        BUSINESSNAME: BName,
        EIN: EIN,
        STATETAXNO: StateTax,
        STREETADD: StreetAdd,
        STREETADD2: StreetAdd2,
        BUSINESSPHONE: BusinessPhone,
        OPTIONALPHONE: OptionalPhone,
        MEMBERSHIPPLAN: MembershipPlan,
    };

    debugger;
    var Controller = "User";
    var Action = "Registration";
    var URL = "/" + Controller + "/" + Action;
    //ResetFields();
    $.ajax({
        type: "POST",
        url: URL,
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (response) {
            debugger;
            alert("Registration Successful.");
            if (response != null) {
                //ResetFields();
                //window.location.href = "/User/Registration";
            } else {
                alert("Registration Successful.");
                //window.location.href = "/User/Registration";
                //alert("Something went wrong");
                //ResetFields();
            }
        },
        failure: function (response) {
            alert("Registration Successful.");
            //window.location.href = "/User/Registration";
            //alert(response.responseText);
            //ResetFields();
        },
        error: function (response) {
            alert("Registration Successful.");
            //window.location.href = "/User/Registration";
            //alert(response.responseText);
            // ResetFields();
        }
    });




}





function RemoveMessageBName() {
    $("#divbusiname").remove();
}
function RemoveMessageEin() {
    $("#divein").remove();
}
function RemoveMessageSt() {
    $("#divstreet2").remove();
}
function RemoveMessageSt2() {
    $("#divst").remove();
}
function RemoveMessagetaxnno() {
    $("#divtaxno").remove();
}
function RemoveMessageZip() {
    $("#divzip").remove();
}

function RemoveMessageOphone() {
    $("#divopt").remove();
}
function RemoveMessageBphone() {
    $("#divmob").remove();
}
function RemoveMessagetaxnno() {
    $("#divtaxno").remove();
}


function ResetSecondRegistration() {
    debugger;
    $("#BUSINESSNAME").val('');
    $('#EIN').val('');
    $('#STATETAXNO').val('');
    $('#STREETADD').val('');
    $('#STREETADD2').val('');
    $('#ZipCode').val('');
    document.getElementById("State").selectedIndex = "0";
    $('#CITY').val('');
    $('#cc-number').val('');
    $('#cc-cvc').val('');
    $('#AccountHolder').val('');
    $('#BUSINESSPHONE').val('');
    $('#OPTIONALPHONE').val('');
    document.getElementById("MEMBERSHIPPLAN").selectedIndex = "0";
    document.getElementById("chkAgreeId").checked = false;

    $("#validmobile").remove();
    $("#divein").remove();
    $("#validein").remove();
    $("#validzip").remove();
    $("#validoptionalmobile").remove();
    $("#validexpdate").remove();
    $("#divbusiname").remove();
    $("#divein").remove()
    $("#divstate").remove();
    $("#divopt").remove();
    $("#divmob").remove();
    $("#divst").remove();
    $("#divtaxno").remove();
    $("#divzip").remove();
    $("#divstreet2").remove();
}