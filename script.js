var color = document.getElementById('color');
var capacidad = document.getElementById('capacidad');
var cantidad = document.getElementById('cantidad');
var resultado = document.getElementById('result');
var imagen = document.getElementById('imagen');
let description = document.getElementById('description');

function calculatePrice(){

    ocultar(resultado);
    
    if(color.value == 0){

        mostrar(resultado);
        resultado.classList.add("error");  
        resultado.innerHTML =  "Error: Complete todos los campos";

    } else if(capacidad.value == 0){

        mostrar(resultado);
        resultado.classList.add("error");  
        resultado.innerHTML =  "Error: Complete todos los campos";

    } else if(cantidad.value <= 0 || cantidad.value > 10){
        
        mostrar(resultado);
        resultado.classList.add("error");  
        resultado.innerHTML =  "Error: Complete todos los campos";

    } else {

        let cotizar = capacidad.value * cantidad.value;
        mostrar(resultado);
        resultado.classList.add("success");
         resultado.innerHTML = cotizar;
    }
    
}

function changeProductImage() {

    if (color.value == 'graphite') {

                imagen.innerHTML= `<img src="./img/iphone_13_graphite.png" alt="iphone" />`;
                description.innerHTML = `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Graphite
                <ul>• Memoria interna: 128 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 128 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 
                6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China`;

                } else if (color.value == 'silver') {

                imagen.innerHTML= `<img src="./img/iphone_13_silver.png" alt="iphone" />`;
                description.innerHTML= `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Silver
                <ul>• Memoria interna: 512 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 512 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China`;

                } else if(color.value == 'sierra') {
                
                imagen.innerHTML= `<img src="./img/iphone_13_sierra.png" alt="iphone" />`;
                description.innerHTML= `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Sierra Blue
                <ul>• Memoria interna: 128 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 128 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 
                6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China `;
            
            } else if (color.value == 'gold') {

                imagen.innerHTML= `<img src="./img/iphone_13_gold.png" alt="iphone" />`;
                description.innerHTML= `
                <ul>• Marca: Apple
                <ul>• Modelo: iPhone 13 Pro
                <ul>• Color: Gold
                <ul>• Memoria interna: 128 GB
                <ul>• Memoria RAM: 4 GB
                <ul>• Dual SIM: No
                <ul>• Compañía telefónica: Liberado
                <ul>• Sistema operativo: iOS 15
                <ul>• Tamaño de la pantalla: 6.1"
                <ul>• Resolución de la cámara: 12 MP
                <ul>• Red: 5G
                <ul>• Con pantalla táctil: Si
                <ul>• Cámara digital: Si
                <ul>• Capacidad de tarjeta de memoria: 128 GB
                <ul>• USB: USB-C
                <ul>• Teclado QWERTY: No
                <ul>• Wi-Fi: Si
                <ul>• Con GPS: Si
                <ul>• Radio: Si
                <ul>• Reproductor de música: Si
                <ul>• Grabador de voz: Si
                <ul>• Sintonizador de TV: No
                <ul>• Tamaño de SIM: Nano-SIM
                <ul>• Resolución de la pantalla: 2532 x 1170 pixeles a 460 ppi
                <ul>• Tipo de batería: De litio recargable integrada
                <ul>• Batería removible: No
                <ul>• Sensor de movimiento: Si
                <ul>• Brillo: Máximo de 1000 nits (normal); brillo máximo de 1,200 nits (HDR)
                <ul>• Flash en cámara frontal: Si
                <ul>• Cámara lenta: Si
                <ul>• Con Bluetooth: Si
                <ul>• Mini HDMI: No
                <ul>• Zoom óptico: Si
                <ul>• Zoom digital: Si
                <ul>• Tipo de pantalla: OLED
                <ul>• Modelo del Procesador: Chip A15 Bionic
                <ul>• Es a prueba de agua: Clasificación IP68 (hasta 30 minutos a una profundidad máxima de 
                6 metros) según la norma IEC 60529
                <ul>• Lector de huella digital: No
                <ul>• Sensor de proximidad: Si
                <ul>• Origen: China`;         
            }
}

function ocultar(resultado){
    resultado.setAttribute("style", "display: none;");
    resultado.classList.remove("error","success");
}

function mostrar(resultado){    
    resultado.setAttribute("style", "display: block;");
}