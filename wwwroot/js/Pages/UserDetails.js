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

function ValidateCountry() {
    //debugger;
    var chkCountryflag = false;
    if (document.getElementById("Country").selectedIndex == 0) {
        $("#divCountry").remove();
        $("#Country").parent().after("<div id='divCountry' class='error-message'>Please select Country</div>");
        chkCountryflag = true;
    }
    else {
        $("#divCountry").remove(); // remove it
    }
    if (chkCountryflag == true) {
        return;
    }
}

function ValidateState() {
    //debugger;
    var chkStateflag = false;
    if (document.getElementById("State").selectedIndex == 0) {
        $("#divstate").remove();
        $("#State").parent().after("<div id='divstate' class='error-message'>Please select State.</div>");
        chkStateflag = true;
    }
    else {
        $("#divstate").remove(); // remove it
    }
    if (chkStateflag == true) {
        return;
    }
}

function ValidateCity() {
    //debugger;
    var chkCityflag = false;
    if ($("#CITY").val() == "") {
        $("#divcity").remove();
        $("#CITY").parent().after("<div id='divcity' class='error-message'>Please enter City.</div>");
        chkCityflag = true;
    }
    else {
        $("#divcity").remove(); // remove it
    }
    if (chkCityflag == true) {
        return;
    }
}

function ValidateCCnumber() {
    //debugger;
    var chkCCflag = false;
    if ($("#cc-number").val() == "") {
        $("#divccnumber").remove();
        $("#cc-number").parent().after("<div id='divccnumber' class='error-message'>Please enter Credit/Debit Card Number.</div>");
        chkCCflag = true;
    }
    else {
        $("#divccnumber").remove(); // remove it
    }
    if (chkCCflag == true) {
        return;
    }
}

function ValidateCCcvc() {
    //debugger;
    var chkCCcvcflag = false;
    if ($("#cc-number").val() == "") {
        $("#divcccvc").remove();
        $("#cc-number").parent().after("<div id='divcccvc' class='error-message'>Please enter CVV/CVC.</div>");
        chkCCcvcflag = true;
    }
    else {
        $("#divcccvc").remove(); // remove it
    }
    if (chkCCcvcflag == true) {
        return;
    }
}

function ValidateHolderNm() {
    //debugger;
    var chkHolderNmflag = false;
    if ($("#AccountHolder").val() == "") {
        $("#divholdernm").remove();
        $("#AccountHolder").parent().after("<div id='divholdernm' class='error-message'>Please enter Account Holder's Name.</div>");
        chkHolderNmflag = true;
    }
    else {
        $("#divholdernm").remove(); // remove it
    }
    if (chkHolderNmflag == true) {
        return;
    }
}

function ValidateCreditDebit() {
    //debugger;
    var chkCreditDebitflag = false;
    if ($("#CITY").val() == "") {
        $("#divcity").remove();
        $("#CITY").parent().after("<div id='divcity' class='error-message'>Please enter City.</div>");
        chkCreditDebitflag = true;
    }
    else {
        $("#divcity").remove(); // remove it
    }
    if (chkCreditDebitflag == true) {
        return;
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

//function ValidateExpiryDate() {
//    //debugger;
//    var ExpiryDate = document.getElementById('ExpiryDate').value;
//    if (ExpiryDate != "") {
//        $('.expdate').inputmask('12-23');
//        return true;
//    }
//    else {
//        $('#validexpdate').html('Invalid Date');
//        $('#validexpdate').css('color', 'red');
//        return false;
//    }
//}

function ValidateExpDt() {
    //debugger;
    var chkExpDtflag = false;
    if ($("#ExpiryDate").val() == "") {
        $("#divexptdt").remove();
        $("#ExpiryDate").parent().after("<div id='divexptdt' class='error-message'>Please enter Expiry Date.</div>");
        chkExpDtflag = true;
    }
    else {
        $("#divexptdt").remove(); // remove it
    }
    if (chkExpDtflag == true) {
        return;
    }
}

function ValidateMemberShipPlan() {
    debugger;
    var chkMemflag = false;
    if (document.getElementById("MEMBERSHIPPLAN").selectedIndex == 0) {
        $("#divmemchoose").remove();
        $("#MEMBERSHIPPLAN").parent().after("<div id='divmemchoose' class='error-message'>Please select membership plan.</div>");
        chkMemflag = true;
    }
    else {
        $("#divmemchoose").remove(); // remove it
    }
    if (chkMemflag == true) {
        return;
    }
}

function ValidateCheckTerm() {
    debugger;
    var chkChkflag = false;
    if (document.getElementById("chkAgreeId").checked == false) {
        $("#divchk").remove();
        $("#chkAgreeId").parent().after("<div id='divchk' class='error-message'>Please select terms and conditions.</div>");
        chkChkflag = true;
    }

    else {
        $("#divchk").remove(); // remove it
    }
    if (chkChkflag == true) {
        return;
    }
}

function finalregistaton() {
    var usertype = $('#usertypeval').val();
    debugger;
    var chkflag = false;

    $("#divbusiname").remove();
    $("#divein").remove()
    $("#divstate").remove();
    $("#divcity").remove();
    $("#divccnumber").remove();
    $("#divcccvc").remove();
    $("#divexptdt").remove();
    $("#divholdernm").remove();
    $("#divopt").remove();
    $("#divmob").remove();
    $("#divst").remove();
    $("#divtaxno").remove();
    $("#divzip").remove();
    $("#divmemchoose").remove();
    $("#divchk").remove();


    if ($("#BUSINESSNAME").val() == "") {
        $("#divbusiname").remove();
        $("#BUSINESSNAME").after("<div id='divbusiname' class='error-message'>Please enter Business Name.</div>");
        chkflag = true;
    }
    else {
        $("#divbusiname").remove(); // remove it
    }


    if ($("#EIN").val() == "") {
        $("#divein").remove();
        $("#EIN").after("<div id='divein' class='error-message'>Please enter Employer Identification Number</div>");
        chkflag = true;
    }
    else {
        $("#divein").remove(); // remove it
    }


    if ($("#STREETADD").val() == "") {
        $("#divstreet2").remove();
        $("#STREETADD").after("<div id='divstreet2' class='error-message'>Please enter Address</div>");
        chkflag = true;
    }
    else {
        $("#divstreet2").remove(); // remove it
    }



    //if ($("#STREETADD2").val() == "") {
    //    $("#divst").remove();
    //    $("#STREETADD2").after("<div id='divst' class='error-message'>Please enter Address</div>");
    //    chkflag = true;
    //}
    //else {
    //    $("#divst").remove(); // remove it
    //}

    //if ($("#STATETAXNO").val() == "") {
    //    $("#divtaxno").remove();
    //    $("#STATETAXNO").after("<div id='divtaxno' class='error-message'>Please enter State Tax Number</div>");
    //    chkflag = true;
    //}
    //else {
    //    $("#divtaxno").remove(); // remove it
    //}

    if ($("#ZipCode").val() == "") {
        $("#divzip").remove();
        $("#ZipCode").after("<div id='divzip' class='error-message'>Please enter ZipCode</div>");
        chkflag = true;
    }
    else {
        $("#divzip").remove(); // remove it
    }
    if (document.getElementById("Country").selectedIndex == 0) {
        $("#divCountry").remove();
        $("#Country").after("<div id='divCountry' class='error-message'>Please select Country</div>");
        chkflag = true;
    }
    else {
        $("#divstate").remove(); // remove it
    }
    if (document.getElementById("State").selectedIndex == 0) {
        $("#divstate").remove();
        $("#State").after("<div id='divstate' class='error-message'>Please select state.</div>");
        chkflag = true;
    }
    else {
        $("#divstate").remove(); // remove it
    }
    if ($("#CITY").val() == "") {
        $("#divcity").remove();
        $("#CITY").after("<div id='divcity' class='error-message'>Please enter City.</div>");
        chkflag = true;
    }
    else {
        $("#divcity").remove(); // remove it
    }
    if (usertype != '2') {


        if ($("#cc-number").val() == "") {
            $("#divccnumber").remove();
            $("#cc-number").after("<div id='divccnumber' class='error-message'>Please enter Credit/Debit Card Number.</div>");
            chkflag = true;
        }
        else {
            $("#divccnumber").remove(); // remove it
        }
        if ($("#cc-cvc").val() == "") {
            $("#divcccvc").remove();
            $("#cc-cvc").after("<div id='divcccvc' class='error-message'>Please enter CVV/CVC.</div>");
            chkflag = true;
        }
        else {
            $("#divcccvc").remove(); // remove it
        }
        if ($("#ExpiryDate").val() == "") {
            $("#divexptdt").remove();
            $("#ExpiryDate").after("<div id='divexptdt' class='error-message'>Please enter Expiry Date.</div>");
            chkflag = true;
        }
        else {
            $("#divexptdt").remove(); // remove it
        }
        if ($("#AccountHolder").val() == "") {
            $("#divholdernm").remove();
            $("#AccountHolder").after("<div id='divholdernm' class='error-message'>Please enter Account Holder's Name.</div>");
            chkflag = true;
        }
        else {
            $("#divholdernm").remove(); // remove it
        }
        if (document.getElementById("MEMBERSHIPPLAN").selectedIndex == 0) {
            $("#divmemchoose").remove();
            $("#MEMBERSHIPPLAN").after("<div id='divmemchoose' class='error-message'>Please select membership plan.</div>");
            chkflag = true;
        }
        else {
            $("#divmemchoose").remove(); // remove it
        }
    }
    //if ($("#OPTIONALPHONE").val() == "") {
    //    $("#divopt").remove();
    //    $("#OPTIONALPHONE").after("<div id='divopt' class='error-message'>Please enter Optional Number.</div>");
    //    chkflag = true;
    //}
    //else {
    //    $("#divopt").remove(); // remove it
    //}

    if ($("#BUSINESSPHONE").val() == "") {
        $("#divmob").remove();
        $("#BUSINESSPHONE").after("<div id='divmob' class='error-message'>Please enter Business Number</div>");
        chkflag = true;
    }
    else {
        $("#divmob").remove(); // remove it
    }
   
    if (document.getElementById("chkAgreeId").checked == false) {
        $("#divchk").remove();
        $("#chkAgreeId").parent().after("<div id='divchk' class='error-message'>Please select terms and conditions.</div>");
        chkflag = true;
    }
    else {
        $("#divchk").remove(); // remove it
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

    var Controller = "User";
    var Action = "CreateUserDetails";
    var URL = "/" + Controller + "/" + Action;
    debugger;
    $('#cover-spin').show(0);
    $.ajax({
        type: "POST",
        url: URL,
        dataType: 'json',
        contentType: "application/x-www-form-urlencoded",
        data: data,
        success: function (response) {
            if (response != null) {
                var arrayValues = Object.values(response);
                if (arrayValues[0] == "fail") { 
                   swal("Error",arrayValues[1], "error");
                    $('#cover-spin').hide();

                    window.location.href = "/User/CreateUserDetails";
                }
                else {
                    swal("Success!", arrayValues[1], "success"); 
                    $('#cover-spin').hide();
                    ResetSecondRegistration();
                   
                    window.location.href = "/User/Login";
                }
            } else {
                $('#cover-spin').hide();
                swal("Error", "Error Occured. Please contact Administrator.", "error");
                window.location.href = "/User/CreateUserDetails";
            }
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
function RemoveMessageCity() {
    $("#divcity").remove();
}
function RemoveMessageCCnumber() {
    $("#divccnumber").remove();
}
function RemoveMessageCCcvc() {
    $("#divcccvc").remove();
}
function RemoveMessageExpDt() {
    $("#divexptdt").remove();
}
function RemoveMessageHoldernm() {
    $("#divholdernm").remove();
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
    document.getElementById("CITY").selectedIndex = "0";
    $('#CITY').val('');
    $('#cc-number').val('');
    $('#cc-cvc').val('');
    $('#cc-cvc').val('');
    $('#ExpiryDate').val('');
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
    $("#divcity").remove();
    $("#divccnumber").remove();
    $("#divcccvc").remove();
    $("#divexptdt").remove();
    $("#divholdernm").remove();
    $("#divopt").remove();
    $("#divmob").remove();
    $("#divst").remove();
    $("#divtaxno").remove();
    $("#divzip").remove();
    $("#divstreet2").remove();
    $("#divmemchoose").remove();
    $("#divchk").remove();
}