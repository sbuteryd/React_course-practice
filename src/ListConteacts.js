import  React,{ Component } from  'react'
import  PropTypes from 'prop-types'

function ListConteacts(props) {
    return(
        <ol className='contact-list'>
            {props.list.map((list)=>(
                <li key={list.id} className='contact-list-item'>
                    <div className='contact-avatar'
                         style={{backgroundImage:`url(${list.avatarURL})`}}
                    />
                    <div className='contact-details'>
                        <p>{list.name}</p>
                        <p>{list.email}</p>
                    </div>
                    <button onClick={()=>props.onDeleteContact(list)} className='contact-remove'>Remove</button>
                </li>
            ))}
        </ol>
    )
}

ListConteacts.prototype = {
    list:PropTypes.array.isRequired,
    onDeleteContact:PropTypes.func.isRequired,
}



export default  ListConteacts