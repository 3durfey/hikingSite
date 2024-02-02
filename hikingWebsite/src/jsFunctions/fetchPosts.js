export default async function fetchPosts(type) {
  let products = [];
  try {
    products = await fetch(`http://localhost/testsite/wp-json/wp/v2/${type}`)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  } catch (error) {
    console.log(error);
  }
  return products;
}
