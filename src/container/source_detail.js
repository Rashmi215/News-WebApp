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
     const { id } = this.props.match.params;
     fetch(`https://newsapi.org/v2/top-headlines?sources=${id}&pageSize=1&apiKey=596142d46fe246a9a50e1f4bfc71a72d`)
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
              <div>
                <h4>{ article.title }</h4>
                <p>{ article.content }</p>
              </div>
            )
          })
        )
      }
      </div>
    );
  }
}

export default DetailSource;
