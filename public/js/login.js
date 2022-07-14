$(document).ready(function () {
    var TMusername = localStorage.getItem("TMuserName");
    var TMpassword = localStorage.getItem("TMpassword");
    $("#userName").val(TMusername);
    $("#password").val(TMpassword);

    $("#showPassword").click(function () {
        var passInput = $("#passInput");

        if (passInput.attr("type") === "password") {
            passInput.attr("type", "text");
        }
        else {
            passInput.attr("type", "password");
        }
    })

    $("#rembrMe").click(function () {
        var userName = $("#userName").val();
        var password = $("#passInput").val();
        localStorage.setItem("TMusername", userName)
        localStorage.setItem("TMpassword", password)
    })
})