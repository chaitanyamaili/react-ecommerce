import logo from './logo.png';
import classes from './App.module.css';
import ProductData from './ProductData';

function App() {
  return (
    <div>
      <header>
        <nav className={classes.TopBar}>
          <img src={logo} alt="LS Clothing" title="LS Clothing" />
        </nav>
      </header>

      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <img src="https://images-na.ssl-images-amazon.com/images/I/61DuuKWZRSL._SX679_.jpg" alt="Product preview" />
        </div>

        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{ProductData.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
