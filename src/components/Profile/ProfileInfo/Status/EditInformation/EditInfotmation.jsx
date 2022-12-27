import style from './EditInformation.module.css'
import { useForm } from 'react-hook-form'


const EditInfotmation = ({ updateProfileThunk, userData, contacts, keys, setEditMode }) => {

    const { register, handleSubmit, formState: { errors, isValid, }, watch } = useForm({
        mode: 'onBlur', defaultValues: {
            aboutMe: userData.aboutMe,
            contacts: {
                facebook: contacts.facebook,
                github: contacts.github,
                instagram: contacts.instagram,
                mainLink: contacts.mainLink,
                twitter: contacts.twitter,
                vk: contacts.vk,
                website: contacts.website,
                youtube: contacts.youtube
            },
            lookingForAJob: userData.lookingForAJob,
            lookingForAJobDescription: userData.lookingForAJobDescription,
        }
    })

    const onSubmit = (data) => {
        updateProfileThunk(data)
        setEditMode(false)
    }

    const watchLookingForAJob = watch('lookingForAJob')

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className={style.label}>
                <h6 className={style.title}>About me</h6>
                <input
                    type="text"
                    className={style.input}
                    {...register('aboutMe', { required: 'Обязательно для заполнения' })} />
                {errors.aboutMe && <div className={style.error}>{errors.aboutMe.message}</div>}
            </label>

            <div>
                <h6 className={style.title}>Contacts</h6>
                <ul className={style.contacts}>
                    {
                        keys.map(key => {
                            return (
                                <li key={key} className={style.contactsItem}>
                                    <label className={style.label}>
                                        <span>{key}: </span>
                                        <input
                                            type="text"
                                            className={style.input}
                                            {...register(`contacts.${key}`)}
                                        />
                                        {/* {errors.aboutMe && <div className={style.error}>{errors.aboutMe.message}</div>} */}
                                    </label>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            <label className={style.label}>
                <h6 className={style.title}>Looking for a job</h6>
                <input
                    type="checkbox"
                    {...register('lookingForAJob')}
                />
            </label>

            <label className={style.label}>
                <h6 className={style.title}>Looking for a job description</h6>
                <input
                    type="text"
                    className={style.input}
                    {...register("lookingForAJobDescription", { required: 'bbh' })}
                    disabled={!watchLookingForAJob}
                />
                {errors.lookingForAJobDescription && <div className={style.error}>{errors.lookingForAJobDescription.message}</div>}
            </label>

            <input className={style.save} value='Save' type="submit" disabled={!isValid} />
        </form >
    )
}

export default EditInfotmation