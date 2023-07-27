import { useHttp } from "../hooks/http.hook";

const JsonPlaceholderService = () => {
  const { request } = useHttp();

  const _apiBase = "https://jsonplaceholder.typicode.com";

  const getPosts = async () => {
    const res = await request(`${_apiBase}/posts`);

    return res;
  };

  const getPostsByUser = async (id) => {
    const res = await request(`${_apiBase}/posts?userId=${id}`);

    return res;
  };

  const getCommentsByPostId = async (id) => {
    const res = await request(`${_apiBase}/posts/${id}/comments`);

    return res;
  };

  const getUsers = async () => {
    const res = await request(`${_apiBase}/users`);

    return res;
  };

  return {
    getPosts,
    getUsers,
    getPostsByUser,
    getCommentsByPostId,
  };
};

export default JsonPlaceholderService;
