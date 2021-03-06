import s from './Button.module.scss';

function Button(props) {
  return (
    <button style={props.style} className={s.btn}>
      {props.text}
    </button>
  );
}

export default Button;
