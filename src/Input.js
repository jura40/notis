
import InputField from './InputField';

class App extends InputField {;
  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {

    

    //Kolla om det finns X

    let inteX = this.state.name.includes('x') ? 'Inte X !'  : this.state.name;
    return (
      <div className="App">
        <InputField handleChange={this.handleChange} value={this.state.name}/>

      <div><h1>Reverse: <br/> { this.state.name.split("").reverse().join("") }</h1></div> 
        <h1>{ inteX } </h1>
      </div>
      
    );
    
     
  }
}

export default App;