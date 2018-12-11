import React, { Component } from 'react';


class SelectedSource extends Component{
  constructor(props){
    super(props);
    this.state = {
      headline: [],
      content: [],
      image: [],
      dateTime: []
    };
  }

  componentDidMount(){
     
  }


  render(){
    return(
      <div className="col-lg-4">
        <div className="media border p-3">
           <img  alt="img" className="mr-3 mt-1" style={{width:80}}/>
           <div className="media-body">
             <h4><small><i></i></small></h4>
           </div>
        </div>
      </div>
    );
  }
}


export default SelectedSource;
