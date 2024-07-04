window.onload = () => {

    const destinoTexts = ['Local', 'Provincial', 'Comunidad Autónoma', 'Nacional', 'Ceuta y Melilla', 'Baleares y Canarias', 'Europa', 'Resto del Mundo'];

    const pesoTexts = ['Hasta 0,5kg', 'Hasta 5kg', 'Hasta 10kg', 'Hasta 20kg'];

    const precios = [
        [4.88, 6.75, 8.49, 11.39],
        [10.88, 9.75, 11.49, 14.39],
        [10.88, 12.75, 14.49, 17.39],
        [14.88, 16.75, 18.49, 21.39],
        [20.88, 22.75, 24.49, 27.39],
        [18.88, 20.75, 22.49, 25.39],
        [22.88, 24.75, 26.49, 29.39],
        [27.88, 29.75, 31.49, 34.39]
    ];

    let selectDestino = document.querySelector("#selectDestino");
    let selectPeso = document.querySelector("#selectPeso");

    destinoTexts.forEach((text, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = text;
        selectDestino.appendChild(option);
    });

    pesoTexts.forEach((text, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = text;
        selectPeso.appendChild(option);
    });

    document.querySelector("#botonPrecio").addEventListener("click", function() {
        let destinoIndex = selectDestino.value;
        let pesoIndex = selectPeso.value;
    
        if(destinoIndex == "" || pesoIndex == "") {
            alert("Introduce valores en los campos");
        } else {
            let precio = precios[destinoIndex][pesoIndex];
            document.querySelector("#resultado").innerHTML = `El precio es ${precio}€`;
        }
    });

}
