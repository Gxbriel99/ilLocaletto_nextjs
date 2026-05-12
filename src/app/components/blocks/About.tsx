import Image from "next/image";

export default function About() {
  return (
    <section
      id="chi-siamo"
      className="relative z-[3] h-screen w-full overflow-visible bg-white"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-26 -bottom-16"
        style={{
          backgroundImage: 'url("/about_bg.webp")',
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}
