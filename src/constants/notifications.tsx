import type { INotification } from "../types/types";

const notifications: INotification[] = [
  // {
  //   id: 6,
  //   title: "Fixture mejorado",
  //   description: "Se agrego tres estados a cada partido, FINALIZADO cuando el partido se haya terminado y mestra el marcador, EN JUEGO muestra el marcador y a la vez muestra una etiqueta en verde, y PROGRAMADO cuando los partidos estan programados y aun no estan en juego ",
  //   status: "success",
  //   date: "08/08/2025 | 03:35"
  // },
  //  {
  //   id: 5,
  //   title: "Nuevas funcionalidades",
  //   description: "Se agregaron dos funcionalidades nuevas. 1 se puede ver detalle de cada jugador e enviar mensaje de whatsapp desde esa vista. 2. Se agrego Notificaciones. ",
  //   status: "success",
  //   date: "07/08/2025 | 03:20"
  // },
  // {
  //   id: 4,
  //   title: "Partido Suspendido",
  //   description: "Por motivo de tanta lluvia esta sema se supende el partido programado para este fin de semara 03/07/2025",
  //   status: "error",
  //   date: "07/08/2025 | 02:19"
  // },
  // {
  //   id: 3,
  //   title: "Partidos habilitados",
  //   description: "Este fin de semana 12/07/2025 se juega la fecha 12 y la fecha 14 con normalidad, que tenga un exelente semana, los esperamos ",
  //   status: "success",
  //   date: "13/08/2025 | 12:23"
  // },
  {
    id: 2,
    title: "Partidos Cancelados del domingo 21/09/2025",
    description: `Se informa a todos los equipos, jugadores y público en general que, debido a las intensas lluvias y con el fin de resguardar la seguridad de los participantes, queda suspendida la realización de los partidos correspondientes a las Fechas 2 y 3.
      Próximamente se dará a conocer la reprogramación de dichos encuentros.
      Agradecemos su comprensión y colaboración.`,
    status: "warning",
    date: "20/09/2025 | 11:00",
  },
  {
    id: 1,
    title: "Inauguración del Campeonato del Distrito 6",
    description:
      "¡Gran Inauguración del Campeonato del Distrito 6! 📅 14/09   ⏰ 10:00 AM   📍 Complejo Deportivo La Berraca ¡Se invita encarecidamente a todos los jugadores e hinchas de cada comunidad del Distrito 6! No faltes. Los esperamos para vivir juntos esta gran fiesta deportiva! 🎉",
    status: "success",
    date: "9/08/2025 | 08:56",
  },
];

export default notifications;
