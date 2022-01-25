import { useState } from "react";

const useToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const setOn = () => setIsOn(true);
  const setOff = () => setIsOn(false);

  return {
    isOn,
    setOn,
    setOff,
  };
};

export default useToggle;
