import axios from 'axios';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

export function createBook(bookData) {
  console.log('creating new book', bookData);
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/api/books`, bookData)
      .then((response) => { resolve(response.data); })
      .catch((error) => { reject(error); });
  });
}

export function getBookList() {
  return new Promise((resolve, reject) => {
    axios.get(`${API_URL}/api/books`)
      .then((response) => { resolve(response.data); })
      .catch((error) => { reject(error); });
  });
}


export function editBook(bookData, id) {
  console.log('bookData', bookData);
  return new Promise((resolve, reject) => {
    axios.put(`${API_URL}/api/books/${id}`, bookData)
      .then((response) => { resolve(response.data); })
      .catch((error) => { reject(error); });
  });
}

export function deleteBook(id) {
  console.log('inside deleteBook', id);
  return new Promise((resolve, reject) => {
    axios.delete(`${API_URL}/api/books/${id}`)
      .then((response) => { resolve(response.data); })
      .catch((error) => { reject(error); });
  });
}
