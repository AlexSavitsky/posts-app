import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import Select from "../components/select/Select";
import ItemsList from "../components/itemsList/ItemsList";

import JsonPlaceholderService from "../services/JsonPlaceholder";

const HomePage = () => {
  const { getPosts, getUsers, getPostsByUser } = JsonPlaceholderService();

  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  const fetchPosts = async (option) => {
    setPosts(null);
    let posts = null;
    if (option) {
      posts = await getPostsByUser(option.value);
    } else {
      posts = await getPosts();

      posts = posts.reduce((acc, post) => {
        const { userId } = post;
        if (!acc[userId]) {
          acc[userId] = post;
        }
        return acc;
      }, []);
    }

    setPosts(posts);
  };

  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  return (
    <div className="home-page">
      <Header title="Posts App" />
      <Select users={users} fetchPosts={fetchPosts} />
      <ItemsList data={posts} />
    </div>
  );
};

export default HomePage;
