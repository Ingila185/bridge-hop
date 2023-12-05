import Menu from "./_menu";
import { FaPen, FaRegArrowAltCircleDown } from "react-icons/fa";
import Modal from "./_modal";

export default function SwapChains() {


    return (
        <div className="px-10 pt-24 h-screen w-1/2 mx-auto text-white items-center  ">

            {/*Card For Swap*/}

            <div className="flex flex-col  gap-4  shadow-2xl shadow-shadowBlue rounded-xl overflow-hidden 
             bg-Blue  border-2 border-shadowBlue ">
                <h2 className="font-bold text-lg pt-5 pl-5 ">BRIDGE</h2>
                {/**First Card From */}
                <div className="ml-8 mr-8 rounded-xl overflow-auto bg-Blue   border-2 border-boxBorder">
                    <div className="grid grid-cols-10  px-6 py-4 gap-1">
                        <h2 className="font-bold order-first col-span-5">From</h2>
                        <span className=" text-grey text-sm  text-right col-span-2">Balance:</span>
                        <span className=" text-white text-lg  text-left col-span-2 "> 0.23 ETH</span>
                        <div className="  bg-gradient-to-br 
                        from-maxGradientFrom to-transparent align-center text-left text-blue  w-10 h-10">MAX</div>
                        </div>

                        <div className="flex flex-row px-6 py-4 gap-12">

                        <div className="flex flex-row gap-2">
                        <img className="w-10 h-10" src="/images/img_image8.png" />
                        <Menu />
                        </div>
                        <div className="grid grid-cols-1 text-right border-2 border-boxBorder w-full rounded">
                            <span className="pr-2 text-lg font-bold ">2.00</span>
                            <span className="pr-2 text-lg font-semibold text-grey">-3238 USD</span>

                        </div>
                    </div>
                </div>

                {/**Separator */}
 
                <div>
                    <div className="h-5 mx-10 pl-5 border-b-2 border-boxBorder text-lg text-center">
                        <span className="bg-dreamBlack px-10" ><FaRegArrowAltCircleDown style={{ color: "blue", display: "inline-block" }} /></span>
                    </div>


                </div>


                {/**second card To */}
                <div className="ml-8 mr-8 rounded-xl overflow-auto  bg-Blue  border-2 border-boxBorder">
                    <div className="grid grid-cols-12 gap-1 px-6 py-4">
                        <h2 className="font-bold order-first  col-span-8">To</h2>
                        <span className="text-grey text-sm   text-right col-span-2">Balance</span>
                        <span className="text-white text-lg   text-right col-span-2">0.23 LINK</span>

                    </div>
                <div className="flex flex-row px-6 py-4 gap-2">

                        <img className="w-10 h-10" src="/images/img_image8.png" />
                        <Menu />
                        <div className="grid grid-cols-1 text-right  border-2 border-boxBorder w-full rounded">
                            <span className="pr-2 text-lg font-bold ">2.00</span>
                            <span className="pr-2 text-lg font-semibold text-grey">-3238 USD</span>
                        </div>

                </div>
                </div>

                {/** Static spans slippage etc*/}

                <div className="px-10 flex flex-row gap-24">
                    <span className="text-grey text-xs">You will receive</span>
                    <span>  1.95 LINK</span>
                    <span className=" text-grey text-xs"> Slippage Tolerance  <FaPen style={{ color: "blue", display: "inline-block" }} /> </span>

                    <span>1%</span>

                </div>

                {/**button */}
                <Modal />

            </div>


        </div>
    )
}
