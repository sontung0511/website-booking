import { Modal } from "bootstrap";
import { ModalBody, ModalHeader, ModalFooter,button } from "reactstrap";
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';


class ModalUser extends Component {

    
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
    }
    toggle = () =>{

    }

    render() {
        return (
           <div>hello user</div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
