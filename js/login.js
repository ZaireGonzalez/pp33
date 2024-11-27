document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío normal del formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación de login (este es solo un ejemplo con usuario "admin" y contraseña "1234")
    if (username === "admin" && password === "1234") {
        // Redirigir al menú principal si el login es correcto
        window.location.href = "menu.html"; 
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
