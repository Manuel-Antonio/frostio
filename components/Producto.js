import Image from "next/image";
import { formatearDinero } from "@/helpers";
import useHeladeria from "@/hooks/useHeladeria";
import { useState, useEffect } from "react";
const Producto = ({ producto }) => {
  const { handleClickProducto, handleChangeModal, pedido } = useHeladeria();
  const { nombre, imagen, precio, id } = producto;

  const [productoAgregado, setProductoAgregado] = useState(false);

  const modificarAspecto = () => {
    if (pedido.some((p) => p.id == id)) {
      setProductoAgregado(true);
    } else {
      setProductoAgregado(false);
    }
  };

  useEffect(() => {
    modificarAspecto();
  }, [pedido]);
  return (
    <div className="border">
      <Image
        width={600}
        height={400}
        src={imagen}
        alt={`Imagen de ${nombre}`}
        className="w-full"
      />
      <div className="contenido p-3">
        <h3 className="text-3xl font-bold text-slate-800">{nombre}</h3>
        <p className="text-red-500 text-4xl font-black mt-2">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className={`${
            productoAgregado
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-sky-600 hover:bg-sky-700"
          } rounded text-white font-bold p-3 transition-all w-full mt-5 uppercase`}
          onClick={() => {
            handleClickProducto(producto);
            handleChangeModal();
          }}
        >
          {productoAgregado ? "Modificar" : "Agregar"}
        </button>
      </div>
    </div>
  );
};

export default Producto;
