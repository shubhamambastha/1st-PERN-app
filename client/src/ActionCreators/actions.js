import axios from 'axios';

export const saveTodo = async (body) => {
    try {
        let task = JSON.stringify(body)
        let response = await axios.post('http://localhost:5000/', task, {
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        return response
    } catch (error) {
        return false
    }
}

export const getTodo = async () => {
    try {
        let response = await axios.get('http://localhost:5000/');
        return response
    } catch (error) {
        return false
    }
}

export const editTodo = async (id) => {
    try {
        let response = await axios.put('http://localhost:5000/', id);
        return response
    } catch (error) {
        return false
    }
}

export const deleteTodo = async (id) => {
    try {
        let response = await axios.post('http://localhost:5000/', id);
        return response
    } catch (error) {
        return false
    }
}