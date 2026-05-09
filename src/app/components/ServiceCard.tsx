import Image from "next/image";
import { sendOnWhatsapp } from "../utils/whatsapp";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  cta,
}: ServiceCardProps) {
  const whatsappUrl = sendOnWhatsapp(cta);

  return (
    <div>
      <div>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        {cta}
      </a>
    </div>
  );
}
