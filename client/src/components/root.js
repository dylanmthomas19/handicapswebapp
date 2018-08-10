import React, { Component } from 'react';
import Home from './pages/home';
import Navtabs from './navtabs';
import banner from '../assets/images/2000E-banner.jpg'

class Root extends Component {
    state = {
        currentPage: "Home"
    }
    handlePageChange = page => {
        this.setState({ currentPage: page })
    }
    renderPage = () => {
        switch (this.state.currentPage) {
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