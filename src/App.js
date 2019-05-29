import React , {Component} from 'react';


class ContactList extends  React.Component{
  render() {
    const people = this.props.contacts

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
          <ContactList contacts={[
            {name:'michael'},
            {name:'Ryan'},
            {name:'Tyler'}
          ]}/>
          <ContactList contacts={[
            {name:'russell'},
            {name:"lihangen"},
            {name:"somePeople"}
          ]}/>
        </div>
    )
  }
}


export default App;
