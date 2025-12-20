$(function() {
    $("#formValidate").on("submit", function(event){
        event.preventDefault();
        let fname = $("#fname").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        if (fname == "") {
            $("#fnameerror").text("Full name is required");
        }else{
            $("#fnameerror").text("");
        }
        if (email == "") {
            $("#emailerror").text("Email is required");
        }else{
            $("#emailerror").text("");
        }
        if (phone == "") {
            $("#phoneerror").text("Phone number is required");
        }else{
            $("#phoneerror").text("");
        }
        if (fname !== "" && email !== "" && phone !=="")
            alert("thank you for submmitting")
    })
})