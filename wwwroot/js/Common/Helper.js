var ajaxPOST = function (url, data, callback) {
    //var token = $('[name=__RequestVerificationToken]').val();
    //var headers = {};

    $.ajax({
        type: "POST",
        url: $Url.resolve(url),
        dataType: 'html',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        data: JSON.stringify(data),
        success: function (data) {
            if (typeof callback == 'function') {
                callback(data);
            }
        }, error: function (xhr, status, code, message, r) {
            swal("Error", "Error occurred.", "error");
        }
    });
}
