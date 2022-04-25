import productList from './product';

const INITIAL_STATE = { //meu state
    value: 0, 
    products: productList,
    Cart: []
}

export default function cart(state = INITIAL_STATE, action){ //passando para o estado global
    switch(action.type){ 
        case 'ADD_TO_CART':
            if(state.value === 0) { //se o carrinho estiver vazio...
                let item = {
                    id: action.product.id_product,
                    name: action.product.name_product,
                    price: action.product.price,
                    image: action.product.image,
                    quantity: 1
                }
                state.Cart.push(item);
            } else { // se o carrinho não estiver vazio, verificar se já tem algum produto daquele tipo
                let check = false;
                state.Cart.map((item, key) => {
                    if(item.id === action.product.id_product){ // item.id = id do itemm que já está no carrinho
                        state.Cart[key].quantity++; // acesso a quantidade do carrinho que já está lá e adiciono mais um no mesmo item, não se cria uma nova key o que é alterado é a quantity
                        check = true;
                    }
                });
                if (!check){ // se continuar falso, ou seja, se o carrinho não estiver vazio e o produto a ser adicionado não é do mesmo tipo que já está lá
                    let item = {
                        id: action.product.id_product,
                        name: action.product.name_product,
                        price: action.product.price,
                        image: action.product.image,
                        quantity: 1
                    }
                    state.Cart.push(item);
                }
            }
            return {
                ...state,
                value: ( state.value + 1)
            }
        case 'ADD_ITEM':
            action.product.quantity++
            return{
                ...state, //desestruturar o state para acessar diretamente as propriedades, nesse caso só foi acessado a propriedade value
                value: ( action.cart.value + 1 )
            }
        case 'REMOVE_ITEM':
            if(action.product.quantity > 1){ // a action tem o product, e o product tem a quantity
                action.product.quantity--
                return {
                    ...state,
                    value: ( action.cart.value - 1 )
                }
            } else {
                return state;
            }
        case 'DELETE_ITEM':
            return{
                ...state,
                value: (action.cart.value - action.product.quantity),
                Cart: state.Cart.filter(item => {
                    return item.id !== action.product.id
                })
            }
        case 'CHANGE_CART':
            return state = action.localCart
        default:
            return state;
    }
    return state
}
