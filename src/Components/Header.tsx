import { Menu} from "@mantine/core"
import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className='w-full h-16 rounded-xl shadow-md flex justify-center items-center bg-white border-white border-2'>
        <div className='flex md:justify-between justify-center w-full ml-4 mr-4 sm:justify-center'>


        <Menu>

        <Menu.Target>
        <h2 className='uppercase font-semibold font-family text-xl '><a href="#"> dev.हिमांशु </a> </h2>
        </Menu.Target>
        <Menu.Dropdown className="block sm:hidden">
            <Menu.Item>
                <NavLink to={'/'} className='font-family'>घर</NavLink>
            </Menu.Item>
            <Menu.Item>
                <a href='/about' className='font-family'>मेरे बारे में</a>
            </Menu.Item>
            <Menu.Item>
                <a href='/project' className='font-family'>परियोजनाएँ</a>
            </Menu.Item>
            <Menu.Item>
                <a href='/tech-stack' className='font-family'>तकनीकी ढांचा</a>
            </Menu.Item>
            <Menu.Item>
                <a href='/contact' className='font-family'>संपर्क करें</a>
            </Menu.Item>
        </Menu.Dropdown>
        </Menu>


        <div className="md:block sm:hidden lg:block hidden ">
            <ul>
                <li className="flex gap-4 font-family">
                    <NavLink to='/'className='' >घर</NavLink>
                    <NavLink to='/about'className='' >मेरे बारे में</NavLink>
                    <NavLink to='/project'className='' >परियोजनाएँ</NavLink>
                    <NavLink to='/tech-stack'className='' >तकनीकी ढांचा</NavLink>
                    <NavLink to='/contact'className='' >संपर्क करें</NavLink>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header