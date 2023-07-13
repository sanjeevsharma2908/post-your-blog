import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails
 = () => {
 const { id } = useParams();
 const { data:blog ,error ,isLoading } = useFetch("https://data-api-imkn.onrender.com/blogs/"+id);
const history = useHistory();
 const handleDelete = () => {
    fetch("https://data-api-imkn.onrender.com/blogs/"+blog.id,{
        method:"DELETE"
    }).then(() => {
        history.push('/')
    })
 }


    return (
        <di className="blog-details">
            <h2>Blog Details</h2>
           {isLoading && <div>Loading..</div>}
           { error &&  <div>{error}</div>}
           {blog && (
            <article>
                
                <h2 >{blog.title}</h2>
                <p> written By :{blog.author}</p>
                <p>{ blog.body }</p>
                <button onClick={handleDelete}>Delete</button>
            </article>
            
           )}
        </di>
      );
}
 
export default BlogDetails
;