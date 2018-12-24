import React, {Component} from 'react';

class DetailSource extends Component{
  constructor(props){
    super(props);
    this.state = {
      articles: {},
      isLoading: true,
      error: null
    };
  }

  componentDidMount(){
     this.fetchDetail();
  }

  fetchDetail(){
     const { title } = this.props.match.params;
     fetch(`https://newsapi.org/v2/top-headlines?q=${title}&pageSize=1&apiKey=596142d46fe246a9a50e1f4bfc71a72d`)
     .then(res =>res.json())
     .then(data =>{
       let articles = data.articles.map(article =>{
         let active = article
         return active
       })
       this.setState({
         articles: articles,
         isLoading: false,
       })
     })
     .catch(error => this.setState({ error, isLoading: false }))
  }

  render(){
    const { isLoading, error, articles } = this.state;
    return(
      <div>
        {error ? <p>error.message</p> : null}
        {isLoading ? (<div><h4>Loading...</h4></div>) : (
          articles.map(article =>{
            return(
              <div className="card bg-light" style={{marginTop:'20px'}}>
                <div className="card-body">
                  <h4 className="card-title">{ article.title }</h4>
                  <p className="card-text">{ article.content }</p>
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

export default DetailSource;
