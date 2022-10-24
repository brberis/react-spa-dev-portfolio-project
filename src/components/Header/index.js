import Navigation from '../Navigation';

function Header(props) {

  return (
    <header>
      <div>
        <h1>Cristobal A Barberis</h1>
      </div>
      <Navigation
        {...props}
        ></Navigation>  
      </header>
  );
}

export default Header;
