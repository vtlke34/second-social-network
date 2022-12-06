import style from './InputFormComponents.module.css'

export const InputFormComponent = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error && !meta.active

    return (
        <div className={hasError ? style.errorBorder : undefined}
        >
            <input  {...props} {...input} />
            {hasError && <span className={style.error}> {meta.error}</span>}

        </div >
    )
}