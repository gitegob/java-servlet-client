const apiUrl = "http://localhost:8080";

const RequestMethod = {
  GET: "GET",
  GET: "POST",
};

const fetch = async (method, endpoint, body) => {
  return await (
    await fetch({
      method,
      url: `${apiUrl}${endpoint}`,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
  ).json();
};
