import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { data } from "../Mendata";
import Itemcard from "../components/Itemcard";
import { PropagateLoader } from "react-spinners";

const Menwear = () => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [category]);

  const handlecategory = (e) => {
    setLoading(false);
    setCategory(e.target.id);
  };

  const handleSearch=(e)=>{
    console.log(e.target.value);
  }

  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <Search onChange={handleSearch} />
      <div className="flex justify-center gap-1 mt-10 md:gap-2 ">
        <button
          id="Jackets"
          onClick={handlecategory}
          className="w-20 h-10 text-sm text-center border-black rounded-md md:w-40 md:h-10 border-1 bg-slate-200 hover:text-white hover:bg-black "
        >
          Jackets
        </button>
        <button
          id="Sweaters"
          onClick={handlecategory}
          className="w-20 h-10 text-sm text-center border-black rounded-md md:w-40 md:h-10 border-1 bg-slate-200 hover:text-white hover:bg-black "
        >
          Sweaters
        </button>
        <button
          id="Sweatshirt"
          onClick={handlecategory}
          className="w-20 h-10 text-sm text-center border-black rounded-md md:w-40 md:h-10 border-1 bg-slate-200 hover:text-white hover:bg-black"
        >
          Sweatshirts
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-10 md:ml-10 ml-4 mr-4">
        {loading ? (
          category === "" ? (
            data.map((item) => (
              <Itemcard
                key={item.id}
                url={item.url}
                name={item.name}
                price={item.price}
                des={item.desc}
                tag={item.tags}
              />
            ))
          ) : (
            data
              .filter((item) => item.tags === category)
              .map((item) => (
                <Itemcard
                  key={item.id}
                  url={item.url}
                  name={item.name}
                  price={item.price}
                  des={item.desc}
                  tag={item.tags}
                />
              ))
          )
        ) : (
          <PropagateLoader color="#36d7b7" className="flex justify-center" />
        )}
      </div>
    </div>
  );
};

export default Menwear;
