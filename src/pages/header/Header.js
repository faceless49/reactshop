import s from './Header.module.scss';
import { HeaderBottom } from './headerBottom/HeaderBottom';
import { HeaderTop } from './headerTop/HeaderTop';

export const Header = (props) => {
    return (
        <div className={s.header}>
            <HeaderTop/>
            <HeaderBottom/>
        </div>
    );
}
