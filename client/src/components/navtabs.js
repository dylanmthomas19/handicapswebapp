import React from "react";
import fbIcon from '../assets/images/if_fb_icon.png';
import ytIcon from '../assets/images/if_yt_icon.png';

const NavTabs = props => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Home")}
                    className={
                        props.currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Superarm Gallery")}
                    className={
                        props.currentPage === "Superarm Gallery" ? "nav-link active" : "nav-link"
                    }
                >
                    SA Gallery
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Motorhome")}
                    className={
                        props.currentPage === "Motorhome" ? "nav-link active" : "nav-link"
                    }
                >
                    SA 124 Motorhome Sprinter
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("History")}
                    className={
                        props.currentPage === "History" ? "nav-link active" : "nav-link"
                    }
                >
                    History
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Blog")}
                    className={
                        props.currentPage === "Blog" ? "nav-link active" : "nav-link"
                    }
                >
                    Blog
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Contact")}
                    className={
                        props.currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                >
                    Contact
                </a>
            </li>
            <a href="https://www.facebook.com/Handicaps-Inc-SuperarmLiftcom-69384879635/" target="_blank" rel="noopener noreferrer">
                <img id="fbIcon" src={fbIcon} alt="Facebook Link" />
            </a>
            <a href="https://www.youtube.com/channel/UCzb0X3OYp16FRuW4b32yZ7Q" target="_blank" rel="noopener noreferrer">
                <img id="ytIcon" src={ytIcon} alt="Youtube Link" />
            </a>
        </ul>
    </div>
);

export default NavTabs;
