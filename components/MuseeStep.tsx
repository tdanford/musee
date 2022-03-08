import { useRef, useState, useEffect } from "react";

import styles from '../styles/Musee.module.css'

export type MuseeStepProps = {
    children?: React.ReactNode, 
    visibilityChanged?: (isVisible: boolean) => void 
}

export default function MuseeStep({ children, visibilityChanged }: MuseeStepProps) {

    const scrollRef = useRef(null); 
    const [isVisible, setIsVisible] = useState(false);

    function handleIntersect(
        entries: IntersectionObserverEntry[], 
        observer: IntersectionObserver
    ) {
        entries.forEach(entry => {
            setIsVisible(entry.intersectionRatio > 0.5);
        });
    }

    function createObserver(elmt: HTMLElement): IntersectionObserver {
        const options = {
            root: null, 
            rootMargin: "0px", 
            threshold: [0.5]
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(elmt);
        return observer;
    }

    useEffect(() => {
        if(visibilityChanged) {
            visibilityChanged(isVisible);
        }
    }, [isVisible]);

    useEffect(() => {
        if(scrollRef.current) {
            createObserver(scrollRef.current);
        }
    }, [scrollRef]);

    return <div ref={scrollRef} className={styles.scrollUnit}>
        <div className={styles.scrollContent}>
            {children}
        </div>
    </div>
}