// Lista para guardar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("👋🏻Hola, el campo está vacío😶‍🌫️. Porfa, ingresa un nombre válido.");
        return;
    }

    // Verificar si el nombre ya está en la lista (evitar duplicados)
    if (amigos.includes(nombreAmigo)) {
        alert("⚠️ Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el campo

    mostrarLista(); // Actualizar la lista en pantalla
}

// Implementa una función para actualizar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista
    /*
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    */
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    };
}

// Implementa una función para sortear los amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("👋🏻Hola, el campo esta vacío😶‍🌫️. Porfa, ingresa un nombre válido.");
        return;
    }

    let indiceAleatoria = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[indiceAleatoria];
    let tuAmigoSecreto = document.getElementById("resultado").textContent = "🎉Tu amigo secreto es: " + amigoSecreto + "🎉";
}
