import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <div>
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <Link to={{
                pathname:"/about",
                state:{
                    fromNavigation: true
                }
            }}>About</Link> */}
        </div>
    )   
}
// a 태그는 페이지를 새로고침하여 리액트를 죽인다. 이에 따라 React route가 제대로 기동되지 않으면서 about을 눌러도 about 페이지가 뜨지 않고 페이지가 재로딩되어 home 페이지가 뜬다.
// 따라서 Link component를 사용해야 한다.

export default Navigation;