import { useEffect } from "react";

function useDelay(
  time: number,
  setState: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    const id = setTimeout(() => {
      setState(true);
    }, time);
  }, [time, setState]);
}

export default useDelay;
