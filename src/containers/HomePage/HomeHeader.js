import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import logo from '../../assets/logo3.svg'
import "./HomeHeader.scss";
import {LANGUAGES} from "../../utils";
import {changeLanguageApp} from "../../store/actions"
class HomeHeader extends Component {
    changeLanguage = (language) =>{
        this.props.changeLanguageAppRedux(language)
    }
    render() {
        let language = this.props.languagel;
        
        

        return (
            <React.Fragment>
            <div className="home-header-container">
                <div className="home-header-content">
                        <div className="left-content">
                            <i class="fas fa-bars"></i>
                            <img className="header-logo" src = {logo}/>
                            
                        </div>
                        <div className="center-content">
                            <div className="child-contend">
                                <div><b><FormattedMessage id="homeheader.specialty"/> </b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.searchdoctor"/>
                                    
                                </div>
                            </div>
                            <div className="child-contend">
                                <div><b> <FormattedMessage id="homeheader.health-facility"/></b></div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.select-room"/>
                                    
                                    
                                </div>
                            </div>
                            <div className="child-contend">
                                <div><b> <FormattedMessage id="homeheader.doctor"/></b></div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.select-doctor"/>

                                </div>
                            </div>
                            <div className="child-contend">
                                <div><b> <FormattedMessage id="homeheader.fee"/></b></div>
                                <div className="sub-title">
                                    <FormattedMessage id="homeheader.check-health"/>  
                                    
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"></div>
                                <FormattedMessage id="homeheader.support"/> 
                            <div className={language === LANGUAGES.VI?'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN?'language-en active' : 'language-en' }><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                </div>
            </div>
            <div className="home-header-banner">
                <div className="content-up">
                    <div className="title1"><FormattedMessage id="banner.title1"/> </div>
                    <div className="title2"><b><FormattedMessage id="banner.title2"/></b></div>
                    <div className="search">
                        <i class="fas fa-search"></i>
                        <input type="text" placeholder="tìm kiếm"/>
                    </div>
                </div>
                <div className="content-down">
                    <div className="options">
                        <div className="option-child">
                            <div className="icon-child"><i  class="fas fa-hospital"></i></div>
                            <div className="text-child"><b><FormattedMessage id="banner.child1"/></b></div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child"><i class="fas fa-mobile-alt"></i></div>
                            <div className="text-child"><b><FormattedMessage id="banner.child2"/></b></div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child"><i class="fas fa-stethoscope"></i></div>
                            <div className="text-child"><b><FormattedMessage id="banner.child3"/></b></div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child"><i class="fas fa-procedures"></i></div>
                            <div className="text-child"><b><FormattedMessage id="banner.child4"/></b></div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child"><i class="fas fa-search-plus"></i></div>
                            <div className="text-child"><b><FormattedMessage id="banner.child5"/></b></div>
                        </div>
                        <div className="option-child">
                            <div className="icon-child"><i class="fas fa-hospital-alt"></i></div>
                            <div className="text-child"><b><FormattedMessage id="banner.child6"/></b> </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment> 

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
