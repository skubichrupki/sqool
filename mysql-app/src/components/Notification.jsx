const Notification = ({message, className}) => {

    // hide notification
    // const clearNotification = () => {
    //     console.log('notification hide');
    // }

    // hide notification after 2 seconds
    // const timeout = setTimeout( () => {
    //     clearNotification();
    // }, 2000)

    return(
        <div className={className}>
            {message}
        </div>
    )
}

export default Notification;