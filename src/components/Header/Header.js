import s from './Header.module.css';

const Header = () => {
    return (

            <header className={s.header}>
                <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png' alt=''/>
            </header>

    );
};

export default Header;