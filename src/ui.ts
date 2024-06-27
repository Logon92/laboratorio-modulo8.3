import {Carta, Tablero, tablero} from "./modelo"
import {esPartidaCompleta, iniciaPartida, parejaEncontrada, parejaNoEncontrada, sePuedeVoltearLaCarta, sonPareja, voltearLaCarta} from "./motor"

export const crearTablero = () => {
    for (let indiceCarta = 0; indiceCarta < tablero.cartas.length; indiceCarta++){
       mapearDivsACartas(indiceCarta, tablero)
    }
};

export const mapearDivsACartas = (indiceCarta: number, tablero: Tablero) => {
    const dataIndiceId = `[data-indice-id="${indiceCarta}"]`;
        const elementoDiv = document.querySelector(`div${dataIndiceId}`);
        if(elementoDiv instanceof HTMLDivElement && elementoDiv !== null && elementoDiv !== undefined)(
            elementoDiv.addEventListener("click", function() {
                if(tablero.estadoPartida !== "PartidaNoIniciada"){
                    handleDivCarta(tablero, indiceCarta);
                }
            })
        )
};

export const handleDivCarta = (tablero: Tablero, indiceCarta: number) => {
    if(sePuedeVoltearLaCarta(tablero, indiceCarta)){
        voltearLaCarta(tablero, indiceCarta);
        mostrarImagen(tablero, indiceCarta);
        mirarSiEsLaSegundaCarta(tablero);
    } else {
        alert ('¡No se puede dar la vuelta a esta carta!');
    }
    console.log(tablero);
};

export const agregarEventoBotonIniciarPartida = () => {
    const botonEmpezarPartida = document.getElementById("empezarPartida");
    if(botonEmpezarPartida instanceof HTMLButtonElement && botonEmpezarPartida !== null && botonEmpezarPartida !== undefined){
        botonEmpezarPartida.addEventListener("click", () => {
            clicKBotonEmpezarPartida()
        })
    }
};

const clicKBotonEmpezarPartida = () => {
    iniciaPartida(tablero)
};

const mostrarImagen = (tablero: Tablero, indiceCarta: number) => {
    const dataIndiceId = `[data-indice-id="${indiceCarta}"]`;
    const elementoImg = document.querySelector(`img${dataIndiceId}`)
                if(elementoImg instanceof HTMLImageElement && elementoImg !== null && elementoImg !== undefined){
                    elementoImg.src = tablero.cartas[indiceCarta].imagen
                }
};

const mirarSiEsLaSegundaCarta = (tablero: Tablero) => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const inidceB = tablero.indiceCartaVolteadaB;
    const mensaje = document.getElementById("mensaje");
        if(mensaje instanceof HTMLDivElement && mensaje !== null && mensaje !== undefined)
    if(indiceA !== undefined && inidceB !== undefined){
        if(sonPareja(indiceA, inidceB, tablero)){
            parejaEncontrada(tablero, indiceA, inidceB);
            mensaje.innerHTML = `🥳¡¡ Has encontrado una pareja!!🎉`;
            if(esPartidaCompleta(tablero)){
                mensaje.innerHTML = `🥳¡¡ Lo has clavado! ¡Enhorabuena!!🎉`;
            }
        }else {
            parejaNoEncontrada(tablero, indiceA, inidceB);
            voltearLasCartasQueNoSonPareja(tablero.cartas);
                mensaje.innerHTML = `¡¡Oooh, noo!! ¡¡Sigue intentándolo!!`;
        }
    }
};

const voltearLasCartasQueNoSonPareja = (cartas: Carta[]) => {
    setTimeout(() => {
        ponerImagenBocaAbajo(cartas);
      }, 1000); 
};

const ponerImagenBocaAbajo = (cartas: Carta[]) => {
    for(let indice = 0; indice < cartas.length; indice++){
        if(!cartas[indice].encontrada && !cartas[indice].estaVuelta){
            darleLAVueltaALaCarta(indice);
        } 
    }
};

const darleLAVueltaALaCarta = (indiceCarta: number) => {
    const dataIndiceId = `[data-indice-id="${indiceCarta}"]`;
    const elementoImg = document.querySelector(`img${dataIndiceId}`)
                if(elementoImg instanceof HTMLImageElement && elementoImg !== null && elementoImg !== undefined){
                    elementoImg.src = "https://i.pinimg.com/474x/ee/ec/fb/eeecfb4866cb83c610f0f29400f541ad.jpg"
                }
};

const botonReset = document.getElementById("nuevaPartida");
    if (botonReset instanceof HTMLButtonElement && botonReset !== null && botonReset !== undefined)(
            botonReset.addEventListener("click", function(){
                window.location.reload()
                }
            )
    )