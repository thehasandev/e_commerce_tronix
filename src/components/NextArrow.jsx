import { AiOutlineRight } from "react-icons/ai";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick} className={`bg-red-500 inline-block p-2 rounded-sm cursor-pointer ${props.className}`}>
            <AiOutlineRight/>
         </div>
    );
  }

  export default NextArrow