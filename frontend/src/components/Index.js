import React, { Component } from 'react'
import {getPages} from '../redux/actions/index'
import { connect } from 'react-redux';
import logo from '../images/cda-interview-guide.jpg';
import '../styles/components/Index.css';
class Index extends Component {
    componentDidMount() {
        this.props.getPages();
        console.log(this.props.pages);
    }
    
    displayPage() {
        return this.props.pages.map(page => {
            return (
                <div className="page_container">
                    <div className="banner">
                        
                        <img src={logo} alt="search icon" className="banner_image"/>
                        <div className="text_container">
                            <div className="banner_text">CDA Interview Guide</div>
                        </div>
                    </div>
                    <div className="page_content" dangerouslySetInnerHTML={{__html: page.content}}></div>
                </div>
            );
        })
    }
    render() {
        return (
            <div>
                <div>{this.displayPage()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pages: Object.values(state.pages)
    };
}

export default connect(mapStateToProps, {getPages}) (Index);

