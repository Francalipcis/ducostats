import React, {Component} from 'react';
import './css/App.css';
import imgHeader from './img/duco.png'
import Statistic from './props/statistic';
import LineChart from './props/lineChart';

export default class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      resp: {},
      userStatistics: {},
      isFetch: true,

      //user statistics
      obtined: true,
      username:"",
      userBalance:"",
      created:"",
      verifed:"",
      stake:"",
    }

  }



  
  
  //``
  //obtener estadisticas de duino coin
  componentDidMount () {
    //constante de url
    const url = 'https://server.duinocoin.com/statistics';
    //fetc
    fetch(url)
    .then(response => response.json())
    .then(statisticsJson => this.setState({resp: statisticsJson, isFetch: false}))
  }
  
  

  //funcion de obtener usuario
  getUser = (e) => {
    console.log("submit")
    
    let user = document.getElementById('inputUser').value;
    
    const url = `https://server.duinocoin.com/balances/${user}`;
    fetch(url)
    .then(response => response.json())
    .then(userJson => this.setState({userStatistics: userJson, obtined: false}))
    
  }
  
  
  render(){
    
    if(this.state.isFetch) {
      return 'collecting data...'
    }
    
    if(this.state.obtined === false){
      this.setState({
        username: this.state.userStatistics.result.username,
        userBalance: this.state.userStatistics.result.balance,
        verifed: this.state.userStatistics.result.verified,
        created: this.state.userStatistics.result.created,
        stake: this.state.userStatistics.result.stake_amount,
      })
      
    }
    
    
    return (
      <div className="App">
        <header>
          <img src={imgHeader}  alt='imgHeader'/>
          <h2>Duino-Coin Statistics</h2>
        </header>
        <div className='body'>
          
          <div className='statistics'>
            <Statistic title="Net Hashrate" value={this.state.resp["DUCO-S1 hashrate"]}></Statistic>
            <Statistic title="Users registered" value={this.state.resp["Registered users"]}></Statistic>
            <Statistic title="Mined blocks" value={this.state.resp["Mined blocks"]}></Statistic>
            <Statistic title="Current difficulty" value={this.state.resp["Current difficulty"]}></Statistic>
            <Statistic title="Net Energy Usage" value={this.state.resp["Net energy usage"]}></Statistic>
          </div>

          <div className='price'>
            <Statistic title="DUCO Price" value={this.state.resp["Duco price"]}></Statistic>
          
            <LineChart />
          
          </div>



          <div className='usersExplorer'>
            <h2 className='usersExplorerTitle'>Users Explorer</h2>
            
            <form className='inputs' onSubmit={(e) =>{e.preventDefault(); this.getUser()}}>
              <input type="text" className='inputUsers' id='inputUser' />
              <button className='buttonUsers'>Search</button>
            </form>
  
            <div className='userStatistics'>
              <Statistic title="Wallet Name" value={this.state.username}></Statistic>
              <Statistic title="Duco balance" value={this.state.userBalance}></Statistic>
              <Statistic title="Staking" value={this.state.stake}></Statistic>
              <Statistic title="creation of the wallet" value={this.state.created}></Statistic>
              <Statistic title="Verifed" value={this.state.verifed}></Statistic>
            </div>
  
  
  
  
          </div>
  
  
        </div>
      </div>
    );
  }
  
}

