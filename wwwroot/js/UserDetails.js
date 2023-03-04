
function validation() {
    var BUSINESSPHONE = document.getElementById('BUSINESSPHONE').value;

    //var pattern =/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;               //american validation
    var pattern = /^[0-9]{10}$/;                              //10 digits validation
    if (pattern.test(BUSINESSPHONE)) {
        $('#validmobile').html('');
        return true;
    }
    else {
        $('#validmobile').html('**Invalid Mobile Number');
        $('#validmobile').css('color', 'red');
        return false;
    }
}