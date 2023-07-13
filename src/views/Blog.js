import { Link, useNavigate } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let data  = dataBlog.slice(0, 9);
      setNewData(data)
    }
  }, [dataBlog])

  const handleClickAddNewBlog = (blog) => {
    let data = newData
    newData.unshift(blog)

    setShow(false)
    setNewData(data)
  };

  const handleDeleteBlog = (id) => {
    let data = newData
    console.log(id)
    data = data.filter((item) => item.id !== id)
    console.log(data)
    setNewData(data)
  }
  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        Add new blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog addNewBlog={handleClickAddNewBlog}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="blogs-container">
        {" "}
        {!isLoading &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            let id = item.id
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">{item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View detail</Link>
                </button>
                <button onClick={() => { handleDeleteBlog(id)}}>Delete</button>
              </div>
            );
          })}
        {isLoading && <div>Loading ...</div>}
      </div>
    </>
  );
};
export default Blog;
