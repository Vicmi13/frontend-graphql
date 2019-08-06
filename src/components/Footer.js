import React from 'react'

class Footer extends React.Component {
    render () {
         return (
             <React.Fragment>
                <h2>Footer</h2>
                <p>{this.props.year}</p>
             </React.Fragment>
         )
    }
}

export default Footer