$(document).ready(function () {
   $('#backBtn').click(function () {
      location.href = '/users';
   })

   $('#userForm').submit(function (e) {
      e.preventDefault();
      var name = $('name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var userId = $('#userId').val();

      if (!name || email || !password) {
         alert('please enter ');
         return;
      }

      var userObj = {
         name,
         email,
         password
      }

      var url = '/api/users';
      var type = 'POST';
      var msg = 'user saved sucessfully';

      if(userId) {
         url = `/api/users/${userId}`;
         type = 'PUT';
         msg = 'user updated sucessfully';
      }

      $.ajax({
         url: url,
         type:type,
         data: userObj,
            success: function () {
               alert(msg)
               location.href = '/users';
            },
            error: function () {
               alert('unable to register');
            }
      })
   })
})