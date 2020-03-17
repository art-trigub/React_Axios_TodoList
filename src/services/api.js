import axios from "axios";

export default axios.create({
    baseURL: 'http://5e467b3dfd1af600145de20b.mockapi.io/todo',
    headers: {'Content-type': 'application/json'}
});