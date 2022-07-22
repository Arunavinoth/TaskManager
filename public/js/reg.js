$(document).ready(function () {
    $('#regForm').submit(function(e){
        e.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();

        if(!email || !password){
            alert('Please enter required field');
            return;
        }

        var regObj = {
             email,
             password
        }

        $.ajax({
            url: '/api/admin',
            type: 'POST',
            data: regObj,
            success: function(){
                alert('admin registered sucessfully')
                location.href = '/';
            },
            error: function(){
                alert('unable to register');
            }
        })
    })
})