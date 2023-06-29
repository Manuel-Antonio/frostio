import {useContext} from "react";
import HeladeriaContext from "@/context/HeladeriaProvider";

const useHeladeria = () => {
  return useContext(HeladeriaContext);
}

export default useHeladeria
