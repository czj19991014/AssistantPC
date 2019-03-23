import React, {Component} from "react";
import "./style.css";
import {Link} from "react-router-dom";
import "../Alumni_recommendation/index";

class Registered_user extends Component {
    render() {
        return (
            <div>
                <nav className='nav'>
                    <a href="" className='nav_span' style={{float: "left"}}> 优秀校友管理 </a>
                    <Link to='/Alumni_recommendation'>
                        <a href="" className='nav_span' style={{float: "left"}}> 校友推荐表 </a>
                    </Link>
                    <a href="" className='nav_span' style={{float: "left"}}> 优秀校友信息 </a>
                    <a href="" className='nav_span' style={{float: "right"}}> 退出登录 </a>
                    <a href="" className='nav_span' style={{float: "right"}}> 返回主界面 </a>
                    <a href="" className='nav_span' style={{float: "right"}}> 管理员A </a>
                </nav>
                <div className="registered_div1">
                    <div style={{paddingTop: "10px"}}>
                        <span style={{paddingLeft: "30px"}}>筛选：</span>
                        <input type="radio" name="sex" id="male"/>
                        <label style={{paddingRight: "10px"}}>已审核</label>
                        <input type="radio" name="sex" id="no"/>
                        <label style={{paddingRight: "10px"}}>未审核</label>
                        <input type="radio" name="sex" id="ing"/>
                        <label style={{paddingRight: "1100px"}}>审核中</label>
                        <button className="button" type="download">下载</button>
                    </div>
                    <div className="registered_div2">
                        <div className="registered_div2">
                            <span className="registered_span" style={{paddingLeft: "150px"}}> 姓名 </span>
                            <span className="registered_span"> 职务 </span>
                            <span className="registered_span"> 工作单位 </span>
                            <span className="registered_span"> 电话 </span>
                            <span className="registered_span"> 状态 </span>
                        </div>
                        <div className="registered_div2">
                            <span className="registered_span" style={{paddingLeft: "150px"}}> 陈xx </span>
                            <span className="registered_span"> 董事长 </span>
                            <span className="registered_span"> 腾讯 </span>
                            <span className="registered_span"> 15200376752 </span>
                            <span className="registered_span"> 审核成功 </span>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Registered_user;