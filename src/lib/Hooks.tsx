import { useEffect, useState } from "react";

// Hook
// eslint-disable-next-line
export function useKeyPress(targetKey: string) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);

    // If pressed key is our target key then set to true
    // eslint-disable-next-line
    function downHandler({ key } : { key: string }) {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }

    // If released key is our target key then set to false
    // eslint-disable-next-line
    const upHandler = ({ key } : { key: string }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };

    // Add event listeners
    useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
    };
    }, [upHandler, downHandler]); // Empty array ensures that effect is only run on mount and unmount

    return keyPressed;
}