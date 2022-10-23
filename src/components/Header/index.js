import Navigation from '../Navigation';
import avatar from '../../assets/images/avatar.png'; // with import


function Header(props) {

  return (
    <header>
      <div>
        <img src={avatar} alt="Avatar" />
        <h1>Cristobal A Barberis</h1>
      </div>
      <Navigation
        {...props}
        ></Navigation>  
      </header>
  );
}

export default Header;
