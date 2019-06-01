import  React,{Component} from 'react'
import ListConteacts from './ListConteacts'

class App extends Component {
    state = {
        contacts : []
    };
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