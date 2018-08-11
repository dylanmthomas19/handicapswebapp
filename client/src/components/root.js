import React, { Component } from 'react';
import Home from './pages/home';
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import History from './pages/history';
import Motorhome from './pages/motorhome';
import Blog from './pages/blog';
import Navtabs from './navtabs';
import banner from '../assets/images/2000E-banner.jpg';

class Root extends Component {
    state = {
        currentPage: "Home"
    }
    handlePageChange = page => {
        this.setState({ currentPage: page })
    }
    renderPage = () => {
        switch (this.state.currentPage) {
            case "Gallery":
                return <Gallery />
            case "Contact":
                return <Contact />
            case "History":
                return <History />
            case "Motorhome":
                return <Motorhome />
            case "Blog":
                return <Blog />
            default:
                return <Home />
        }
    }
    render() {
        return (
            <div className="Root">
                <img id="banner" src={banner} alt="banner" />
                <Navtabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        );
    }
}

export default Root;