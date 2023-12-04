import Image from 'next/image'
import NavBar from './components/_NavBar'
import Jumbotron from './components/_jumbotronPage'

export default function Home() {
  return (
    <div className="flex  flex-col  justify-between bg-[url('/images/img_image6.png')]
      bg-cover bg-no-repeat bg-center bg-dreamBlack">
    <Jumbotron />
    </div>
  )
}
