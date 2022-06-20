import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      quote: '',
      author: ''
    }

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentDidMount(){
    this.getNewQuote();
  }


  getNewQuote(){

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(quote => {
        this.setState({
          quote: quote.content,
          author: quote.author
        })
      })
  }

  render(){ 
    return (
      <div className="row">
        <div id="quote-box" className="col-md-8 offset-md-2 container">
        
          <blockquote id="text" className='text-center'>{this.state.quote}</blockquote>
        
          <div id="author" className='text-center'>-- {this.state.author}</div>

          <a href="twitter.com/intent/tweet" id="tweet-quote" target="_top">Tweet this quote</a>
        
          <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
        
        </div>
      </div>
    )
  }
}


export default App;
