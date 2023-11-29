import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {AiFillStar,AiFillHeart} from "react-icons/ai"
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Flex from './Flex';
import Image  from './Image';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slices/cartSlice';

// Example items, to simulate fetching from another resources.
const items = [
    {
        url : "/images/p1.png",
        name : "Smart Mop Robot",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Smart TV HD",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Surveillance Camera",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Joystick Pro",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Pen Holder with Digital Watch - Silver",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Alarm Clock/Twin Bell Table Clock ",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "DIY Acrylic Wall Clock for Living e",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Premium Quality Black Jersey T-Shirt",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Men's tshirt design Yearn",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "T-Shirts Off on Brand ",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Premium Quality - Exclusive ",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Summer Brand New Model Tshirt",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },



    {
        url : "/images/p1.png",
        name : "Product 13",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Product 14",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Product 15",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Product 16",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Product 17",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Product 18",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "Product 19",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Product 20",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Product 21",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 22",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 23",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 24",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },
    
    {
        url : "/images/p1.png",
        name : "Product 25",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Product 26",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Product 27",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Product 28",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Product 29",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Product 30",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "Product 31",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Product 32",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Product 33",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 34",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 35",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 36",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },



    {
        url : "/images/p1.png",
        name : "Product 37",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Product 14",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Product 38",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Product 39",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Product 40",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Product 41",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "Product 42",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Product 43",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Product 44",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 45",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 46",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 47",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },
    {
        url : "/images/p1.png",
        name : "Smart Mop Robot",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Smart TV HD",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Surveillance Camera",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Joystick Pro",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Pen Holder with Digital Watch - Silver",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Alarm Clock/Twin Bell Table Clock ",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "DIY Acrylic Wall Clock for Living e",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Premium Quality Black Jersey T-Shirt",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Men's tshirt design Yearn",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "T-Shirts Off on Brand ",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Premium Quality - Exclusive ",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Summer Brand New Model Tshirt",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },



    {
        url : "/images/p1.png",
        name : "Product 13",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Product 14",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Product 15",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Product 16",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Product 17",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Product 18",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "Product 19",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Product 20",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Product 21",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 22",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 23",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 24",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },
    
    {
        url : "/images/p1.png",
        name : "Product 25",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p2.png",
        name : "Product 26",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Product 27",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Product 28",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Product 29",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Product 30",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "Product 31",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Product 32",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Product 33",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 34",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 35",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 36",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },



    {
        url : "/images/p1.png",
        name : "Product 37",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p12.png",
        name : "Smart TV HD",
        price : 5000,
        discount : 9000,
        sold  : 99  
    },
    {
        url : "/images/p3.png",
        name : "Product 38",
        price : 4000,
        discount : 5000,
        sold  : 89  
    },
    {
        url : "/images/p4.png",
        name : "Product 39",
        price : 2000,
        discount : 4000,
        sold  : 88  
    },

    {
        url : "/images/p5.png",
        name : "Product 40",
        price : 10000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p6.png",
        name : "Product 41",
        price : 9000,
        discount : 11000,
        sold  : 99  
    },
    {
        url : "/images/p7.png",
        name : "Product 42",
        price : 6000,
        discount : 7000,
        sold  : 89  
    },
    {
        url : "/images/p8.png",
        name : "Product 43",
        price : 200,
        discount : 300,
        sold  : 88  
    },
    {
        url : "/images/p9.png",
        name : "Product 44",
        price : 500,
        discount : 750,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 45",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 46",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 47",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },
    {
        url : "/images/p10.png",
        name : "Product 48",
        price : 200,
        discount : 330,
        sold  : 88  
    },
    {
        url : "/images/p11.png",
        name : "Product 49",
        price : 1000,
        discount : 1100,
        sold  : 88  
    },
    {
        url : "/images/p12.png",
        name : "Product 50",
        price : 2000,
        discount : 3000,
        sold  : 88  
    },
];


function Items({ currentItems }) {
    let dispatch =useDispatch()

    let handleAddtocart =(item,id)=>{
     dispatch(addtocart({
        url : item.url,
        name :item.name,
        price : item.price,
        sold : item.sold,
        quantity:1
     }))
    }
    return (
    <Flex className="flex-wrap justify-center gap-10">
      {currentItems &&
        currentItems.map((item,index) => (
          <div key={index}>
            <div className='w-w376 border border-gray p-8 rounded-xl'>
                    <Image src={item.url} />
                    <Flex className=' flex-col items-center justify-center'>
                            <h3 className='font-pop font-normal text-2xl text-secondary mt-8 mb-2'>{item.name}</h3>
                            <h4 className='font-pop font-bold text-2xl text-primary '>${item.price}.00</h4>
                            <Flex className="gap-x-6 my-6">

                            <div className='flex items-center gap-x-2 relative after:absolute after:h-5 after:w-[1px] after:bg-gray after:top-0 after:-right-4 '>
                                <AiFillStar className='text-[#FFD687]'/>
                                <p className='font-pop font-normal text-small text-gray'>5.0</p>
                            </div>

                            <div>
                                <p className='font-pop font-normal text-small text-gray'>Sold {item.sold}</p>
                            </div>

                        </Flex>
                        <Flex className="items-center gap-x-4">
                        <button onClick={()=>{handleAddtocart(item,index)}} className='bg-primary hover:bg-secondary hover:text-white hover:boder-secondary duration-300 font-pop font-nomal text-small px-7 py-2 text-white rounded-[8px] '>add to cart</button>
                        <AiFillHeart size={20} className='text-gray'/>
                        </Flex>
                    </Flex>
            </div>
          
              
              
          </div>
        ))}
    </Flex>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className="items-end flex-wrap gap-y-5 justify-between">
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel=""
        className='flex gap-x-0.5  md:gap-x-8 mt-16 cursor-pointer'
        pageClassName="bg-secondary px-2 md:px-4 py-1 md:py-2 text-white text-lg rounded-[2px]"
        renderOnZeroPageCount={null}
      />
     
        <p className='font-pop font-normal text-lg text-secondary'>Products from {itemOffset+1} to {endOffset} of {items.length}</p>
      </Flex>
    </>
  );
}

export default Pagination