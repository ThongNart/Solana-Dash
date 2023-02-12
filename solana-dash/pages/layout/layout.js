import { Fragment } from "react";
import MainHeader from './main_header';

function Layout(props){
    return(
        <div className="bg-black">
            <MainHeader/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;