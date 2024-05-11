import { useState, useEffect } from 'react';

const Notification = ({message, className}) => {

    const [isVisible, setIsVisible] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) {
        return null;
      }

    return(
        <div className={className}>
            {message}
        </div>
    )
}

export default Notification;