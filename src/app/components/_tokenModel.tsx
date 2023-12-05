'use client';
import React from "react";

export default function TokenModel()
{
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
          <button
            className="bg-transparent rounded-lg  h-auto w-full"
            type="button"
            onClick={() => setShowModal(true)}
          >
           ETH
           <svg className="w-2.5 h-2.5 " aria-hidden="true" fill="none" viewBox="0 0 10 5">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
          </button>
          
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden 
                overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-80/100 my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="rounded-xl border-2 border-cardBorder shadow-lg relative
                   flex flex-col w-full bg-dreamBlack outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between pl-5 pt-5  border-solid ">
                      <h3 className="text-md font-semibold">
                        Select a token
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-white opacity-0
                         float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-white opacity-5 h-6 w-6 
                        text-2xl block outline-none focus:outline-none">
                         X
                        </span>
                      </button>
                      <div>
                     
    
    
                      </div>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto border-b-2 border-boxBorder ">
                    <input type="text" id="voice-search" 
                      className="bg-dreamBlack  text-black  border-2 border-boxBorder
                      text-sm rounded-2xl focus:ring-shadowBlue focus:border-shadowBlue 
                       w-full ps-4 p-2  " 
                       placeholder="Select name or paste address here"
                       />
                      <p className=" text-grey text-xs leading-relaxed pt-4">
                       Popular Tokens
                      </p>
                      <div className="pt-4 flex flex-row gap-2 justify between"> 
                       <span className="rounded-3xl w-10 h-10 bg-white">
                       </span><span className="pt-2 text-sm">ETH</span>
                       <span className="rounded-3xl w-10 h-10 bg-white">
                       </span><span className="pt-2 text-sm">ETH</span>
                       <span className="rounded-3xl w-10 h-10 bg-white">
                       </span><span className="pt-2 text-sm">ETH</span>
                       <span className="rounded-3xl w-10 h-10 bg-white">
                       </span><span className="pt-2 text-sm" >ETH</span>
                       <span className="rounded-3xl w-10 h-10 bg-white">
                       </span><span className="pt-2 text-sm">ETH</span>
    
                      </div>
                    </div>
    
                    <div className="pt-4 pb-4 flex flex-col gap-8 justify-between">
                    <div className="pl-6 flex flex-row gap-2 justify between"> 
                    <span className="rounded-3xl w-10 h-10 bg-white"></span>
                    <span className="pt-2 text-sm">ETH</span></div>
                    <div className="pl-6 flex flex-row gap-2 justify between"> 
                    <span className="rounded-3xl w-10 h-10 bg-white"></span>
                    <span className="pt-2 text-sm">ETH</span></div>
                    <div className="pl-6 flex flex-row gap-2 justify between"> 
                    <span className="rounded-3xl w-10 h-10 bg-white"></span>
                    <span className="pt-2 text-sm">ETH</span></div>
                    <div className="pl-6 flex flex-row gap-2 justify between"> 
                    <span className="rounded-3xl w-10 h-10 bg-white"></span>
                    <span className="pt-2 text-sm">ETH</span></div>
            
                        
    
    
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end border-t-2 
                    border-t-boxBorder border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                       Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      );
}