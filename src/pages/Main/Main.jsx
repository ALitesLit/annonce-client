import Collection from "../../components/main-page/Collection/Collection";
import Cover from "../../components/main-page/Cover/Cover";
import Footer from "../../components/main-page/Footer/Footer";
import Soon from "../../components/main-page/Soon/Soon";
import Zhaket from "../../components/main-page/Zhaket/Zhaket";

import "./style.scss";


const Main = () => {
    return (
        <main className="main">
            <Cover />

            <Collection />

            <Soon />

            <Zhaket />

            <Footer />
        </main>
    )
}


export default Main;