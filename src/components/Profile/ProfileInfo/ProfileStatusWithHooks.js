import React, {useState, useEffect} from "react";
//import {useState} from "react/cjs/react.production.min";


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    };

    const onProfileStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    };

    return (
        <div>
            {!editMode
                ?
                <div>
                    <p onDoubleClick={activateEditMode}>{props.status || 'statusa net'}</p>
                </div>
                :
                <div>
                    <input onChange={onProfileStatusChange}
                           onBlur={deactivateEditMode}
                           autoFocus={true}
                           value={status}/>
                </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;