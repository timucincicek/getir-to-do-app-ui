const apiUrl = "http://localhost:3000/api/v1";

const getRequestOptions = (method, body) => {
  const reqOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) {
    reqOptions.body = JSON.stringify(body);
  }
  return reqOptions;
};

export const getAllTasks = (filteringObject) => {
  const url = new URL(`${apiUrl}/tasks`);
  if (filteringObject) {
    url.search = new URLSearchParams(filteringObject);
  }
  return fetch(url, getRequestOptions("GET")).then((response) =>
    response.json()
  );
};

export const createTask = (task) => {
  return fetch(`${apiUrl}/tasks`, getRequestOptions("POST", task)).then(
    (response) => response.json()
  );
};

export const deleteTasks = (params) => {
  return fetch(
    `${apiUrl}/tasks/batchDelete`,
    getRequestOptions("POST", params)
  ).then((response) => response.json());
};

export const updateTask = (taskId, params) => {
  return fetch(
    `${apiUrl}/tasks/${taskId}`,
    getRequestOptions("PUT", params)
  ).then((response) => response.json());
};
