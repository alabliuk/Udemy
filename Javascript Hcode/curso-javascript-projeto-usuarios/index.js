var fields = document.querySelectorAll("#form-user-create [name]");
var user = {};

// document.querySelectorAll("button").forEach(function () {
//     this.addEventListener("click", function () {
//         console.log("clicou");
//     });
// });

document.getElementById("form-user-create").addEventListener("submit", function (event) {
    event.preventDefault();

    fields.forEach(function (field, index) {

        if (field.name == "gender") {
            if (field.checked) {
                user[field.name] = field.name;
            }
        } else {
            user[field.name] = field.name;
        }
    });

    console.log(user);

});