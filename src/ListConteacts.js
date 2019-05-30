import  React,{ Component } from  'react'

class ListConteacts extends Component {
    render() {
        const list = this.props.contacts
        return(
            <ol className='contact-list'>
                {list.map((pare)=>(
                    <li  key={pare.id} className='contact-list-item'>
                        <div className='contact-avatar'
                             style={{backgroundImage:`url(${pare.avatarURL})`}}
                        />
                        <div className='contact-details'>
                            <p>{pare.name}</p>
                            <p>{pare.email}</p>
                        </div>
                        <button className='contact-remove'>remove</button>
                    </li>

                ))}
            </ol>
        )
    }
}


export default  ListConteacts