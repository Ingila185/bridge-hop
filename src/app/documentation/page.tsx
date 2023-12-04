export default function documentation()
{
    return (
      <div className="px-10 mx-auto  flex flex-col justify-between gap-y-10 bg-gradient-to-br from-dreamBlack to-dreamBlack h-full">
            <center>
                 <h1 className = "py-20 text-sm lg:text-xs  xl:text-lg font-extrabold underline text-white">
                    Bridging Testnet Blockchains with Mountain
                 </h1></center>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 " >
                {/**first Col */}
                <div className="xl:mr-8 2xl:mr-8 lg:mr-8 md:mr-4"> {/**Image */}
                <img  src = "/images/img_6.png" className="rounded-lg w-full h-full" />
                </div>
                <div className="">{/**Description */}
                <h6 className="text-white  text-md lg:text-md  xl:text-lg underline font-extrabold">Overview</h6>
                <p className="text-white py-5 text-sm lg:text-md xl:text-md ">Bridge-hop utilizes the Mountain smart contract which serves as a bridge between testnet blockchains, specifically Polygon Mumbai and Avalanche Fuji. This contract facilitates the exchange of testnet tokens at a fixed rate and enables the sending of secure messages between the two blockchains. The project leverages the Cross-Chain Interoperability Protocol (CCIP) to achieve seamless cross-chain functionality.</p>
                <h1 className="text-white text-md  text-2xl lg:text-md underline font-extrabold xl:text-lg ">Key Benefits</h1>
                <p className="text-white py-5 text-sm lg:text-md xl:text-md ">
                This project fills a crucial void in the blockchain space by simplifying interoperability between testnet blockchains. It provides developers with a practical tool to experiment with cross-chain functionality, ultimately accelerating blockchain research and development. The ease of use, security, and flexibility offered by Mountain and CCIP make it an invaluable resource for blockchain developers and researchers.
                </p>
                </div>
               
            </div>

            <div>
                <h1 className="text-white text-md xl:text-xl underline font-extrabold">How It Works</h1>
                <p className="text-white text-sm py-5 xl:text-md">
                The Mountain contract, deployed on both Polygon Mumbai and Avalanche Fuji, plays a pivotal role in this cross-chain operation. Testnet tokens can be locked in the contract on one blockchain and unlocked on the other, providing a mechanism for token exchange between the two networks. Furthermore, Mountain acts as an assertive entity, always assuming correctness, while its companion contract, the "Lake," on the target blockchain, must first obtain permission. Once granted, the Lake can access and release the locked tokens or coins. CCIP is utilized for secure message transfer between the two chains, ensuring data integrity and preventing unauthorized access. Developers can experiment with the bridge's functionality, even modifying the fixed exchange rate through a function modifier, offering flexibility for consensus testing in preparation for future iterations.
                </p>
               
            </div>

      </div>
    )
}