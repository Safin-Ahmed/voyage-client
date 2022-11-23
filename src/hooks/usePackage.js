import { useEffect, useState } from "react";
const usePackage = (id) => {
  const [singlePackage, setSinglePackage] = useState({});
  const url = `https://voyage-server.up.railway.app/order/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSinglePackage(data));
  }, []);
  return { singlePackage };
};
export default usePackage;
