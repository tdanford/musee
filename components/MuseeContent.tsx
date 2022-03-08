
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

export type MuseeStringContentType = { 
    type: "string", 
    value: string, 
}

export type MuseeEmptyContentType = { 
    type: "empty", 
}

export type MuseeContentType = MuseeImageContentType | MuseeStringContentType | MuseeEmptyContentType ; 

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
        case "empty": 
        contentElmt = <div></div>
        break;
    }
    return <div className={styles.contentUnit}>
        {contentElmt}
    </div>
}

export default MuseeContent 