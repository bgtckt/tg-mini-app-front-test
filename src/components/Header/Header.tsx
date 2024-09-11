import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div className='header'>
      <button type="button" onClick={onClose}>Закрыть</button>
      <div className='username'>
        {user?.username}
      </div>
    </div>
    );
};

export default Header;