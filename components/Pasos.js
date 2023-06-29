import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Heladería", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();

  const calcularProgreso = () => {
    let progreso;
    if (router.pathname == "/") {
      progreso = 10;
    } else if (router.pathname == "/resumen") {
      progreso = 60;
    } else if (router.pathname == "/total")  {
      progreso = 100;
    }
    return progreso;
  };
  
  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            key={paso.paso}
            type="button"
            className="text-xl font-bold uppercase"
            onClick={() => {
              router.push(paso.url);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-200 mb-10 rounded-full">
        <div
          className={`rounded-full bg-red-500 text-sm leading-none h-2 text-center 
          `}
          style={{width: `${calcularProgreso()}%`}}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
