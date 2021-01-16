import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import foto from './foto.jpg';
import sala from './sala.jpg';

class Menu extends React.Component {
  render() {
    return (<div id="menu_visible" className="menu-visible">
        <a href="#" > Home</a>
        <a href="#" > Collection</a>
        <a href="#" > About </a>
        <a href="#" > Contact </a>
      </div>);
  }  
}


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {showMenu: false};
  }

  clicMenu = () =>{
    if(this.state.showMenu){
      this.setState({ showMenu:false});
      document.getElementsByClassName("content")[0].style.display="flex";
      document.getElementsByClassName("navbar-logo")[0].style.display="block";
      document.getElementById("menu_visible").style.display="none";
      document.getElementsByClassName("navbar")[0].style.justifyContent ="space-between";  

    }else{
      this.setState({ showMenu:true});
      document.getElementsByClassName("content")[0].style.display="none";
      document.getElementsByClassName("navbar-logo")[0].style.display="none";
      document.getElementById("menu_visible").style.display="flex";
      document.getElementsByClassName("navbar")[0].style.justifyContent ="flex-end";  
    }
  
  }
  render(){

    let hamburger = <div id="btn_h" onClick={this.clicMenu} className="menu"> <div className="b1" ></div> <div className="b2"></div><div className="b3"></div> </div>;
    if(this.state.showMenu){
      hamburger = <div id="btn_h" onClick={this.clicMenu} className="menu change"> <div className="b1" ></div> <div className="b2"></div><div className="b3"></div> </div>;
    }
    return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-logo">
          <p>This interior</p>
        </div>
        <div className="navbar-bar">
          <a className="item" href="#" > Home</a>
          <a className="item" href="#" > Collection</a>
          <a className="item" href="#" > About </a>
          <a className="item" href="#" > Contact </a>
          {hamburger}
        </div>
      </div>
      <div className="content">
        <div className="info">
          <h1>Modern interior</h1>
          <p>A full service residential & <br></br>
          commercial interior design and<br></br>
          staging company offering professional<br></br> 
          organazing & eco-services.</p>
          <a className="btn">Read more</a>
        </div>
        <div className="content-img">
          <img className="image" width="100%" src={sala}></img>
          <div className="perfil">
            <div className="perfil-det">
              <img className="img-perfil" src={foto}></img>
              <p>Aliza Webber<br></br>
              Interior designer</p>
            </div>  
            <div>
              <p className="description">Designed in 2020 by<br></br> Aliza Webber</p>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
  }
}
export default App;
