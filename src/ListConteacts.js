import  React,{ Component } from  'react'

class ListConteacts extends Component {
    render() {
        console.log(this.props.list)
        return(
            <ol className='contact-list'>
                <p>russell</p>
            </ol>
        )
    }
}


export default  ListConteacts