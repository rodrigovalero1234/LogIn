function validateform() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (name == "rodrigo" && password == "123"){
        alert("usarios y contraseña validos");
        window.open('calculadora.html');
    } else {
        alert("intenta nuevamente"); 
    }
}