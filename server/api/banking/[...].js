import base64 from 'base-64';
const url = 'https://alpha-api.usbank.com/innovation/bank-node/';
const config = useRuntimeConfig();
const username = config.username;
const password = config.password;
let headers = {
    'Accept': 'application/json',
    'Authorization': `Basic ${base64.encode(`${username}:${password}`)}`
};



export default defineEventHandler(
    async (event) => {
        let queries = getQuery(event)
        let request = event['req']
        console.log(request.url, request.method)
        const method = request.method;
        const extension = request.url.substring('api/banking/'.length + 1)
        return $fetch(`${url}${extension}`,  {method: request.method, headers: headers} )
    }
    )
