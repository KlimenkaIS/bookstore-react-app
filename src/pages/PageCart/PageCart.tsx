import { useSelector } from 'react-redux';
import ButtonBackHome from '../../components/ButtonBackHome/ButtonBackHome';
import CardAlternate from '../../components/CardAlternate/CardAlternate';
import './PageCart.css'


function PageCart() {
    const cart = useSelector((state: any) => state.bookstore.cart)
    const vat = 12.50
    const sum = cart.map((item: any) => item.price.slice(1)).reduce((acc: number, item: string) => acc + Number(item), 0).toFixed(2)
    console.log(sum)
    const total = +sum + vat

    return (
        <>
            {cart.length === 0 && (
                <>
                    <ButtonBackHome />
                    <span className='cart__title'>Your cart is empty</span>
                </>
            )}
            {cart.length > 0 && (
                <div className="cart">
                    <ButtonBackHome />

                    <span className='cart__title'>Your cart</span>
                    <div className="cart-cards-container">
                        {cart.map((elem: any) => (

                            <CardAlternate key={elem.isbn13}
                                img={elem.image}
                                title={elem.title}
                                authors={elem.authors}
                                publisher={elem.publisher}
                                year={elem.year}
                                price={elem.price}
                                id={elem.isbn13}
                                isFavoriteCard={false}
                            ></CardAlternate>
                        ))}
                    </div>

                    <div className="cart-price-bar">
                        <div className="cart-price-bar__sum">
                            <span className="cart-price-bar__key">Sum total</span>
                            <span className="cart-price-bar__numbers">{`$ ${sum}`}</span>
                        </div>
                        <div className="cart-price-bar__vat">
                            <span className="cart-price-bar__key">VAT</span>
                            <span className="cart-price-bar__numbers">{`$ ${vat}`}</span>
                        </div>
                        <div className="cart-price-bar__total">
                            <span className="cart-price-bar__total-key">Total</span>
                            <span className="cart-price-bar__total-sum">{`$ ${total.toFixed(2)}`}</span>
                        </div>
                        <button className="cart-price-bar__button">Check out</button>
                    </div>
                </div>
            )}

        </>
    );
}

export default PageCart;