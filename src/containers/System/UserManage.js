import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import {getAllUsers} from '../../services/userService';
//import  ModalUser from './ModalUser';
class UserManage extends Component {

    constructor(props){
        super(props);
        this.state = {
            arrUsers: []
        }
    }
    async componentDidMount(){
        let response = await getAllUsers('ALL');
        if(response && response.errcode === 0){
            this.setState({
                arrUsers: response.users
            })
        }
    }
     


    render() {
       
        let arrUsers = this.state.arrUsers;
        
        return (
            <div className='users-container'>
                
                
                    <div className='title text-center'> manage user with ST</div>
                    <div className="mx-1">
                        <button className="btn btn-primary px-3"
                        
                        ><i className="fas fa-plus"></i>
                        add new user</button>
                    </div>
                    <div className='user-table mt-3 mx-1'>
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>email</th>
                                    <th>First name</th>
                                    <th>last name</th>
                                    <th>Adress</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {arrUsers && arrUsers.map ((item, index) =>{
                                console.log('st check map', item, index)
                                return(
                                    <thead>
                                        <tr key={index}>
                                            
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.adress}</td>
                                            <td>
                                                <button className='btn-edit'><i className="fas fa-pencil-alt"></i></button>
                                                <button className='btn-delete'><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    </thead>    
                                )
                            })
                            }
                            
                        </table>
                    </div>
                
                
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
