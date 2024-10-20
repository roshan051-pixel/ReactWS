// import React, { Component } from "react";
// import './Header.css'

// const Header = function (props) {

//     const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color: '#fff', textTransform: 'uppercase'};

//     return (
//         <div style={headerStyle}>
//             Phone Directory - {props.heading}  - Instructor = {props.instructor} {props.heading}
//         </div>
//     )
// }
// export default Header;


import React, { Component } from "react";
import './Header.css'

class Header extends Component {
    render(){
        return (
            <div className="header">
            My Directory - {this.props.heading}
            </div>
        )
    }
}
export default Header;
