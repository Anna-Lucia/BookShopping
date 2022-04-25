const Add = (cart, product) => {
    return{
        type: 'ADD_TO_CART', //nome da ação no react redux, toda ação tem um type. É necessário passar o que desejo fazer
        cart,
        product
    }
}

const AddItem = (cart, product) => {
    return{
        type: 'ADD_ITEM',
        cart,
        product
    }
}

const RemoveItem = (cart, product) => {
    return{
        type: 'REMOVE_ITEM',
        cart,
        product
    }
}

const DeleteItem = (cart, product) => {
    return{
        type: 'DELETE_ITEM',
        cart,
        product
    }
}

const ChangeCart = (localCart) => {
    return{
        type: 'CHANGE_CART',
        localCart
    }
}

export default {
    Add,
    AddItem,
    RemoveItem,
    DeleteItem,
    ChangeCart
}
