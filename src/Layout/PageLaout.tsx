
import Header from '../Components/Header'

import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

const PageLaout = () => {
  return (
    <div className="">
  <div className="w-full max-w-[1200px] px-4 md:px-8 mx-auto">
    <Header />
    <Outlet />
  </div>

  <div className="w-full border-t-2 border-gray-300 mt-10" />

  <div className="w-full max-w-[1200px] px-4 md:px-8 mx-auto">
    <Footer />
  </div>
</div>
  )
}

export default PageLaout