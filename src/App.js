import React , {Component} from 'react';


class ShowName extends  React.Component {
  render() {
   const people = this.props.nameList
    return (
        <ol>
          {people.map(pare =>(
             <li>{pare.name}</li>
          ))}
        </ol>)
  }
}



export default class App extends React.Component{
  render(){
    return(
        <div className='app'>
          <ShowName nameList={[
            {name:'russell'},
            {name:'lihangen'}
            ]}/>
          <ShowName nameList ={[
            {name:"gem"},
            {name:"anyone"}
          ]}/>
        </div>
    )
  }
}