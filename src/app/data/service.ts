import type { LucideIcon } from "lucide-react";
import {
  Baby,
  Cross,
  Crown,
  Drill,
  Smile,
  Stethoscope,
} from "lucide-react";

export function getSalutoByHour(): string {
  const hour = new Date().getHours();
  if (hour >= 6 && hour <= 13) {
    return "Buongiorno";
  } else if (hour >= 14 && hour <= 18) {
    return "Buon pomeriggio";
  } else if (hour >= 18 && hour < 6) {
    return "Buona sera";
  } else {
    return "Salve";
  }
}


export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
};

export const service: {
  title: string;
  description: string;
  items: ServiceItem[];
} = {
  title: "I nostri trattamenti",
  description:
    "Prevenzione, cura ed estetica del sorriso: percorsi chiari e personalizzati, spiegati con calma e attenzione.",
  items: [
    {
      icon: Drill,
      title: "Conservativa",
      description:
        "Ricostruzioni e otturazioni per trattare carie e piccole fratture, preservando il più possibile il dente naturale.",
      cta: `${getSalutoByHour()}, vorrei informazioni sulla conservativa (otturazioni/ricostruzioni). Quando siete disponibili? Grazie.`,
    },
    {
      icon: Smile,
      title: "Ortodonzia",
      description:
        "Allineamento del morso e dei denti con soluzioni moderne, su misura per adulti e ragazzi.",
      cta: `${getSalutoByHour()}, vorrei informazioni sull'ortodonzia. Quando siete disponibili? Grazie.`,
    },
    {
      icon: Cross,
      title: "Implantologia",
      description:
        "Impianti dentali per sostituire denti mancanti con stabilità, comfort e aspetto naturale.",
      cta: `${getSalutoByHour()}, vorrei informazioni sull'implantologia. Quando siete disponibili? Grazie.`,
    },
    {
      icon: Stethoscope,
      title: "Endodonzia",
      description:
        "Terapia canalare per eliminare dolore e infiammazione e, quando possibile, conservare il dente.",
      cta: `${getSalutoByHour()}, vorrei informazioni sull'endodonzia (cura canalare). Quando siete disponibili? Grazie.`,
    },
    {
      icon: Crown,
      title: "Protesi fissa e mobile",
      description:
        "Corone, ponti e protesi mobili per ritrovare masticazione, fonazione ed estetica in equilibrio.",
      cta: `${getSalutoByHour()}, vorrei informazioni sulle protesi fisse e mobili. Quando siete disponibili? Grazie.`,
    },
    {
      icon: Smile,
      title: "Protesi totale",
      description:
        "Soluzioni complete per sostituire tutti i denti di un'arcata, con un percorso mirato a stabilità, comfort e funzionalità.",
      cta: `${getSalutoByHour()}, vorrei informazioni sulla protesi totale. Quando siete disponibili? Grazie.`,
    },
    {
      icon: Baby,
      title: "Pedodonzia e ortodonzia (bambini)",
      description:
        "Prevenzione, visite e terapie per i più piccoli, con attenzione alla crescita e all'allineamento dei denti.",
      cta: `${getSalutoByHour()}, vorrei informazioni per pedodonzia e ortodonzia per bambini. Quando siete disponibili? Grazie.`,
    },
  ],
};
