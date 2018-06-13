export const fetchPostsData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchCommentsData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
