import search from "../../../assets/svg/search.svg";
import account from "../../../assets/svg/account.svg";
import catalog from "../../../assets/svg/catalog.svg";
import star from "../../../assets/svg/star.svg";

import "./style.scss";


const DesktopHeader = ({ setMenuShow }) => {
    return (
        <header className="cover-header">
            <div className="cover-header-left cover-header-elem">
                <button className="header-menu" onClick={() => setMenuShow(true)} />

                <div className="header-logo" />
            </div>


            <div className="cover-header-right cover-header-elem">
                <div className="header-icons">
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


export default DesktopHeader;