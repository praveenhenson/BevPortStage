
function myfun() {
    var Email = document.getElementById('Email').value;
    var ConfirmEmail = document.getElementById('ConfirmEmail').value;
    if (Email != ConfirmEmail) {
        swal("Failure", "Email Not Matched with Confirm Email", "warning");
        return false;
    }
    var Password = document.getElementById('Password').value;
    var ConfirmPassword = document.getElementById('ConfirmPassword').value;
    if (Password != ConfirmPassword) {
        swal("Failure", "Password Not Matched with Confirm Password", "warning");
        return false;
    }
}

