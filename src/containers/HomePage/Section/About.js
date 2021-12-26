import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";



class About extends Component {

    render() {
        

        return (
          
            <div className="section-share section-about">
                <div className="section-about-header">
                    Lời khuyên của bác sĩ về sức khỏe
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px" 
                            src="https://www.youtube.com/embed/xMYeJLBIaXI" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>Nhà cung cấp mà quý vị gặp có thể là bác sĩ, 
                            y tá, điều dưỡng, trợ lý bác sĩ hoặc loại hình chuyên gia chăm sóc sức khỏe khác. 
                            Có thể sẽ cần có nhiều cuộc hẹn để đánh giá các triệu chứng tiềm ẩn sau khi mắc COVID và xác định chẩn đoán chính xác để quản lý và điều trị các triệu chứng của quý vị tốt hơn. 
                            Họ có thể hỏi quý vị các câu hỏi liên quan đến tiền sử bệnh, triệu chứng hiện tại và chất lượng cuộc sống của quý vị. Tùy thuộc vào các triệu chứng của quý vị, họ có thể cho tiến hành xét nghiệm để xác định chẩn đoán và lập kế hoạch điều trị.</p>
                    </div>
                </div>
            </div>
            
        );
    }

};

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
