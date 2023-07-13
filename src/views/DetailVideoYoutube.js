import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const DetailVideoYoutube = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate("/youtube");
  };

  return (
    <>
      
      <div className="detail-video-container">
      <Button variant="secondary" onClick={handleClickBackButton} style={{ marginRight: "20px"}}>
          Go back
        </Button>
        <iframe
          width="900"
          height="480"
          src={`https://www.youtube.com/embed/${id}`}
          border="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default DetailVideoYoutube;
