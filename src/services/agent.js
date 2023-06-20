import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = "http://localhost:4000";
const config = {
  headers: {
    Accept: 'application/json',
  },
};

function deleteConfig(id){
  return { data: { id: id } }
}

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url, config).then(responseBody),
  post: (url, body) => axios.post(url, body, config).then(responseBody),
  put:(url, body) => axios.put(url, body, config).then(responseBody),
  delete: (url, body) => axios.delete(url, deleteConfig(body.id), config).then(responseBody)
};

const Api = {
    listar: () => requests.get(`/tarefas`),
    inserir: (body) => requests.post('/tarefa', body),
    update: (body) => requests.put('/tarefa', body),
    delete: (body) => requests.delete('/tarefa', body)
  };

const agent = {
  Api,
};

export default agent;