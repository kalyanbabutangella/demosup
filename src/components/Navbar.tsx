import { AiOutlineBell, AiOutlineSetting } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';
import { FaCreativeCommonsSa } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';


function Navbar() {
  return (
    <nav id="sidebar" className="active">
      <ul className="list-unstyled components mb-5">
        <a href='/notification'>
        <li>
          <AiOutlineBell color='black'  fontSize={25} />
        </li>
        </a>
        <a href='/location'>
        <li>
          <IoLocationOutline color='black' fontSize={25} />
        </li>
        </a>
        <a href='/cc'>
        <li>
          <FaCreativeCommonsSa color='black' fontSize={25} />
        </li>
        </a>
        <a href='/profile'>
        <li>
          <VscSettings color='black' fontSize={25} />
        </li>
        </a>
        <a href='/setting'>
        <li>
          <AiOutlineSetting color='black' fontSize={25} />
        </li>
        </a>
      </ul>
    </nav>
  )
}

export default Navbar