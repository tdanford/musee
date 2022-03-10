import { setDefaultResultOrder } from "dns";
import React, { useState, useRef, useEffect } from "react"
import MuseeContent, { MuseeContentType } from "../components/MuseeContent";
import MuseeStep from "../components/MuseeStep";

import styles from '../styles/Musee.module.css'

type MuseeStepType = {
    instruction: string, 
    content: MuseeContentType
}

export type DocumentationType = {
    steps: MuseeStepType[]
}

function Error({ reason }: { reason: any}) {
    return <div style={{color: "red", backgroundColor: "white"}}>
        {reason}
    </div>
}

function Musee() {
    const [currentStep, setCurrentStep] = useState(0); 
    const [art, setArt] = useState<DocumentationType>({ steps: [] })
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        fetch("/arts/example.json", {
            method: "GET", 
            headers: {
                Accept: "application/json"
            }
        }).then(response => response.json())
        .then((loaded: DocumentationType) => { 
            setArt(loaded)
            setError(null)
        })
        .catch((reason: any) => setError(reason))
    }, [])

    function visibilityCallback(index: number) {
        return (isVisible: boolean) => {
            if(isVisible) {
                setCurrentStep(index);
            }
        }
    }

    const steps = art.steps
        .map((step, i) => {
            const key = `step_${i}`;
            return <MuseeStep key={key} visibilityChanged={visibilityCallback(i)}>
                {step.instruction}
            </MuseeStep>
        });
    
    return <div className={styles.docContainer}>
        <style global jsx>{`
            html, body, body > div:first-child, div#__next {
                height: 100%;
            }
        `}</style>
        <div className={styles.scrollingControl}>
            { error ? <Error reason={error} /> : steps }
        </div>
        <div className={styles.content}>
            {
                art.steps.length > 0 && 
                <MuseeContent index={currentStep} content={art.steps[currentStep].content} />
            }
        </div>
    </div>
}

export default Musee; 