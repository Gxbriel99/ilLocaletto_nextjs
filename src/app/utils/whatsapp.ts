import { info } from "../data/info";

export function sendOnWhatsapp(text: string): string {

    const phoneNumber = info.whatsappPhone;

    const formattedText = text
        .replace(/\n/g, "%0A") // Nuove righe
        .replace(/\s+/g, " ") // Spazi multipli a singolo
        .trim() // Rimuove spazi all'inizio/fine
        .replace(/%/g, "%25") // Escape per il carattere %
        .replace(/&/g, "%26") // Escape per &
        .replace(/#/g, "%23") // Escape per #
        .replace(/=/g, "%3D") // Escape per =
        .replace(/\?/g, "%3F") // Escape per ?
        .replace(/\//g, "%2F"); // Escape per /

    const baseUrl = "https://wa.me";

    return `${baseUrl}/${phoneNumber}?text=${formattedText}`;
}