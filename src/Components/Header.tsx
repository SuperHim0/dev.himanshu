import { Menu} from "@mantine/core"

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
                <a href='/' className='font-family'>घर</a>
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
                    <a href='/'className='' >घर</a>
                    <a href='/about'className='' >मेरे बारे में</a>
                    <a href='/project'className='' >परियोजनाएँ</a>
                    <a href='/tech-stack'className='' >तकनीकी ढांचा</a>
                    <a href='/contact'className='' >संपर्क करें</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header