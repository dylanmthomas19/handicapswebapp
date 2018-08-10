import React, { Component } from 'react';
import Home from './pages/home';
import Navtabs from './navtabs';

class Root extends Component {
    state = {
        currentPage: "home"
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
                {this.renderPage()}
                <Navtabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
            </div>
        );
    }
}

export default Root;