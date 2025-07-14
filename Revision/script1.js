const API_URL = 'https://jsonplaceholder.typicode.com/posts';
let Posts = [];
let headings = document.querySelector('#myTable thead');
let view = document.querySelector('#myTable tbody');

const flattenObject = (obj, parentkey = '', result = {}) => {
    for(let key in obj){
        if(typeof obj [key] === 'object' && obj[key !== null])
        {
            flattenObject (obj[key], `${parentkey}${key}.`,result);
        }
        else
        {
            result[`${parentkey}${key} `] = obj[key];
        }
    }
    return result;
}