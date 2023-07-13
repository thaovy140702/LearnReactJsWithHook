import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss"

const DetailBlog = () => {
  let { id } = useParams();
  const navigate = useNavigate()
  const handleClickBackButton = () => {
    navigate("/blog")
  }

  const {
    data: dataDetailBlog,
    isLoading,
    isError,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <>
    {
        dataDetailBlog && 
        <>
        <div className="single-blog-detail" key={dataDetailBlog.id}>
            <div><h4>BLog ID: {id} {isLoading ? "loading data ..." : ""}</h4></div>
                    <div className="title-detail">{dataDetailBlog.title}</div>
                    <div className="content-detail">{dataDetailBlog.body}</div>
                </div>
        </>
    }
      <button onClick={ () => {handleClickBackButton()}}>Back</button>
    </>
  );
};

export default DetailBlog;
