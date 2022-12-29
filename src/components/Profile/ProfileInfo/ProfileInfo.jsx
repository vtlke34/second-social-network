import React, { useState } from "react";
import Preloader from "../../Common/Preloader";
import style from './ProfileInfo.module.css';
import EditInfotmation from "./Status/EditInformation/EditInfotmation";
import Status from "./Status/Status";
import { useForm } from "react-hook-form";
import Modal from "../../Common/Modal/Modal";

const ProfileInfo = ({ userData, status, updateStatusThunk, updateProfileThunk, updatePhotoThunk }) => {
    const [editMode, setEditMode] = useState(false)
    const [updatePhoto, setUpdatePhoto] = useState(false)
    const [modal, setModal] = useState(false)
    const { register, handleSubmit, watch } = useForm({ mode: 'onBlur' })

    if (!userData) {
        return <Preloader />
    }

    const contacts = userData.contacts
    const keys = Object.keys(contacts)
    const watchPhoto = watch('file')

    const onSubmit = (data) => {
        updatePhotoThunk(data.file[0])
        setUpdatePhoto(false)
    }

    return (
        <div className={style.ProfileInfo}>
            {!updatePhoto
                ? <div className={style.leftContainer}>
                    {userData.photos.small
                        ? <img
                            className={style.logo}
                            alt='logo'
                            src={userData.photos.small}
                            onClick={() => { setModal(true) }}
                        />
                        : <img
                            className={style.logo}
                            alt='logo'
                            src={'https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg'}
                        />
                    }
                    <button className={style.updPhoto} onClick={() => setUpdatePhoto(true)}>Update photo</button>

                    <Modal modal={modal} setModal={setModal}>
                        <img
                            alt='logo'
                            src={userData.photos.large}
                        />
                    </Modal>
                </div>
                : <div className={style.leftContainer}>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className={style.chooseBtn}>
                            <p>Choose</p>
                            <input
                                type="file"
                                className={style.file}
                                {...register("file")}
                            />

                        </label>

                        {watchPhoto && <p className={style.chooseFile}>{watchPhoto[0].name}</p>}

                        <input
                            value='Send'
                            type="submit"
                            className={style.updPhoto} />
                    </form>
                </div>
            }



            <div>
                <h2 className={style.name}>
                    {userData.fullName}
                </h2>

                <Status status={status} updateStatusThunk={updateStatusThunk} />

                <div className={style.information}>
                    <h2>Information</h2>
                    {!editMode && <div className={style.edit} onClick={() => setEditMode(true)}>Edit</div>}
                </div>

                {editMode
                    ? <EditInfotmation
                        updateProfileThunk={updateProfileThunk}
                        userData={userData}
                        contacts={contacts}
                        keys={keys}
                        setEditMode={setEditMode}
                    />
                    : <div>
                        <div className={style.descItem}>
                            <h6 className={style.title}>About me</h6>
                            <p>{userData.aboutMe ? userData.aboutMe : '-'}</p>
                        </div>

                        <div className={style.descItem}>
                            <h6 className={style.title}>Contacts</h6>
                            <ul className={style.contacts}>
                                {
                                    keys.map(key => {
                                        return (
                                            <li key={key} className={style.contactsItem}>
                                                {`${key}: ${contacts[key] ? contacts[key] : '-'}`}
                                            </li>
                                        )
                                    })
                                }

                            </ul>
                        </div>

                        {userData.lookingForAJob
                            ? <div>
                                <div className={style.descItem}>
                                    <h6 className={style.title}>Looking for a job</h6>
                                    <p>true</p>
                                </div>

                                <div className={style.descItem}>
                                    <h6 className={style.title}>Looking for a job description</h6>
                                    <p>{userData.lookingForAJobDescription ? userData.lookingForAJobDescription : '-'}</p>
                                </div>
                            </div>
                            : <div className={style.descItem}>
                                <h6 className={style.title}>Looking for a job</h6>
                                <p>false</p>
                            </div>
                        }
                    </div>
                }

            </div>
        </div >
    )
}

export default ProfileInfo;