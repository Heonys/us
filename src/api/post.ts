const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const config = {
  //   headers: { Authorization: `token ${token}` },
};

export async function getPostsByPage(page: number) {
  const response = await fetch(
    `${baseURL}/api/collections/posts/records?expand=news%2Cauthor&perPage=5&page=${page}`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

// afeq4igf5gou2i2
export async function getDetailPostById(id: string) {
  const response = await fetch(
    `${baseURL}/api/collections/posts/records/${id}?expand=news%2Cauthor`,
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
