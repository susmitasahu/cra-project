import { useEffect, useState } from "react";

export const USer = props => {
  const count = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer called");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div className="user-card">
      <h1>
        Name: {props.name}, count: {count}
      </h1>
    </div>
  );
};

export default USer;
