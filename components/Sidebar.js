import Image from "next/image";
import useHeladeria from "@/hooks/useHeladeria";
import Categoria from "./Categoria";
import { useRouter } from "next/router";
const Sidebar = () => {
  const { categorias } = useHeladeria();
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.push("/admin");
        }}
      >
        <Image
          width={300}
          height={200}
          src={
            "https://res.cloudinary.com/djsl4a5py/image/upload/v1682232854/Helados/logo/logo3_ckwcs6.png"
          }
          alt={"Logo"}
          className="w-full block"
        />
      </button>
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
