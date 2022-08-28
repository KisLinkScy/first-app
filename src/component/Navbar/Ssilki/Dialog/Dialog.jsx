import React from "react";
import mDialog from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {

    let dialogsElements = props.dialogData.map(
        dialog => <DialogItem name={dialog.names} id= {dialog.id} />);
    let messageElements = props.messageData.map(
        message => <Message message={message.message} id={message.id}/>);

    return (
        <div className={mDialog.dialog}>
            <div className={mDialog.dialogs}>
                <div className={mDialog.dialogsItems}>
                
                    {dialogsElements}

                   { /*<DialogItem name={dialogData[0].names} id= {dialogData[0].id} />
                    <DialogItem name={dialogData[1].names} id= {dialogData[1].id} />
                    <DialogItem name={dialogData[2].names} id= {dialogData[2].id} />
                    <DialogItem name={dialogData[3].names} id= {dialogData[3].id} />
                    <DialogItem name={dialogData[4].names} id= {dialogData[4].id} />*/}

                </div>

            </div>
            <div className={mDialog.messages}>
            
                {messageElements}

               {/* <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>*/}
            </div>
        </div>
    )
}

export default Dialog;