import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Store from './Store'


class App extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Header  />
                <Store myStore="Instagram" age={50}/>
                <Footer year={2019} />
            </React.Fragment>
        )  
    }
}
export default App