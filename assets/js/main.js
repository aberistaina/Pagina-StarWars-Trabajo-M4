let primerTimeline = document.getElementById("primerTimeline")
let segundoTimeline = document.getElementById("segundoTimeline")
let tercerTimeline = document.getElementById("tercerTimeline")

let primerUltimoNumero = 0;
let segundoUltimoNumero = 5;
let tercerUltimoNumero = 11;


function* primercontador(){
   numero = 1
    while(numero < 6){
        yield numero
        numero ++
    }
}
let primerG = primercontador()

function* segundoContador(){
    numero = 6
     while(numero < 12){
         yield numero
         numero ++
     }
}

let segundoG = segundoContador()

function* tercerContador(){
    numero = 12
     while(numero < 18){
         yield numero
         numero ++
     }
}

let tercerG = tercerContador()


function capturarPrimeraSeccion(){
    let numero = primerG.next().value || primerUltimoNumero + 1
    
    if(numero <= 5){
        primerUltimoNumero = numero;
        url = "https://swapi.dev/api/people/" + numero   

        fetch(url)
            .then(response => response.json())
            .then((data) =>{
            mostrarPrimerCuadro(data)       

            })        
}

}

function capturarSegundaSeccion(url){
    let numero = segundoG.next().value || segundoUltimoNumero + 1;
    if (numero > 5 && numero <= 10) {
        segundoUltimoNumero = numero;
        url = "https://swapi.dev/api/people/" + numero;

        fetch(url)
            .then(response => response.json())
            .then((data) =>{
                mostrarSegundoCuadro(data);
            });
    }
}


function capturarTerceraSeccion(url){
    let numero = tercerG.next().value || tercerUltimoNumero + 1;
    if (numero > 11 && numero <= 16) {
        tercerUltimoNumero = numero;
        url = "https://swapi.dev/api/people/" + numero;

        fetch(url)
            .then(response => response.json())
            .then((data) =>{
                mostrarTercerCuadro(data);
            });
    }
}

function mostrarPrimerCuadro(data){
    document.getElementById("primerCuadro").innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 ">
                <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                    <div class="timeline-icon" style="background-color: salmon;"><i class="fa fa-address-card" aria-hidden="true"></i>
                    </div>
                    <div class="timeline-text">
                        <h6>${data.name}</h6>
                        <p>${data.height} cm. ${data.mass} kg.</p>
                    </div>
                </div>
        </div>
    
    
    `
}

function mostrarSegundoCuadro(data){
        document.getElementById("segundoCuadro").innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 ">
                <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                    <div class="timeline-icon" style="background-color: lightgreen;"><i class="fa fa-address-card" aria-hidden="true"></i>
                    </div>
                    <div class="timeline-text">
                        <h6>${data.name}</h6>
                        <p>${data.height} cm. ${data.mass} kg.</p>
                    </div>
                </div>
        </div>`
    }
function mostrarTercerCuadro(data){
    document.getElementById("tercerCuadro").innerHTML += `
    <div class="col-12 col-md-6 col-lg-4 ">
        <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
            style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
            <div class="timeline-icon" style="background-color: lightskyblue;"><i class="fa fa-address-card" aria-hidden="true"></i>
            </div>
            <div class="timeline-text">
                <h6>${data.name}</h6>
                <p>${data.height} cm. ${data.mass} kg.</p>
            </div>
        </div>
</div>`
}
primerTimeline.addEventListener("mouseenter",capturarPrimeraSeccion)
segundoTimeline.addEventListener("mouseenter", capturarSegundaSeccion)
tercerTimeline.addEventListener("mouseenter", capturarTerceraSeccion)
