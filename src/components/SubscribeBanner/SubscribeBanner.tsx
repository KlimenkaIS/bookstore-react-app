import './SubscribeBanner.css'


function SubscribeBanner() {
    return (
        <>
        <div className="banner">
            <span className="banner__title">Subscribe to newsletter</span>
            <span className="banner__subtitle">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</span>
            <form className="banner-form">
                <input type="email" className="banner-form__input" placeholder='Your email'/>
                <button type='button' className="banner-for__button">Subscribe</button>
            </form>
        </div>
        </>
    );
}

export default SubscribeBanner;