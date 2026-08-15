const form = document.getElementById("userForm");
const theme = document.getElementById("themeToggle");

theme.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        theme.innerHTML = "Modo claro";
    } else {
        theme.innerHTML = "Modo oscuro";
    }
});

form.addEventListener("submit", function(event){
    
    event.preventDefault();

    const name = document.getElementById("name").value;
    const documentType = document.getElementById("document").value;
    const documentNumber = document.getElementById("documentNumber").value;
    const city = document.getElementById("city").value;
    const phone = document.getElementById("phone").value;

    if (
        name === "" || 
        documentType === "" || 
        documentNumber === "" || 
        city === "" || 
        phone === ""
    ){

        alert("Complete todos los campos.");
        
    } else {

        alert(
            "Usuario registrado correctamente:\n\n" +
            "Nombre: " + name +
            "\nDocumento: " + documentType +
            "\nNúmero de documento: " + documentNumber +
            "\nCiudad: " + city +
            "\nContacto: " + phone
        );
        
        form.reset();
    }
});