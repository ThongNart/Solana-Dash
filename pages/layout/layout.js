import MainHeader from './main_header';

function Layout(props){
    return(
        <div>
            <MainHeader/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;