import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    const handleClickBackButton = () => {
        navigate("/")
      }
    
    return (
        <div>
            <h4>PAGE NOT FOUND</h4>
            <h5>We looked everywhere for this page. Are you sure the website URL is correct ?</h5>
            <Button onClick={ () => { handleClickBackButton()}}>Go back</Button>
        </div>
    )
}

export default NotFound