import { AiOutlineLeft } from "react-icons/ai";

function PrviousArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`bg-white inline-block p-2 rounded-sm cursor-pointer ${props.class}`}>
       <AiOutlineLeft/>
      </div>
    );
  }

  export default PrviousArrow