import HeroCollage from "@/components/HeroCollage";
import Section from "@/components/Section";

export default function Page() {
  const imgs = [
    "/collage/b1.jpg",
    "/collage/b2.jpeg",
    "/collage/b3.jpeg",
    "/collage/b4.jpeg",
    "/collage/b5.jpeg",
    "/collage/b6.jpeg",
    "/collage/b7.jpeg",
    "/collage/b8.jpeg",
    "/collage/b9.jpeg",
    "/collage/b10.jpeg",
    "/collage/b11.jpeg",
    "/collage/b12.jpeg",
    "/collage/b13.jpeg",
    "/collage/b14.jpeg",
  ];

  
  return (
    <main>
      <HeroCollage
        name="Shridhar Kala Kendra"
        subtitle="National Award-Winning International Kathak Performer & Academy"
        ctaLabel="KATHAK DANCE"
        ctaHref="/about"   // when you click, go to the About screen
        images={imgs}
      />
    </main>
  );
}
