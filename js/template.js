// NOTE ---> creación de templates para escribir en el HTML
const retornoCard = (curso)=> {
    let {imagen, tipo, nombre, precio} = curso
    return `<div class="card">
                <div class="card-image">${imagen}</div> 
                <div class="card-type">${tipo}</div>
                <div class="card-name">${nombre}</div>
                <div class="card-price">$ ${precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${nombre}" title="Click para agregar al carrito">+</button>
                </div>
            </div>`
}

const retornoError = ()=> {
return  `<div class="card-error">
            <h2>Tenemos un problema</h2>
            <h3>No pudimos cargar la información 🤦🏻‍♂️</h3>
            <h3> Por favor intenta nuevamente en unos instantes</h3>
        </div>`
}