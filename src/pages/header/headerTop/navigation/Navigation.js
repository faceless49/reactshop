
import s from './Navigation.module.scss';

function Navigation() {
  return (
    <div className={s.navigation}>
      <ul className={s.navigation_list}>
        <li className={s.navigation_item}>Магазины</li>
        <li className={s.navigation_item}>Акции</li>
        <li className={s.navigation_item}>Доставка и оплата</li>
      </ul>
    </div>
  );
}

export default Navigation;
