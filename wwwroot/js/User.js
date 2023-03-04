
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
