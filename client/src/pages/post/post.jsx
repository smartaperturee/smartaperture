import React, { useState, useEffect } from "react"
import "./post.scss"
import Footer from '../../components/footer/footer'
import { Link } from "react-router-dom";
import axios from "axios"



const Post = () => {
    const [article, setArticle] = useState([]);
    const deleteArticle = id => {
        axios.delete(`/articles/${id}`)
            .then(res => alert(res.data))

        setArticle(article.filter(elem => elem._id !== id));
    }



    const [posts, setPosts]
        = useState([]);
    useEffect(() => {
        axios
            .get("/articles")
            .then(res => setPosts(res.data))
            .catch(error => console.log(error));
    });
    return (
        <div className="mainpost">
            <nav className="navbar ">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Our Posts</h3>
                    <form className="d-flex" role="search">
                        {
                            localStorage.getItem('user-info') ?
                                <>
                                    <Link to="/add" style={{ textDecoration: "none" }} >
                                        <button className="buton">Create Post</button>
                                    </Link>
                                </>
                                :
                                <>

                                </>
                        }



                    </form>
                </div>
            </nav>
            {posts.map((article, key) => {

                return (<div className="post" >
                    <div className="col-sm-6 col-lg-4 mb-4 display-grid">
                        <div className="card">
                            <img src={`/uploads/${article.articleImage}`} className="bd-placeholder-img card-img-top m-23" width="90%" height="250"
                                xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap"
                                preserveAspectRatio="xMidYMid slice" focusable="false" />

                            <div class="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                 
                            </div>
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <button onClick={() => deleteArticle(article._id)} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                                            Delete
                                        </button>
                                    </>
                                    :
                                    <>

                                    </>
                            }

                        </div>
                    </div>
                </div>
                );
            }


            )}

            <Footer />

        </div>
    )
}

export default Post