import "./App.css";
import BusinessCard from "./components/BusinessCard";

function App() {
  const list = [
    {
      name: "Animesh More",
      description:
        "I am software engineer at meta, having 4 years on experience in tech industy.",
      interests: ["Guitar", "Bike Riding"],
      social: ["https://twitter.com"],
    },

    {
      name: "Sagar More",
      description:
        "I am software engineer at meta, having 4 years on experience in tech industy.",
      interests: ["Guitar", "Bike Riding"],
      social: ["https://instagram.com"],
    },
  ];
  return (
    <>
      {list.map((item) => (
        <BusinessCard key={item} data={item} />
      ))}
    </>
  );
}

export default App;
