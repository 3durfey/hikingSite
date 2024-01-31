export default async function fetchPosts() {
  let products = [];
  try {
    products = await fetch("http://localhost/testsite/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  } catch (error) {
    console.log(error);
  }
  return products;
}
