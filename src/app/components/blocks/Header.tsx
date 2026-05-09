import { getSalutoByHour } from "../../data/service";
import { info } from "../../data/info";
import { MapPin, CalendarClock } from "lucide-react";
import Image from "next/image";

const MAPS_URL = `https://maps.app.goo.gl/tSc61LwVYWfRkHZK8`;

export default function Header() {
  const WHATSAPP_URL = `https://wa.me/${info.whatsappPhone}?text=${encodeURIComponent(
    `${getSalutoByHour()}, vorrei prenotare una visita. Quando siete disponibili? Grazie.`
  )}`;
  return (
    <header >
      <p>Header</p>
    </header>
  );
}
