import NavBar from "../components/_NavBar";
import Footer from "../components/_footer";
export default function documentation()
{
    return (
      <div className="px-10 mx-auto flex flex-col gap-y-10 bg-gradient-to-br from-dreamBlack to-dreamBlack h-full">
         <NavBar/>
         <Footer />sdh
            <center> <h1 className = "py-20 text-2xl font-clashdisplay font-extrabold underline text-white">Bridging Testnet Blockchains with Mountain</h1></center>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/**first Col */}
                <div> {/**Image */}
                <img  src = "/images/img_6.png" className="rounded-lg" />
                </div>
                <div >{/**Description */}
                <h1 className="text-white text-xl underline font-extrabold">Overview</h1>
                <p className="text-white py-5 text-md">Bridge-hop utilizes the Mountain smart contract which serves as a bridge between testnet blockchains, specifically Polygon Mumbai and Avalanche Fuji. This contract facilitates the exchange of testnet tokens at a fixed rate and enables the sending of secure messages between the two blockchains. The project leverages the Cross-Chain Interoperability Protocol (CCIP) to achieve seamless cross-chain functionality.</p>
                <h1 className="text-white text-xl underline font-extrabold">Key Benefits</h1>
                <p className="text-white text-md">
                This project fills a crucial void in the blockchain space by simplifying interoperability between testnet blockchains. It provides developers with a practical tool to experiment with cross-chain functionality, ultimately accelerating blockchain research and development. The ease of use, security, and flexibility offered by Mountain and CCIP make it an invaluable resource for blockchain developers and researchers.
                </p>
                </div>
               
            </div>

            <div>
                <h1 className="text-white text-xl underline font-extrabold">How It Works</h1>
                <p className="text-white py-5">
                The Mountain contract, deployed on both Polygon Mumbai and Avalanche Fuji, plays a pivotal role in this cross-chain operation. Testnet tokens can be locked in the contract on one blockchain and unlocked on the other, providing a mechanism for token exchange between the two networks. Furthermore, Mountain acts as an assertive entity, always assuming correctness, while its companion contract, the "Lake," on the target blockchain, must first obtain permission. Once granted, the Lake can access and release the locked tokens or coins. CCIP is utilized for secure message transfer between the two chains, ensuring data integrity and preventing unauthorized access. Developers can experiment with the bridge's functionality, even modifying the fixed exchange rate through a function modifier, offering flexibility for consensus testing in preparation for future iterations.
                </p>
               
            </div>

<Footer />
      </div>
    )
}