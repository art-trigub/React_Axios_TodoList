import React from 'react'

function modalForm({task, modalActive, onCancelModal, onChange, onSaveTask}) {
    let modalStyle = {
        display: "none"
    }

    if(modalActive) modalStyle = {display: "block"}

    function onCancelClick() {
        onCancelModal()
    }

    function onValueChange(e) {
        onChange({
            id: task.id,
            title: e.target.value,
            isDone: false
        })
    }

    function onSubmitForm(e) {
        e.preventDefault();
        onSaveTask(task);
    }

    return (
        <div style={modalStyle}>
            <form onSubmit={onSubmitForm}>
                <input onChange={onValueChange} value={task.title} type="text" name="title" />
                <button>Save</button>
            </form>
            <button onClick={onCancelClick}>Cancel</button>
        </div>
    )
}



export default modalForm
