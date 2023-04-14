import base64 from 'base-64';
const url = 'https://alpha-api.usbank.com/innovation/bank-node/reference/v1/products';
const config = useRuntimeConfig();
const username = config.username;
const password = config.password;
console.log(config);
let headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${base64.encode(`${username}:${password}`)}`
};



export default defineEventHandler(async () => $fetch(url, {method: 'get', headers: headers} ))
