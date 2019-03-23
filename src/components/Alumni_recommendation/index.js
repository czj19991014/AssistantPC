import React, {Component} from "react";
import "./style.css";

class Alumni_recommendation extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>npm
                    <a href="" className='nav_span' style={{float: "left"}}> 校友管理 </a>
                    <a href="" className='nav_span' style={{float: "left"}}> 注册用户管理 </a>
                    <a href="" className='nav_span' style={{float: "left"}}> 校友档案 </a>
                    <a href="" className='nav_span' style={{float: "right"}}> 退出登录 </a>
                    <a href="" className='nav_span' style={{float: "right"}}> 返回主界面 </a>
                    <a href="" className='nav_span' style={{float: "right"}}> 管理员A </a>
                </nav>
                <div className="recommendation_div1">

                    <button className="button" type="download">下载</button>

                    <div className="recommendation_div2">
                        <div className="recommendation_div2">
                            <span className="recommendation_span" style={{paddingLeft: "150px"}}> 姓名 </span>
                            <span className="recommendation_span"> 毕业年份 </span>
                            <span className="recommendation_span"> 所在单位 </span>
                            <span className="recommendation_span"> 职业 </span>
                            <span className="recommendation_span"> 电话 </span>
                        </div>
                        <div className="recommendation_div2">
                            <span className="recommendation_span" style={{paddingLeft: "150px"}}> 陈xx </span>
                            <span className="recommendation_span"> 2022 </span>
                            <span className="recommendation_span"> 腾讯 </span>
                            <span className="recommendation_span"> 董事长 </span>
                            <span className="recommendation_span"> 15200376752 </span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Alumni_recommendation;