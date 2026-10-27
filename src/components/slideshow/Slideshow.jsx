
import { useState } from 'react';
import "./slideshow.css"

const Slideshow = ({slideshowvalue, slideshowtitle}) => {

    const slideshowImage = slideshowvalue
    const slideshowTitle = slideshowtitle
    const length = slideshowImage.length
    const [index, setIndex] = useState(0)
    function slideRight() {
        console.log(index)
        index === slideshowImage.length - 1 ? setIndex(0) : setIndex(index + 1);
        console.log(index)
    }
    function slideLeft() {
        index === 0 ? setIndex(slideshowImage.length - 1) : setIndex(index - 1)
        console.log(index)
    }

    return  length > 1 ? (
        <div className="slideshow">
            <h3>{slideshowTitle[index]}</h3>
            <img src={slideshowImage[index]} alt="slideshow d'images illustrant le projet" />
            <div className="slideshowControl">
                <div className="slideshowPrev">
                    <i className="fa-solid fa-chevron-left fa-2xl" onClick={slideLeft}></i>
                </div>
                <div className="slideshowNext">
                    <i className="fa-solid fa-chevron-right fa-2xl" onClick={slideRight}></i>
                </div>
            </div>
            <div className="slideshowNum">{index + 1}/{slideshowImage.length}</div>
        </div>
    ) : (
        <div className="slideshow">
            <img src={slideshowImage[index]} />
        </div>
    )
}
export default Slideshow