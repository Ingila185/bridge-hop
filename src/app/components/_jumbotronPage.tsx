import { url } from 'inspector';
import imageTriangle from '../../../public/images/img_image4.png';
export default function Jumbotron(){
return(
<section className="bg-center bg-no-repeat bg-transparent bg-gray-700 bg-blend-multiply">
    <div className="grid grid-cols-2">
    <div className="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none
         text-white md:text-5xl lg:text-6xl">Polygon testnet tokens made simple</h1>
        <p className="mb-8 text-lg font-normal text-left text-white text-left lg:text-xl ">Getting testnet tokens shouldnt be difficult. With BridgeHop, getting testnet tokens is easy as ever.
</p>
        <div className="flex flex-col gap-8 space-y-8 sm:flex-row sm:justify-left sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base 
            font-medium text-center text-white  border border-white rounded-3xl bg-blue-700 hover:bg-blue-800
             focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Bridge
            </a>
            <a href="#" className="inline-flex justify-center bg-blue
             hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base 
             font-medium text-center text-white rounded-3xl border border-transparent hover:bg-gray-
              focus:ring-4 focus:ring-gray-400">
                Connect Wallet
            </a>  
        </div>
    </div>
    <div className="px-10 flex flex-row-reverse items-center align-right ">
    <img className='w-25 h-25  ' src = "/images/imageTriangle.svg"/>


    </div>
    </div>
</section>
)}