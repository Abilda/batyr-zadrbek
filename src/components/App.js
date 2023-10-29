import logo from '../logo.svg';
import './App.css';
import DetailedGuitarInfo from './DetailedGuitarInfo';
import GuitarItem from './GuitarItem';


function App() {
  const hrStyle = {
    border: '1px solid #ccc',  /* Border style and color */
    margin: '10px 0',           /* Margin above and below the line */
  };

  return (
    <div className="App">
{/*      <header className="App-header">
        <div id="first-row" className="custom-header">
          <img src=""/>
          <p id="PhoneNumber">Call some number 1221</p>
        </div>
        <div id = "menu">
          <div className="menuElement">
            Element 1
          </div>
          <div className="menuElement">
            <input type='text' className='SearchBox' value="Search by model/type/name"></input>
          </div>
          <div className="menuElement">
            <a href="/">Login/Register</a>
          </div>          
        </div>
      </header>
      <div id="Categories">
        <div className='guitarCategories'>
          <div className='guitarCategoryFirst'>Latest arrivals</div>
          <div className='guitarCategory'>category 2</div>
          <div className='guitarCategory'>category 3</div>
          <div className='guitarCategory'>category 4</div>
          <div className='guitarCategoryLast'>Other</div>
        </div>
        <div className='shoppingCartAndprofile'>Shopping Cart</div>
      </div>
        
      <div id='changingImage'>

  </div> */}
       <hr style={hrStyle}></hr>
        <p className='left-element'>Filters: </p>
        <button className='right-element'>Clear filter</button>
      <hr style={hrStyle}></hr>
        Filters: 
        <select value="Filter by"> 
            <option name="first"> option1 </option>
            <option name="second"> option2 </option>
        </select>
        <select value="Per page"> 
            <option name="first"> option1 </option>
            <option name="second"> option2 </option>
        </select>
      <hr style={hrStyle}></hr> 
      <body>
          <div className="guitarList">
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
          <GuitarItem></GuitarItem>
        </div> 
        <DetailedGuitarInfo></DetailedGuitarInfo>
      </body>
    </div>
  );
}

export default App;
