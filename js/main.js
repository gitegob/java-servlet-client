const apiUrl = "http://localhost:8080/api/v1";

const apiRequest = async (method, endpoint, body) => {
  console.log(body);
  const response = await fetch(`${apiUrl}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return {
    status: response.status,
    data,
  };
};
