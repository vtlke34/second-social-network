import style from './Modal.module.css'

const Modal = ({ modal, setModal, children }) => {
    return (
        <div className={modal ? style.modalActive : style.modal} onClick={() => setModal(false)}>
            <div className={modal ? style.modalContentActive : style.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal