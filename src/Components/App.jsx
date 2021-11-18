import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';




class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data: []
      };
  }
   

  componentDidMount() {
    this.fetchData();
  }
  
  
  async fetchData() {
    try {
      let response = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
      console.log(response.data)
      this.setState({
       data: response.data
      })
    } 
    catch (error) {
      console.log(error)
    }
  }


  render() {
    console.log(this.state)
    return(
      <div className='App'>
        <Navbar/>
        <SearchBar/>
        <MusicTable data={this.state.data} />
        {/* {this.state.data.map((val,key) => {
          return <div><p>{val.title}</p></div>;
        })} */}
      </div>
    )
  }

}
 
export default App;