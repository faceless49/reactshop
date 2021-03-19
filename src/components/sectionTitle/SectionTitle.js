import s from './SectionTitle.module.scss';



export const SectionTitle = (props) => {
  return (
<>
<h2 className={s.title}>{props.title}</h2>
</>
  );
}

