import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from './Opiniao.module.css';

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    description: yup.string().required(),
}
).required();

const Opiniao = () => {
    const { register, handleSubmit, formState: { errors } } =
        useForm({
            resolver: yupResolver(schema)
        })

    const onSubmitForm = data => console.log(data);

    return (
        <>
            <h1 className={styles.titulo}>Deixe sua opinião sobre a Série:</h1>
            <div className={styles.formu}>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                    <div className={styles.field}>
                        <label className={styles.label}>Nome</label>
                        <input type='text' {...register('name')}></input>
                        <span>{errors.name?.message}</span>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>E-mail</label>
                        <input type='email' {...register('email')}></input>
                        <span>{errors.email?.message}</span>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Mensagem</label>
                        <input type='text'{...register('description')}></input>
                        <span>{errors.description?.message}</span>
                    </div>
                    <div className={styles.field}>
                        <button type='submit'>Enviar</button>
                    </div>
                </form></div>
        </>
    )
}


export default Opiniao; 