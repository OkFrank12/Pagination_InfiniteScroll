import { useEffect, useState } from "react";
import pix from "../assets/pixer.jpg";
import { getData } from "../api/API";

const TryOut = () => {
  const [apis, setApis] = useState<Array<any>>([]);
  const [scroll, setScroll] = useState<Array<any>>([]);
  const [section, setSection] = useState<number>(12);
  const [indicate, setIndicate] = useState<number>(1);

  const lastIndicate = section * indicate;
  const newIndicate = lastIndicate - section;
  const sliceApis = apis.slice(newIndicate, lastIndicate);

  useEffect(() => {
    getData().then((res) => {
      setApis([...apis, ...res]);
      setScroll([...scroll, ...sliceApis]);
    });
  }, [newIndicate, lastIndicate, indicate]);

  let paginateApi: number[] = [];
  const divideApiBySection = Math.ceil(apis.length / section);
  for (let integer = 1; integer <= divideApiBySection; integer++) {
    paginateApi.push(integer);
  }

  const handleScrollEvent = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setIndicate((el) => el + 1);
      console.log("I can change")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
  }, []);

  console.log(scroll)
  return (
    <div className="font-main w-full">
      <div className="flex flex-wrap justify-center p-5">
        {scroll?.map((el: any) => (
          <div className="rounded w-[280px] m-4 h-[280px] border-[#61f861] border-[1px] overflow-hidden">
            <img src={pix} className="w-full object-cover" />
            <div className="p-3">
              <p className="uppercase">id: {el.id} </p>
              <p className="capitalize">name: </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center flex-wrap">
        {/* {paginateApi?.map((props: any) => (
          <div
            className={`${
              props === indicate ? "bg-green-300" : "bg-rose-200"
            } px-5 py-3 cursor-pointer rounded m-5 bg-green-300`}
            onClick={() => {
              setIndicate(props);
            }}
          >
            {props}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TryOut;
