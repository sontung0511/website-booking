import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";




class HomeFooter extends Component {

    render() {
        

        return (
          
            <div className="home-footer">
                <p>&copy;Tư vấn của bác sĩ. <a target="black" href="https://www.youtube.com/watch?v=WvI2NWALdhE"> 
                &#8594; more information &#8594;</a></p>
            </div>
        );
    }

};

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
