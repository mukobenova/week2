
import './App.css';
import Instagram from './Instagram';

function App() {
  const blogData = [
    { blog: "Blog about Canada", posts: "100 posts", followers: "100 followers", following: "100 following" },
    { blog: "Blog about USA", posts: "200 posts", followers: "200 followers", following: "200 following" },
    { blog: "Blog about Thailand", posts: "300 posts", followers: "300 followers", following: "300 following" }
  ];

  return (
    <div>
      {blogData.map((data, index) => (
        <Instagram 
          key={index}
          blog={data.blog}
          posts={data.posts}
          followers={data.followers}
          following={data.following}
        />
      ))}
    </div>
  );
}


export default App;
