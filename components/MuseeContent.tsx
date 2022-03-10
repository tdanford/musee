
import styles from '../styles/Musee.module.css'

/**
 * MuseeContent displays one of the "content" panes on the right side of the 
 * page.  Which content pane is shown depends on which step the scrolling div 
 * to the left of the viewport is scrolled to
 */

export type MuseeImageContentType = {
    type: "image", 
    src: string
}

export type MuseeZoomContentType = {
    type: "zoom", 
    tx: number, 
    ty: number, 
    scale: number,
    src: string
}

export type MuseeStringContentType = { 
    type: "string", 
    value: string, 
}

export type MuseeEmptyContentType = { 
    type: "empty", 
}

export type MuseeContentType = MuseeImageContentType | MuseeStringContentType | MuseeEmptyContentType | MuseeZoomContentType ; 

export type MuseeContentProps = {
    content: MuseeContentType,
    index: number
}

function MuseeContent({ content, index }: MuseeContentProps) {
    let contentElmt = null; 
    switch(content.type) {
        case "image": 
        contentElmt = <img src={`/images/${content.src}`} />
        break;
        case "string": 
        contentElmt = <div>{content.value}</div>
        break;
        case "zoom": 
        let transformStyle = {
            transition: "transform 1s", 
            transform: `translate(${content.tx}px, ${content.ty}px) scale(${content.scale})`
        }
        contentElmt = <img style={transformStyle} src={`/images/${content.src}`} />
        break;
        case "empty": 
        contentElmt = <div></div>
        break;
    }
    return <div className={styles.contentUnit}>
        {contentElmt}
    </div>
}

export default MuseeContent 