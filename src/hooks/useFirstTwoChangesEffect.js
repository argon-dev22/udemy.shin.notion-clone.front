import { useEffect, useRef } from "react";

const useFirstTwoChangesEffect = (effect, dependencies) => {
  const changeCountRef = useRef(0);

  useEffect(() => {
    if (changeCountRef.current < 2) {
      changeCountRef.current += 1;
      effect();
    }
  }, dependencies);
};

export default useFirstTwoChangesEffect;
