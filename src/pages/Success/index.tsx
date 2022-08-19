import { SuccessContainer } from "./styles";
import illustration from '../../assets/illustration.svg'

export function Success(){
    return(
        <SuccessContainer>
            <div className="confirm-ordered">
                success
            </div>
            <img src={illustration} alt="Ilustração"/>
        </SuccessContainer>
    )
}