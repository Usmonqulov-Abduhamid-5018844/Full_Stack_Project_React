import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.mybarbershop.store/",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cHBlcl9hZG1pbiIsImlhdCI6MTc1NzkxOTU2NywiZXhwIjoxNzU4NzgzNTY3fQ.RXwae7cQGHHfA9aTYjQDUKufQu5rHNA0F7vfxPV6lU4"

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
