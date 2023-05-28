let primerTimeline = document.getElementById("primerTimeline")
let segundoTimeline = document.getElementById("segundoTimeline")
let tercerTimeline = document.getElementById("tercerTimeline")

let array = []

let primerUltimoNumero = 0;
let segundoUltimoNumero = 5;
let tercerUltimoNumero = 10;

class PersonajeStarwars {
    constructor(nombre, estatura, peso){
        this.nombre = nombre
        this.estatura = estatura
        this.peso = peso
    }
}

function* recorrerArray(array) {
    for (let i = 0; i < array.length; i++) {
      yield array[i];
    }
    return;
  }
  
  let generador = recorrerArray(array);

function capturarPrimeraSeccion(){

        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then((data) =>{
                const datos = data.results;
                for (let i = 0; i < 5; i++) {
                     let personaje = new PersonajeStarwars(datos[i].name, datos[i].height, datos[i].mass)
                     array.push(personaje)

                }           
            })
                
}


function mostrarPrimerCuadro(){

    document.getElementById("primerCuadro").innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 ">
                <div class="single-timeline-content d-flex wow fadeInLeft 2021" data-wow-delay="0.3s"
                    style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                    <div class="timeline-icon" style="background-color: salmon;"><i class="fa fa-address-card" aria-hidden="true"></i>
                    </div>
                    <div class="timeline-text">
                        <h6>${array.nombre}</h6>
                        <p>${array.estatura} cm. ${array.peso} kg.</p>
                    </div>
                </div>
        </div>
    
    
    `

}
function mostrarSegundoCuadro(){
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

window.addEventListener('load', capturarPrimeraSeccion)
primerTimeline.addEventListener("mouseenter",mostrarPrimerCuadro)
// segundoTimeline.addEventListener("mouseenter", capturarSegundaSeccion)
// tercerTimeline.addEventListener("mouseenter", capturarTerceraSeccion)
