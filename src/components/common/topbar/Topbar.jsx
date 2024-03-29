import React from 'react'
import {MdOutlineManageSearch} from "react-icons/md";
import {FaEthereum} from "react-icons/fa";
import {SiBitcoin, SiLitecoin} from "react-icons/si";
import {TiGroup} from "react-icons/ti";

//import Languages from '../dropdown/Languages';
import Languages from '../../common/dropdown/Languages';



const Topbar = () => {
  return (
    <div className='flex w-full h-24 sm:h-22 md:h-16 lg:h-14 text-white bg-gray-900  border-b border-gray-300'>
      <div className='flex flex-col md:flex-row w-full items-center justify-center'>

        <div className='TOP-PART md:order-2 flex items-center justify-between md:justify-center w-full px-4 '>
          <div className='LEFT-PART flex flex-row p-2 gap-3'>
            
            <div className='CURENCY items-center justify-between w-full px-2 py-1 rounded-md border-2 border-red-700'>
              <ul className='flex gap-3 flex-row' > 
                <li>
                  <a href="https://www.facebook.com/">₺</a>
                </li> 
                <li>
                  <a href="https://www.instagram.com/">$</a>
                </li>
                <li>
                  <a href="https://www.twitter.com/">€</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/">£</a>
                </li>
              </ul>
            </div>
            
            <div className='LANGUAGES'>
              <Languages />
            </div>
          </div>
         
          <div className='BUY-ONLINE flex w-full  justify-end place-items-center'>
            <button type="button" className="w-fit text-xs focus:outline-none text-white  focus:ring-4 font-medium rounded-lg md:text-sm px-2 py-2.5 mr-2 bg-red-600 hover:bg-red-700 focus:ring-red-900">
              BUY ONLINE
            </button>
          </div>
          
        </div>

        <div className='BOTTOM-PART md:order-1 flex flex-row items-center justify-center gap-3 w-full px-4 mx-auto '>

          <div className='USER flex flex-row p-2 gap-3'>
            <div  className='flex w-full md:bg-yellow-800 px-3 md:py-2 rounded-md justify-center items-center'>
              <a className='flex w-full items-center gap-2' href="https://www.facebook.com/">
                <TiGroup className='text-xl md:text-2xl'/>
                <span className='text-sm hidden md:inline-flex'>Login/Register</span>
              </a>
            </div>
          </div>

          <div className='PAYMENT'>
            <ul className='flex flex-row gap-3'>
              <li>
                <a href="https://www.instagram.com/">
                  <SiBitcoin className='text-xl sm:text-base md:text-xl'/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <FaEthereum className='text-xl sm:text-base md:text-xl'/>
                </a>
              </li>
              
              <li>
                <a href="https://www.twitter.com/">
                  <SiLitecoin className='text-xl sm:text-base md:text-xl'/>
                </a>
              </li>
              <span className='text-sm text-gray-300 sm:text-sm  md:text-base sm:hidden xl:inline-flex'>Accepted here</span>
            </ul>
            
          </div>
          
          <div className='SEARCH flex flex-row p-2 gap-3'>
            <div className='flex w-full px-3 rounded-md justify-center items-center'>
              <a className='flex w-full items-center gap-2' href="https://www.facebook.com/">
                <MdOutlineManageSearch className='text-xl md:text-2xl'/>
                <span className='text-sm md:text-lg hidden md:inline-flex'>Search</span>
              </a>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Topbar;