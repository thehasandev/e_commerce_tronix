import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Flex from './Flex';

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
        name : "Product 14",
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
];

function Items({ currentItems }) {
  return (
    <Flex className="flex-wrap justify-center gap-10">
      {currentItems &&
        currentItems.map((item,index) => (
          <div key={index}>
              <Product src={item.url} name={item.name} price={item.price} sold={item.sold}/>
          </div>
        ))}
    </Flex>
  );
}

function Pagination({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Pagination