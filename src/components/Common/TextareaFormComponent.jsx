import style from './TextareaFormComponent.module.css'

const TextareaFormComponent = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error && !meta.active

    return (
        <div className={style.textarea}>
            <textarea {...input} {...props} />
            {
                hasError && <span className={style.error}>{meta.error}</span>
            }
        </div>
    )
}

export default TextareaFormComponent