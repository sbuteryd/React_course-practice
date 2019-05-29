import React , {Component} from 'react';


class ContactList extends  React.Component{
  render() {
    const people = [
      {name:'michael'},
      {name:'Ryan'},
      {name:'Tyler'}
    ]
    return (<ol>
      {people.map(person =>(
          <li>{person.name}</li>
          )
      )}
    </ol>)
  }
}

class App extends Component{
  render() {
    return (
        <div className='App'>
          <ContactList/>
        </div>
    )
  }
}


export default App;
