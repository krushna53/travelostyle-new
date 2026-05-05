import CruiseCard from "./CruiseCard";

const cruises = [
  { title: "BAHAMAS", nights: "3 Nights", route: "Round Trip | Port Canaveral, FL", price: "$X", image: "/Rectangle3.png" },
  { title: "WESTERN CARIBBEAN", nights: "7 Nights", route: "Round Trip | Miami, FL", price: "$X", image: "/Rectangle4.png" },
  { title: "EASTERN CARIBBEAN", nights: "7 Nights", route: "Round Trip | Port Canaveral, FL", price: "$X", image: "/eastern.png" },
  { title: "MEDITERRANEAN", nights: "7 Nights", route: "Round Trip | Barcelona, Spain", price: "$X", image: "/Rectangle1.png" },
];

export default function DisneyCruiseLine({ onGetDetails }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {cruises.map((item, i) => (
        <CruiseCard key={i} item={item} onGetDetails={onGetDetails} />
      ))}
    </div>
  );
}
