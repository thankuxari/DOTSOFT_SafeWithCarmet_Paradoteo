import { faCircle } from "@fortawesome/free-solid-svg-icons"
import "./mapbadge.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MAPBadge({ isCompliant }) {
  return (
    <>
        {isCompliant ? 
            <span className="map-badge map-badge-success"><FontAwesomeIcon className="map-badge-circle" icon={faCircle}/> OK</span>
            :
            <span className="map-badge map-badge-error"> <FontAwesomeIcon className="map-badge-circle" icon={faCircle}/>Μη ΟΚ</span>
        }
    </>
  )
}

