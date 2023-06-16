import React from "react";
import Date from "./Date";
import Product from "./Product";
const Item = () => {
    const date = [
        {day: 2,
         month: "June",
         year: 2023
        },
        {day: 3,
            month: "June",
            year: 2023
        },
        {day: 4,
            month: "June",
            year: 2023
        },
        {day: 5,
            month: "June",
            year: 2023
        }  
        ];
        const product = [
          {
            name: "Nirma"
          },
          {
            name: "Safed"
          },
          {
            name: "Surf Excel"
          }
        ];
  return (
    <div className="flex flex-col justify-around">
      <div className="w-[23.5rem] h-[5rem] bg-orange-400 flex justify-between items-center pr-2 rounded-xl"> 
        <Date  name={date[0]}/>
        <Product product={product[0]} />
      </div>
      <div className="w-[23.5rem] h-[5rem] bg-orange-400 flex justify-between items-center pr-2 rounded-xl"> 
        <Date  name={date[1]}/>
        <Product product={product[1]} />
      </div>
      <div className="w-[23.5rem] h-[5rem] bg-orange-400 flex justify-between items-center pr-2 rounded-xl"> 
        <Date  name={date[2]}/>
        <Product product={product[2]} /></div>
    </div>
  );
};

export default Item;
