import { useEffect, useState } from "react";
import pix from "../assets/pixer.jpg";
import { getData } from "../api/API";
import ReactPaginate from "react-paginate";
import { BsArrow90DegRight, BsArrow90DegLeft } from "react-icons/bs";

const HomeScreen = () => {
  const [data, setData] = useState<Array<any>>([]);
  const [view, setView] = useState<number>(12);
  const [page, setPage] = useState<number>(1);

  const lastPage = view * page;
  const firstPage = lastPage - view;
  const myState = data.slice(firstPage, lastPage);
  const countPage = Math.ceil(data.length / view);

  let pagination: number[] = [];
  for (let i = 1; i <= countPage; i++) {
    pagination.push(i);
  }
  useEffect(() => {
    getData().then((res: any) => {
      setData([...data, ...res]);
    });
  }, []);
  return (
    <div className="font-main text-[15px]">
      <div className="flex flex-wrap p-4">
        {myState.map((props: any) => {
          return (
            <div className="w-[270px] min-h-[250px] overflow-hidden m-3 border-[purple] rounded border-[1px]">
              <img src={pix} className="w-full object-cover" />
              <div className="p-2">
                <p className="mt-1">ID: {props.id} </p>
                <p>Name: </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full p-4 flex flex-wrap justify-center">
        <div className="flex w-full justify-center items-center">
          <ReactPaginate
            pageCount={countPage}
            breakLabel={<div className="ml-10"></div>}
            nextLabel={
              <div
                className={` bg-red-500  py-2 px-4 m-1 rounded  hover:cursor-pointer`}
              >
                <BsArrow90DegRight />
              </div>
            }
            previousLabel={
              <div
                className={` bg-red-500  py-2 px-4 m-1 rounded  hover:cursor-pointer`}
              >
                <BsArrow90DegLeft />
              </div>
            }
            pageLabelBuilder={(page) => (
              <div className="h-10 rounded px-5 text-slate-600 transition-colors duration-150 flex items-center focus:shadow-outline hover:bg-green-100">
                {page}
              </div>
            )}
            onPageChange={({ selected }) => setPage(selected + 1)}
            activeClassName="active"
            containerClassName="pagination"
            pageRangeDisplayed={5}
            className="flex min-w-[500px] items-center border-[1px] border-[silver]"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
};

//

// I created a Command Line Game for you 5-Minute Node.js CLI Project

export default HomeScreen;
