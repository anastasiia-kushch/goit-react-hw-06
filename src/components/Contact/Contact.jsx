import { IoPerson } from 'react-icons/io5';
import { LuPhone } from 'react-icons/lu';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import css from '../Contact/Contact.module.css';

export default function Contact({ data }) {
  const dispatch = useDispatch();

  return (
    <div className={css.div}>
      <div className={css.info}>
        <IoPerson className={css.icon} size={18}/>
        <p>{data.name}</p>
        </div>
        <div className={css.info}>
        <LuPhone className={css.icon} size={18}/>
        <p>{data.number}</p>
      </div>

      <button className={css.button} onClick={()=> dispatch(deleteContact(data.id))}>Delete</button>
    </div>
  );
}
