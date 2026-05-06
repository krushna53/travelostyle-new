import HeroTravelSection from "../components/HeroTravelSection";
export default function Home() {
  return (
    <div className="md:px-auto bg-[#f9f9f9] bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left">
      <div className="bg-[#f1f1f1] bg-[url('/background.jpg')] bg-repeat bg-cover bg-top-left">
        <HeroTravelSection />
      </div>
    </div>
  );
}
