$(document).ready(function () {
    $('form').submit(function (event) {
        //reset errors
        $('#name-group>input').removeClass('has-error');
        $('#dob-group>input').removeClass('has-error');
        $('#email-group>input').removeClass('has-error');
        $('#country-group>input').removeClass('has-error');

        // get form data
        var formData = {
            'name': $('input[name=name]').val(),
            'email': $('input[name=email]').val(),
            'dob': $('input[name=dob]').val(),
            'country': $('input[name=country]').val()
        };

        // process the form
        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: formData,
            dataType: 'json',
            encode: true
        })
        
                // done promise callback
                .done(function (data) {
                    // errors and validation messages
                    if (!data.success) {
                        if (data.errors.name) {
                            $('#name-group>input').addClass('has-error');
                        }

                        if (data.errors.dob) {
                            $('#dob-group>input').addClass('has-error');
                        }

                        if (data.errors.email) {
                            $('#email-group>input').addClass('has-error');
                        }
                        if (data.errors.country) {
                            $('#country-group>input').addClass('has-error');
                        }
                    } else {
                        // Show the success message!
                        $('form').html('<div class="alert alert-success">' + data.message + '</div>');
                    }
                })
                // fail promise callback
                .fail(function (data) {
                });
        // stop the form refreshing the page
        event.preventDefault();
    });

});
