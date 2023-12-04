import Menu from "./_menu";
import { FaPen, FaRegArrowAltCircleDown } from "react-icons/fa";
import Modal from "./_modal";

export default function SwapChains()
{
    
    
    return (
        <div className=  "gap-4 mx-auto text-white items-center  ">

            {/*Card For Swap*/}

            <div className="flex flex-col  gap-8  shadow-2xl shadow-shadowBlue rounded-xl overflow-hidden 
             bg-Blue  border-2 border-shadowBlue ">
    <h2 className="font-bold text-lg pt-5 pl-5 ">BRIDGE</h2>
        {/**First Card From */}
        <div className="ml-8 mr-8 rounded-xl overflow-auto bg-Blue   border-2 border-boxBorder">
  <div className="flex flex-row gap-8  px-6 py-4">
    <h2 className="font-bold order-first">From</h2>
    <span className="text-grey text-sm  align-right">Balance</span>
    <span className="text-white text-lg  align-right">0.23 LINK</span>
    <div className=" bg-gradient-to-br from-maxGradientFrom to-transparent text-blue p-1 w-auto h-10">MAX</div>    
    <img className = "w-10 h-10" src = "/images/img_image8.png" />
    <Menu />
    <div className="flex flex-col-reverse grow border-2 border-boxBorder w-2/3 rounded">
        <span className="p-2 text-lg font-bold ">2.00</span>
        <span className="p-2 text-lg font-semibold text-grey">-3238 USD</span>

    </div>

</div>
        </div>
        <div>
        <div className="h-5 mx-10 pl-5 border-b-4 border-blue text-lg text-center">
    <span className="bg-dreamBlack px-10" ><FaRegArrowAltCircleDown style = {{color:"blue", display: "inline-block"}}/></span>
</div>

            
            </div>
  

        {/**second card To */}
        <div className="ml-8 mr-8 rounded-xl overflow-auto  bg-Blue  border-2 border-boxBorder">
  <div className="flex flex-row gap-8 px-6 py-4">
  <h2 className="font-bold order-first">To</h2>
    <span className="text-grey text-sm  align-right">Balance</span>
    <span className="text-white text-lg  align-right">0.23 LINK</span>
    <img className = "w-10 h-10" src = "/images/img_image8.png" />
    <Menu />
    <div className="flex flex-col-reverse grow border-2 border-boxBorder w-2/3 rounded">
        <span className="p-2 text-lg font-bold ">2.00</span>
        <span className="p-2 text-lg font-semibold text-grey">-3238 USD</span>


    </div>
</div>

        </div>
        <div className="px-10 flex flex-row gap-24">
<span className="text-grey text-xs">You will receive</span>       
<span>  1.95 LINK</span> 
<span className=" text-grey text-xs"> Slippage Tolerance  <FaPen style = {{color: "blue" , display:"inline-block"}} /> </span>

<span>1%</span> 

        </div>
 
{/**button */} 
<Modal />

</div>


        </div>
    )
}
