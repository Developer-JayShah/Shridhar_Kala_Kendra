import HeroCollage from "@/components/HeroCollage";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroCollage
        name="Bijalsangnaach"
        subtitle="National Award-Winning International Kathak Performer & Academy"
        ctaHref="/about"
        ctaLabel="Know More"
        images={[
           "/collage/b1.jpg",
    "/collage/b2.jpeg",
    "/collage/b3.jpeg",
    "/collage/b5.jpeg",
    "/collage/b6.jpeg",
    "/collage/b8.jpeg",
    "/collage/b9.jpeg",
    "/collage/b10.jpeg",
    "/collage/b11.jpeg",
    "/collage/b12.jpeg",
    "/collage/b13.jpeg",
    "/collage/b14.jpeg",
        ]}
        instagramUrl="PASTE_REAL_INSTAGRAM_LINK"
        youtubeUrl="PASTE_REAL_YOUTUBE_LINK"
        facebookUrl="PASTE_REAL_FACEBOOK_LINK"
        email="PASTE_REAL_EMAIL"
      />
    </main>
  );
}
