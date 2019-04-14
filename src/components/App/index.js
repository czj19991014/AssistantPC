import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom"

import Registered_user from "../registered_user";
import Menu from "../menu/index";


class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/123' component={Registered_user}/>
                        <Route exact path='/' component={Menu}/>
                    </Switch>

                </Router>
            </div>

        );
    }
}

export default App;



























//
// import React,{Component} from "react";
// import { observer } from "mobx-react";
// import {BrowserRouter as Router,Route,Switch } from "react-router-dom";

// import Login from "../Login";


// import PlanList from "../PlanManagement/PlanList";
// import PlanDetail from "../PlanManagement/PlanDetail";
//
// @observer
// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <Router>
//                     <Switch>
//                         <Route exact path="/" component={PlanList}/>
//                         <Route path={`/plans/:id`}  render={props=><PlanDetail {...props}/>}/>
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }
// export default App;
