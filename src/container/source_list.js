import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SourceList extends Component{
  constructor(props){
     super(props);
     this.state = {
       lists: [],
       isLoading: true
     };
  }

  componentDidMount(){
    fetch('https://newsapi.org/v2/sources?language=en&country=us&apiKey=596142d46fe246a9a50e1f4bfc71a72d')
         .then(res => res.json())
         .then(data => {
           let list = data.sources.map(source => {
              let active = source
              return active
           })
           this.setState({ lists: list, isLoading: false })
         })
  }

  render(){
    const { lists, isLoading } = this.state;
    return(
      <div className = 'main-component'>
        <ul className = 'list-group'>
          <li className = 'list-group-item text-light bg-dark'><h3>Sources</h3></li>
        </ul>
         { isLoading ? (<div><h4>Loading...</h4></div>) : (
           lists.map(list =>{
             return(
               <div>
                  <ul className = 'list-group'>
                    <li className = 'list-group-item' key = {list.id}>
                      <Link to = {`/news/${list.id}`}>{list.name}</Link>
                    </li>
                  </ul>
               </div>
             );
           })
         )}
      </div>
    );
  }
}

export default SourceList;
