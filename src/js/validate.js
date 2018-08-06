const validate = () => {
    let isValid = true;
    let errorMsg = '';

    //Traversing through all the select elements and checking if a value has been selected or not
    $("select").each(function() {
        var element = $(this);
        if (element.val() == "default") {
            isValid = false;
            element.addClass('is-invalid');
            errorMsg = 'These field(s) cannot be empty';
        }
    });

    //Traversing through all the input elements and checking if they're empty
    $("input").each(function() {
        var element = $(this);
        if (element.val() == "") {
            isValid = false;
            element.addClass('is-invalid');
            errorMsg = 'These field(s) cannot be empty';
        }
    });

    if($("#password1").val() != $("#password2").val()) {
        $("#password1").addClass('is-invalid');
        $("#password2").addClass('is-invalid');
        errorMsg = 'Passwords don\'t match';
    } else {
        $("#password1").removeClass('is-invalid');
        $("#password2").removeClass('is-invalid');
    }

    //Show the error alert box if any of the fields are empty/default
    if(isValid) {
        $('#errorMsg').hide();
    } else {
        $('#errorMsg').html(errorMsg);
        $('#errorMsg').show();
    }

    return isValid;
}