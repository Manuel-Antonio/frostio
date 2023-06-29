import Image from "next/image";
import useHeladeria from "@/hooks/useHeladeria";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useHeladeria();
  const { nombre, imagen, id } = categoria;
  return (
    <div
      className={`${
        categoriaActual?.id === id
          ? "bg-red-600 text-white "
          : "hover:bg-red-500 hover:text-white "
      } transition-all flex items-center gap-3 w-full border p-5`}
    >
      <Image
        width={80}
        height={80}
        src={imagen}
        alt={`Imagen de icono ${nombre}`}
      />
      <button
        type="button"
        className="text-2xl text-left font-bold"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
