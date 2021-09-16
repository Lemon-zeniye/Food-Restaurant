import {useEffect,useRef, useState} from "react";
import "./Slideshow.css";
const colors = ["green", "yellow", "red"];


function Slideshow(){

   const [index, setIndex] = useState(0);
   const timeoutRef = useRef(null);
   useEffect(() => {
       resetTimeout();
     timeoutRef.current =   setTimeout(() => {
            setIndex(preIndex => preIndex === 2 ? 0 : preIndex + 1)
        }, 3000);
   }, [index])

   function resetTimeout() {
       if(timeoutRef.current){
           clearTimeout(timeoutRef.current)
       }
   }

   
    return(
        <div className="slideshow" style={{whiteSpace: "nowrap"}}>
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0`}}> 
                <div style={{background: "red", height: "90vh", width: "100%", display: "inline-block"}}></div>
                <div style={{background: "green", height: "90vh", width: "100%", display: "inline-block"}}></div>
                <div style={{background: "yellow", height: "90vh", width: "100%", display: "inline-block"}}></div>
            </div>
            <div className="what" style={{display: "flex", justifyContent: "center"}}>
                {
                    colors.map((_, ids) => (
                        <div key={ids} className={`slideshowDot ${index === ids ? "active" : ""}`}   onClick={()=> {
                                                        setIndex(ids)
                                                    }}></div>
                    ))
                }
            </div>
        

</div>

    )}
export default Slideshow;

// {/* <div className="slideshowDots">
//                 {
//                     colors.map((_, ids) => (
//                         <div key={ids} className={`slideshowDot ${index === ids ? "active" : ""}`}
//                         onClick={()=> {
//                             setIndex(ids)
//                         }}
//                         ></div>
//                     ))
//                 }
//             </div> */}
//         </div>
//     )
// }

