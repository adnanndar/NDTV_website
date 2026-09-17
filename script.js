console.log("Form Details:\n ");
const form = document.querySelector(".forum");
form.addEventListener("submit",function(event) { event.preventDefault();
const inputs = document.querySelectorAll(".inn");
inputs.forEach(function(input){
    
    console.log(input.id + ":" , input.value)
});
});

