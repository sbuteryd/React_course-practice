import  React,{Component} from 'react'
import ListConteacts from './ListConteacts'

class App extends Component {
    state = {
        contacts : [
            {
                "id": "ryan",
                "name": "Ryan Florence",
                "email": "ryan@reacttraining.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }
    removeContact = (contact) =>{
        console.log(contact)
        this.setState((state)=>({
            contacts:this.state.contacts.filter((c)=>(
                c.id !== contact.id
            ))
        }))
    }
    render() {

        return(
            <div>
                <ListConteacts onDeleteContact={this.removeContact} list ={this.state.contacts}/>
            </div>
        )
    }
}



export  default App