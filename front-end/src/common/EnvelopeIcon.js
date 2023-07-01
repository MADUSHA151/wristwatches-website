import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EnvelopeBasic() {
     return (
          <div>
               <FontAwesomeIcon icon={faEnvelopeOpenText} shake size="lg" style={{ color: "#adaeb0" }} />
          </div>
     );


}

export default EnvelopeBasic;