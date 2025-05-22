
const Header = () => {
  return (
    <div className='w-full h-16 rounded-xl shadow-md flex justify-center items-center bg-white border-white border-2'>
        <div className='flex md:justify-between justify-center w-full ml-4 mr-4 sm:justify-center'>

        <h2 className='uppercase font-semibold font-family text-xl '>dev.हिमांशु</h2>
        <div className="md:block sm:hidden lg:block hidden ">
            <ul>
                <li className="flex gap-4 font-family">
                    <a href='/'className='' >घर</a>
                    <a href='/about'className='' >मेरे बारे में</a>
                    <a href='/project'className='' >परियोजनाएँ</a>
                    <a href='/tech-stack'className='' >तकनीकी ढांचा</a>
                    <a href='/'className='' >संपर्क करें</a>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header