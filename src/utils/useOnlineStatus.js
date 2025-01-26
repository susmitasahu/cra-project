import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
  }, []);
  //return boolean
  return onlineStatus;
};

export default useOnlineStatus;
