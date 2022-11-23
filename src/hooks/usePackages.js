import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const usePackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://voyage-server.up.railway.app/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return { packages };
};

export default usePackages;
