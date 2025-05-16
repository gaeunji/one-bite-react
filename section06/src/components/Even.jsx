import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // clean-up, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
