export interface InfoCarta {
    idFoto: number;
    imagen: string;
};

export const infoCartas: InfoCarta[] = [
    {
        idFoto: 1,
        imagen: "https://eltallerdehector.com/wp-content/uploads/2022/06/335ff-baby-yoda-png.png",
    },
    {
        idFoto: 2,
        imagen: "https://png.pngtree.com/png-vector/20230801/ourmid/pngtree-vader-clipart-darth-vader-cartoon-by-big-emu-shop-vector-png-image_6828070.png",
    },
    {
        idFoto: 3,
        imagen: "https://png.pngtree.com/png-vector/20230729/ourmid/pngtree-chewbacca-clipart-chewbacca-character-vector-for-use-cartoon-png-image_6793961.png",
    },
    {
        idFoto: 4,
        imagen: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4560c1bc-691a-41d7-b7e8-00db8ef5198a/dfcjt40-8ce0d474-e667-4e80-8735-f3bd2cb5a06e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ1NjBjMWJjLTY5MWEtNDFkNy1iN2U4LTAwZGI4ZWY1MTk4YVwvZGZjanQ0MC04Y2UwZDQ3NC1lNjY3LTRlODAtODczNS1mM2JkMmNiNWEwNmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FrMxKEvrhBC810f1UlaYlYcxn0PFWtnEySwyBdKRvbc",
    },
    {
        idFoto: 5,
        imagen: "https://png.pngtree.com/png-vector/20230822/ourmid/pngtree-star-wars-character-line-icon-on-white-background-vector-png-image_6843228.png",
    },
    {
        idFoto: 6,
        imagen: "https://png.pngtree.com/png-vector/20230531/ourmid/pngtree-star-wars-trooper-stickers-free-vector-clipart-illustration-png-image_6780799.png",
    },
];

export interface Carta {
    idFoto: number; // id del 1 al 6 para 12 cartas, así identificamos rápido si es un gatito ,un perrito...
    // el ID se repete 2 veces en el array de cartas (hay dos cartas de un perro, hay dos cartas de un gato)
    imagen: string; // por comodidad repetimos la url de la imagen
    estaVuelta: boolean;
    encontrada: boolean;
};

export const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
    idFoto,
    imagen,
    estaVuelta: false,
    encontrada: false,
});

export const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
    const cartasTransformadas = infoCartas.map((carta)=>{
        return crearCartaInicial(carta.idFoto, carta.imagen)
    })
    return [...cartasTransformadas,...cartasTransformadas]
};
  
export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
};

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();