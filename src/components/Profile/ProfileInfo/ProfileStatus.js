import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status);
    };

    onProfileStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                    status: this.props.status
                }
            )
        }
    };

    render() {
        console.log('render');
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <p onDoubleClick={this.activateEditMode}>{this.props.status || 'statusa net'}</p>
                    </div>
                    :
                    <div>
                        <input onChange={this.onProfileStatusChange} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;