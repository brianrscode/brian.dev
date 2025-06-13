import { Header } from "./views/Header";
import { Projects } from "./views/Projects";
import { About } from "./views/About";
import './App.css'
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([]); // Estado para almacenar los datos
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}assets/data/data.json`);
        if (!response.ok) {
          throw new Error('No se pudo cargar los datos');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();

  }, []);

  if(loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto w-full max-w-[840px] px-4 sm:px-6 lg:px-20 py-44">

      <div className="flex items-center gap-2">
        <Header name={data.name} skill={data.skill} skillExtra={data.skillExtra} media={data.media} />
      </div>
      <h6 className="mt-30 text-4xl font-bold text-white inline-flex gap-3">
        {<img src={`${import.meta.env.BASE_URL}assets/icons/user.svg`} />}Sobre mí.
      </h6>

      <About />

      <h6 className="mt-30 mb-5 text-4xl font-bold text-white inline-flex items-center gap-3">
        {<img src={`${import.meta.env.BASE_URL}assets/icons/code2.svg`} />} Proyectos.
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <Projects data={data.projects} />
      </div>

    </div>
  )

}


export default App
