
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import {getAllCodeService} from "../../../services/userService";

class UserRedux extends Component {

    
    constructor(props){
        super(props);
        this.state = {
            genderArr:[]
        }
    }
     async componentDidMount() {
        try{
            let res = await getAllCodeService('gender');
            
            if(res && res.errCode === 0){
                this.setState({
                    genderArr: res.data
                })
            }
            console.log('sontung check response: ',res)
        }catch(e){
            console.log(e)
        }
    }
    

    

    render() {
        console.log('check',this.state)
        let genders = this.state.genderArr;
        return (
            <div className="user-redux-container">
                
                <div className="title">
                    React redux
                </div>
                <div className="user-redux-body">
                    <div className="container"> 
                        <div className="row">
                            <div className='col-12 my-3'><FormattedMessage id="manage.add"/></div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.email"/></label>
                                <input className="form-control" type="email"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.password"/></label>
                                <input className="form-control" type="password"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.first-name"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.last-name"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.phone"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-9">
                                <label><FormattedMessage id="manage.address"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.gender"/></label>
                                <select  class="form-control">
                                    {genders && genders.length > 0 && genders.map((item, index)=>{
                                            return(
                                                <option key={index}>{item.valuevi}</option>

                                            )
                                        })
                                    }
                                        
                                </select>
    
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.roleid"/></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
    
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.position"/></label>
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
    
                            </div>
                            <div className="col-3">
                                <label><FormattedMessage id="manage.image"/></label>
                                <input className="form-control" type="text"/>
                            </div>
                            <div className='col-12 mt-3'>
                                <button className="btn btn-primary"><FormattedMessage id="manage.save"/></button>

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
