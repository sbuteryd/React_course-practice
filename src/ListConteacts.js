import  React,{ Component } from  'react'

class ListConteacts extends Component {
    render() {
        console.log(this.props)
        return(
            <ol className='contact-list'>
                {this.props.list.map((list)=>(
                    <li key={list.id}>{list.name}</li>
                ))}
            </ol>
        )
    }
}


export default  ListConteacts