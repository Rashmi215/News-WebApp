import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SelectedSource extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount(){
     const { id } = this.props.match.params;
     fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=596142d46fe246a9a50e1f4bfc71a72d`)
     .then(res =>res.json())
     .then(data=>{
       let articles = data.articles.map(article =>{
         let active = article
         return active
       })
       this.setState({
         articles: articles,
         isLoading: false
       })
     })
     .catch(error => this.setState({ error, isLoading:false }));
  }


  render(){
    const { isLoading, error, articles } = this.state;
    return(
      <div>
        {error ? <p>{ error.message }</p> : null}
        { isLoading ? (<h4>Loading...</h4>) :
           (
             articles.map(article =>{
               return(
                 <div className="media border p-3 bg-light">
                      <img src={article.urlToImage} alt="img" className="mr-3 mt-1" style={{width:80}}/>
                      <div className="media-body">
                        <Link to = {`/news/detail/${article.title}/`} style={{color:'black'}}>
                          <h4>{ article.title } <br/><small><i>{ article.publishedAt }</i></small></h4>
                        </Link>
                      </div>
                 </div>
               );

             })
           )
        }

      </div>
    );
  }
}


export default SelectedSource;
