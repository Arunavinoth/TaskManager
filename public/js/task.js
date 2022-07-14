$(document).ready(function () {
    $("#addBtn").click(function () {
        location.href = "/tasks/add";
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

        alert("task deleted sucessfully");
    })

    $("#editBtn").click(function () {
        var checkcount = ($(":checkbox:checked").length);

        if (checkcount != 1) {
            alert("please select on checkbox");
            return;
        }
        location.href = '/tasks/add';
    })
})