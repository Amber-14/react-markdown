import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       text shree
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      markdown: e.target.value
    })
  }
  
  render() {
    return (
      <div className='app'>
      <textarea onChange={this.handleChange} />
      <ReactMarkdown className='preview' children={this.state.markdown}/>
      </div>
    )
  }
}

export default App

