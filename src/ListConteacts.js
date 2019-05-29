import  React,{ Component } from  'react'

class ListConteacts extends Component {
    render() {
        console.log(this.props)
        return(
            <ol className='contact-list'>
                {this.props.list.map((list)=>(
                    <li key={list.id} className='contact-list-item'>
                        <div className='contact-avatar'
                             style={{backgroundImage:`url(${list.avatarURL})`}}
                        />
                        <div className='contact-details'>
                            <p>{list.name}</p>
                            <p>{list.email}</p>
                        </div>
                        <button className='contact-remove'>Remove</button>
                    </li>

                ))}
            </ol>
        )
    }
}


export default  ListConteacts