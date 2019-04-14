import React, {Component} from "react";
import "./style.css";

class Menu extends Component {
    render() {
        return (
            <div>
               <div className="bottom_div">
                    <button>首页</button>
                    <button>广场</button>
                    <button>订单</button>
                    <button>我的</button>
               </div>
            </div>
        );
    }
}

export default Menu;