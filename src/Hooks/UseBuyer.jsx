import { useEffect, useState } from "react";

function UseBuyer(email) {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${import.meta.env.VITE_API_URL}/user/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
}

export default UseBuyer;
