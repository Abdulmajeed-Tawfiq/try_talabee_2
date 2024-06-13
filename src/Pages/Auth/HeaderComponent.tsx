import Translate from "../../Components/Utils/Translate";

const AuthHeader = () => {
    return(
        
        <div className='auth_header'>
            <img  src='/Logo/Talabee2.png' style={{width:125}} className='login_logo'  alt='LOGO'/>
            <Translate  />
        </div>
    )
}

export default AuthHeader;


export const Header = () =>{
    return(
        <header className="header_component">
            <a href="/">
                <img src="/Logo/Talabee2.png" alt="Talabee" width={200} />
            </a>
            <Translate  />
        </header>
    )
}