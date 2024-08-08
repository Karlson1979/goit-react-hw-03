
import { IoIosContact } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
const Contact = ({name,number}) => {
  return (
    <div>
        <p> <IoIosContact /> name: {name}</p>
        <p> <BsTelephoneFill /> number: {number}</p>
        <button type='button'><MdDelete /> Delete</button>
    </div>
  )
}
export default Contact