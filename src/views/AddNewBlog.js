import axios from "axios"
import { useState } from "react"

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleClickSubmit = async (event) => {
        event.preventDefault()
        
        if(!title) {
            // === if(title === "" || title === null || title === undefined)
            alert("Empty title")
            return
        }

        if(!content) {
            alert("Empty content")
            return
        }

        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post("https://jsonplaceholder.typicode.com/posts", data)
        
        if(res && res.data) {
            let newBlog = res.data
            props.addNewBlog(newBlog)
        }
    }
    return (
        <div className="add-new-container">
            <form onSubmit={ (event) => handleClickSubmit(event)}>
            <div><h4> ------- Add new blog -------</h4></div>
            <div>
            <label className="title"><p>Title: </p></label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
            </div>
            
            <div>
            <label><p>Content: </p></label>
            <input type="text" value={content} onChange={(event) => setContent(event.target.value)}/>
            </div>

            <div>
                {/* <button onClick={() => handleClickSubmit()}>Submit</button> */}
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNewBlog