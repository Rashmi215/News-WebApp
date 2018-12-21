import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchSourceList } from '../actions';

class Test extends Component{

  componentDidMount(){
     this.props.fetchSourceList();
  }

  renderList(){
   let {lists} = this.props;
   let returnHTML = [];
   for(let key in lists){
     lists[key].map((item)=>{
       returnHTML.push(
        <li className="list-group-item" key={item.id}>
            <a href={item.url}>{ item.name }</a>
        </li>
       );
     });
   }
   return returnHTML;
}

  render(){
    return (
      <div>
         <ul className = "list-group">
         <li className = "list-group-item text-light bg-dark"><h3>Sources</h3></li>
           {
             this.renderList()
           }

         </ul>
      </div>

    );
  }
}

function mapStateToProps(state){
  return { lists: state.sourceList };
}

export default connect(mapStateToProps, { fetchSourceList })(Test);
