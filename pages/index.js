import Head from "next/head"
import Image from "next/image"
import Logo from "../public/assets/images/Logo.png"

const Home = () => (
  <div>
    <Head>
      <title>Proyecto Savage</title>
    </Head>
    <Image className="logo" src={Logo} alt="Proyecto Savage" />

    <h3>Próximamente</h3>
  </div>
)

export default Home
