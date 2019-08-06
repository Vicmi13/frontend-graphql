import React from 'react'

class Store extends React.Component {
    render () {
        return (
            <React.Fragment>
               <form className="store-form">
                    <h2>Bienvenidos a la tienda</h2>
                    <p>Nombre: {this.props.myStore}</p>
                    <p>Seguidores {this.props.age}</p>
                   <input type="text" required placeholder="Ingresa la tienda" />
                   <button type="submit"> Ir </button>
               </form>
            </React.Fragment>
        )
    }
}

export default Store