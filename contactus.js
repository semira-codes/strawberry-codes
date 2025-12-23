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
            alert("thank you for submitting")
    })
})
    const pupils = document.querySelectorAll(".pupil");

    document.addEventListener("mousemove", (e) => {
      pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const maxMove = 6; 
        pupil.style.transform = `translate(${Math.cos(angle) * maxMove}px, ${Math.sin(angle) * maxMove}px)`;
      });
    });
