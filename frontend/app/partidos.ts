export type Partido = {
  id: number;
  titulo: string;
  liga: string;
  estado: string;
  marcador: string;
  calidad: string;
  video: string;
};

// Lista única de partidos: la usan la página principal (reproductor) y el dashboard.
// Para cambiar un partido o su video, edítalo solo aquí.
// Si ya cambiaste los links de video en tu page.tsx, pega aquí tus links actuales.
export const partidos: Partido[] = [
  {
    id: 1,
    titulo: "Real Madrid vs. Manchester City",
    liga: "Champions League",
    estado: "EN VIVO",
    marcador: "2 - 2",
    calidad: "4K",
    video: "https://www.youtube.com/embed/LlzG9LIqqvg",
  },
  {
    id: 2,
    titulo: "Junior FC vs. Atlético Nacional",
    liga: "Liga BetPlay",
    estado: "EN VIVO",
    marcador: "1 - 0",
    calidad: "Full HD",
    video: "https://www.youtube.com/embed/EW3atK2GKiY",
  },
  {
    id: 3,
    titulo: "Lakers vs. Golden State Warriors",
    liga: "NBA",
    estado: "DESTACADO",
    marcador: "114 - 110",
    calidad: "HD",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    titulo: "Gran Premio de Mónaco",
    liga: "Fórmula 1",
    estado: "REPETICIÓN",
    marcador: "Finalizado",
    calidad: "4K",
    video: "https://www.youtube.com/embed/ipOT9ruRobc",
  },
];
