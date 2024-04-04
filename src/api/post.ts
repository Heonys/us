const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPostsByPage(page: number, accessToken: string) {
  const response = await fetch(
    `${baseURL}/api/collections/posts/records?expand=news%2Cauthor&perPage=5&page=${page}`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getDetailPostById(id: string, accessToken: string) {
  const response = await fetch(
    `${baseURL}/api/collections/posts/records/${id}?expand=news%2Cauthor`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function postUserRefreshToken(accessToken: string) {
  const response = await fetch(
    `${baseURL}/api/collections/users/auth-refresh`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
