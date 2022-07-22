$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/users/add";
    })

    $("#deleBtn").click(function () {
        var checkcount = ($(":checkbox:checked").length);

        if (checkcount != 1) {
            alert("please select on checkbox");
            return;
        }
        var result = confirm("Are you sure want to delete user");

        if (!result) {
            return;
        }

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function () {
            return this.id;
        });
        console.log('checked id', checkedIds[0]);

        $.ajax({
            url: `/api/users/${checkedIds[0]}`,
            type: 'DELETE',
            success: function(){
                alert(' Deleted sucessfully')
                location.reload();
            },
            error: function(){
                alert('unable to Delete');
            }
        })
    })

    $("#editBtn").click(function () {
        var checkcount = $(":checkbox:checked").length;

        if (checkcount != 1) {
            alert("please select on checkbox");
            return;
        }

        // location.href = '/users/edit';

        var all, checked;
        all = $("input:checkbox");
        checked = all.filter(":checked");

        var checkedIds = checked.map(function () {
            return this.id;
        });

        location.href = `/users/edit/${checkedIds[0]}`
    })

    $('#refresh').click(function(){
        alert('i-------');
        // location.href = '/users';
    })

    $('#search').click(function(){
        var name = $('name').val();

        if(!name){
            return;
        }
        location.href = `/users?name=${name}`;
    })
})