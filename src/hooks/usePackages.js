import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://agile-ravine-60330.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return { packages };
}

export default usePackages;