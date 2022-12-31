import React, { useState, useEffect } from "react"
import "./addarticle.scss"
import axios from "axios"

const Addarticle = () => {
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [fileName, setFileName] = useState("");

    const onChangeFile = e => {
        setFileName(e.target.files[0]);
    }


    const changeOnClick = e => {
        e.preventDefault();



        setTitle('')
        setArticle('')


        const formData = new FormData()
        formData.append('title', title)
        formData.append('article', article)
        formData.append('articleImage', fileName)

        axios.post("/articles/add", formData)

            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div className='form'>
            <h1>Add NEW POSTS</h1>
            <form onSubmit={changeOnClick} encType="multipart/form-data">

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} id="exampleInputEmail1"
                        onChange={e => setTitle(e.target.value)}
                        aria-describedby="emailHelp" />

                </div>
                
                <input className="form-control-file" onChange={onChangeFile} filename="articleImage" type="file" />
                <button type="submit" className="btn btn-primary">Post</button>
            </form >
        </div >
    )
}

export default Addarticle