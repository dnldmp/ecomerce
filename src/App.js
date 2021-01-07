import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="gridContainer">
      <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
             &#9776;
            </button>
            <Link to="/">Danilocommerce</Link>
        </div>
        <div className="headerLinks">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebarCloseButton" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Games</a>
            </li>

            <li>
                <a href="index.html">Shirts</a>
            </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
            
        </div>
      </main>
      <footer className="footer">
        All right reserved.
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
