import search from "../../../assets/svg/search-gray.svg";
import account from "../../../assets/svg/account-gray.svg";
import catalog from "../../../assets/svg/catalog-gray.svg";
import star from "../../../assets/svg/star-gray.svg";

import "./style.scss";


const MobileHeader = ({ setMenuShow }) => {
    return (
        <header className="mobile__header">
            <div className="mobile__header-left mobile__header-elem">
                <button className="mobile__header-menu" onClick={() => setMenuShow(true)} />

                <div className="mobile__header-logo" />
            </div>


            <div className="mobile__header-right mobile__header-elem">
                <div className="mobile__header-icons">
                    <button style={{
                        backgroundImage: `url(${search})`
                    }} />
                    
                    <button style={{
                        backgroundImage: `url(${account})`
                    }} />

                    <button style={{
                        backgroundImage: `url(${catalog})`
                    }} />

                    <button style={{
                        backgroundImage: `url(${star})`
                    }} />
                </div>
            </div>
        </header>
    )
}


export default MobileHeader;