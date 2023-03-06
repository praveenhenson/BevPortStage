



function ValidateMobile() {
    var BUSINESSPHONE = document.getElementById('BUSINESSPHONE').value;
    if (BUSINESSPHONE != "") {
        $('.phone').inputmask('(999)-999-9999');
        return true;
    }
    else {
        $('#validmobile').html('Invalid Mobile Number');
        $('#validmobile').css('color', 'red');
        return false;
    }
}

function ValidateEIN() {
    var EIN = document.getElementById('EIN').value;
    if (EIN != "") {
        $('.ein').inputmask('99-9999999');
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
        $('.expdate').inputmask('12/23');
        return true;
    }
    else {
        $('#validexpdate').html('Invalid Date');
        $('#validexpdate').css('color', 'red');
        return false;
    }
}
