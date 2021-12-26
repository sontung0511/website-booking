import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Slider from "react-slick";
import './MedicalFacility.scss';



class HandBook extends Component {

    render() {
        
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
           
        }

        return (
           <div className="section-share section-outstanding-doctor">
               <div className="section-container">
                   <div className="section-header">
                       <span className="title-section">Cẩm nang</span>
                       <button className="btn-section">xem thêm</button>
                   </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className ="bg-image section-outstanding-doctor " />
                                    </div>
                                    <div className="position text-center">
                                        <div>giáo sư hỏi</div>
                                        <div>cơ xương</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className ="bg-image section-outstanding-doctor " />
                                    </div>
                                    <div className="position text-center">
                                        <div>giáo sư hỏi</div>
                                        <div>cơ xương</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className ="bg-image section-outstanding-doctor " />
                                    </div>
                                    <div className="position text-center">
                                        <div>giáo sư hỏi</div>
                                        <div>cơ xương</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className ="bg-image section-outstanding-doctor " />
                                    </div>
                                    <div className="position text-center">
                                        <div>giáo sư hỏi</div>
                                        <div>cơ xương</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className ="bg-image section-outstanding-doctor " />
                                    </div>
                                    <div className="position text-center">
                                        <div>giáo sư hỏi</div>
                                        <div>cơ xương</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className ="bg-image section-outstanding-doctor " />
                                    </div>
                                    <div className="position text-center">
                                        <div>giáo sư hỏi</div>
                                        <div>cơ xương</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
           </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
