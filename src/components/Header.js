import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
                <div className="container-big">
                    <Link to="/" className="header-logo-link">
                        @thesiv95 portfolio website
                    </Link>
                    <ul className="socials">
                        <li className="socials-item">
                            <a href="https://linktr.ee/thesiv95" target="_blank" rel="noopener noreferrer" className="socials-link gt" title="Link Tree">
                                <img className="header-icon-link" alt="LinkTree" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABwklEQVRIid3Vy25NcRQG8J8mekZKGjroCygjY2kNNSJKSTSEegYi3gADTZlIxAsQ2uARWka9zBg6rduEaKVuDeIY7G872yU5p521K/kn63xrrW/ttfZ/f4fNbjWcxj0s4mvOQrBT6Fwv+Qm8QKPFWcTwWog7cKNCUMdy/Mu4En85sTJvPLUt7XoKfuAieuN/RBe241OwXlyK38BYK/KhJH7HmWDngk1W8h4EG83vk/gW7Hg7U2w8e4ObGMRP7MKMYhWHFaPvU6xpIn4Dh/AwuTtTOxiu1zTf+iz6MIAt2I/dwWeS0xf8APYGm6/U9qe2P/HZvxvsSXBF8QF1YQ7v8BJH0R18SPGNvE3tNoykdiAN56orOpiRVxX3fDXjdic+EewJpuPfT6w7udXaRjh/TzAXcAW3FBLxHEuVCWuYSoNauYLk1IPdxodwzVcblElTWcdihUDFn06O/8Rfpe5xHu69TWlHNHXobLBR/0rFo2ClnIxYg1SMV5qcR48/xW4HPgfrwQVNsbvWzhQdmorawFPFJSjl+mr8JTyr5I1pU65LG1bcilZ/OAs4thbiqnUq9ntXcY2/5NRxRyHTW9dLvjHsF3nEpsCzB9lqAAAAAElFTkSuQmCC"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}
