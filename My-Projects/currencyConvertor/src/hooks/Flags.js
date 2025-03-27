import { useEffect, useState } from "react";

function useFlags(flags) {
    const [flag, setflag] = useState({});
    useEffect(() => {
      fetch("../Api/currency-flag.json")
        .then((res) => res.json())
        .then((res) => setflag(res[flag[flags]]));
    }, [flags]);
    return flag;
}


export default useFlags