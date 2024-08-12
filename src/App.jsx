import "./App.css";
import Header from "./components/Header";
import bgImage from "./assets/bgImg.jpg";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      <Header />
      <div className="relative pt-16 ">
        <img
          className="h-80
           w-full bg-cover object-cover bg-center"
          src={bgImage}
          alt="Header Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
            Find Stunning royalty-free images
          </h1>
        </div>
      </div>
      <ImageGrid />
    </div>
  );
}

export default App;
