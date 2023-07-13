import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history =useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog ={title,body,author};
        //console.log();
        setIsPending(true);

        fetch('https://dojo-blog-wfti.onrender.com/blogs',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog Added successfully!');
            setIsPending(false);
            history.push('/');

        })
    }
    return ( 
        <div className="create">
            <h2>Add a new Blog!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                 />
                 <label htmlFor="">Blog body</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
            
                </textarea>
                <label>Blog author:</label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="Sanjeev Sharma">Sanjeev Sharma</option>
                </select>
            
                {!isPending ?<button> Add Blog</button>:<button disabled>Adding Blog...</button>}

                
            </form>
        </div>
     );
}
 
export default Create;