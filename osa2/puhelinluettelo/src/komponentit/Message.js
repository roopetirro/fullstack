const Message = ({message}) => {
    if (message === null) {
        return null
    }

    if (message.includes("fail")) {
        return <div className="error">{message}</div>
    }
    
    else {
        return <div className="success">{message}</div>
    }
}

export default Message
