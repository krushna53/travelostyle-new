import HeroTravelSection from "../components/HeroTravelSection";
export default function Home() {
  return (
    <div className="md:px-auto bg-[#f9f9f9]" style={{ backgroundImage: "url('/background.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'auto', backgroundPosition: '0 0' }}>
      <div className="bg-[#f1f1f1]" style={{ backgroundImage: "url('/background.jpg')", backgroundRepeat: 'repeat', backgroundSize: 'auto', backgroundPosition: '0 0' }}>
        <HeroTravelSection />
      </div>
    </div>
  );
}
