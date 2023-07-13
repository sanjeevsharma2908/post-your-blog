
import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const{data:blogs, isLoading,error} = useFetch("https://data-api-imkn.onrender.com/blogs"); 
  //const {data:blogs, isLoading,error} = useFetch('https://reqres.in/api/login');

 

  return (
    <div className="home">
     { error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
