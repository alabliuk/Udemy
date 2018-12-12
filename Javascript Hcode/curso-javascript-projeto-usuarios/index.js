var fields = document.querySelectorAll("#form-user-create [name]");
var user = {}; 

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