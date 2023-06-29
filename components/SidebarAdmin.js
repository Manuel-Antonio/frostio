import Image from "next/image";
import { useRouter } from "next/router";

const SidebarAdmin = () => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => {
          router.push("/admin");
        }}
      >
        <Image
          width={300}
          height={200}
          src={
            "https://res.cloudinary.com/djsl4a5py/image/upload/v1682225169/Helados/logo/logo_ti7kfc.png"
          }
          alt={"Logo"}
          className="w-full block"
        />
      </button>
      <Image
        width={300}
        height={200}
        src={
          "https://res.cloudinary.com/djsl4a5py/image/upload/v1682194022/BioApp/Logo/fondo_sidebaradmin_pjjwfj.png"
        }
        alt={"Logo"}
      />
      <button
        type="button"
        className=" shadow-white bg-red-500 hover:bg-red-600 rounded-md p-3 w-full mt-10 text-2xl uppercase text-white font-bold"
        onClick={() => {
          router.push("/");
        }}
      >
        Regresar a la tienda
      </button>
      <div className="relative"></div>
    </>
  );
};

export default SidebarAdmin;
