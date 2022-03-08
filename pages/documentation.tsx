import React, { useState, useRef, useEffect } from "react"
import MuseeContent, { MuseeContentType } from "../components/MuseeContent";
import MuseeStep from "../components/MuseeStep";

import styles from '../styles/Musee.module.css'

import example from './example.json' 

type MuseeStepType = {
    instruction: string, 
    content: MuseeContentType
}

type DocumentationType = {
    steps: MuseeStepType[]
}

function Musee() {
    const [currentStep, setCurrentStep] = useState(0); 
    const docs: DocumentationType = example as DocumentationType;

    function visibilityCallback(index: number) {
        return (isVisible: boolean) => {
            if(isVisible) {
                setCurrentStep(index);
            }
        }
    }

    const steps = docs.steps
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
            {steps}
        </div>
        <div className={styles.content}>
            <MuseeContent index={currentStep} content={docs.steps[currentStep].content} />
        </div>
    </div>
}

export default Musee; 