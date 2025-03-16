import { useEffect, useState } from "react";
import { getAllProducts } from "../api/auth";
import useLocalStorage from "../hooks/useLocalStorage";
export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastSelected, setLastSelected] = useLocalStorage("lastSelected", null);
  const [lastTimeStamp, setLastTimeStamp] = useLocalStorage(
    "lastTimeStamp",
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllProducts();
        console.log(res);
        const now = Date.now();
        if (res.status === 200) {
          if (
            !lastSelected ||
            !lastTimeStamp ||
            now - lastTimeStamp > 30 * 60 * 1000
          ) {
            const randomProductIndex = Math.floor(
              Math.random() * res?.data?.products?.length
            );
            setData([res.data.products[randomProductIndex]]);
            setLastSelected(randomProductIndex);
            setLastTimeStamp(now);
          } else {
            setData([res.data.products[lastSelected]]);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [lastSelected, lastTimeStamp, setLastSelected, setLastTimeStamp]);
  console.log(data);

  return (
    <div className="relative">
      <div className="bg-black/30 absolute h-full w-full"></div>
      {data?.map((item) => (
        <div key={item.id} className="h-[calc(100vh-20%)] w-full">
          <img
            src={item.images[0]}
            className="h-full w-full aspect-square object-cover "
          />
        </div>
      ))}
    </div>
  );
}
