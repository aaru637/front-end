let form = document.getElementById("form");
function formSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let mobile = document.getElementById("mobile").value;
    let password = document.getElementById("password").value;
    if (name.match("[^a-zA-Z ]+")) {
        document.getElementById("errorname").innerText = "Enter a valid Name";
        document.getElementById("result").innerText = "";
    } else if (username.match("[^a-zA-Z ]+") || username.startsWith("[0-9]+")) {
        document.getElementById("errorusername").innerText = "Enter a valid Username";
        document.getElementById("result").innerText = "";
    }
    else if (password.length < 8 || password.length > 16) {
        document.getElementById("errorpasssword").innerText = "Password must be less than 16 characters and greater than 8 Characters.";
        document.getElementById("result").innerText = "";
    }
    else {
        let nodes = document.querySelectorAll("p");
        for (let i in nodes) {
            nodes[i].innerText = "";
        }
        document.getElementById("result").innerHTML = "<h2>Registered Successfully</h2><div class = 'innerResult'><p>" + name + "</p><p>" + email + "</p><p>" + username + "</p><p>" + mobile + "</p></div>";
        let inputs = document.querySelectorAll("input");
        for (let i in inputs) {
            inputs[i].value = "";
        }
    }
}

form.addEventListener("submit", formSubmit);