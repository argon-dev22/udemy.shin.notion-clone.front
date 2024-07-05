import { useEffect, useRef } from "react";

const useFirstChangeEffect = (effect, dependencies) => {
  const firstChangeRef = useRef(true);

  useEffect(() => {
    if (firstChangeRef.current) {
      firstChangeRef.current = false;
      effect();
    }
  }, dependencies);
};

export default useFirstChangeEffect;
