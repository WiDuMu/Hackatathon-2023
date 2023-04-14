<script setup>
// let userConfig = useRuntimeConfig();
// console.log(userConfig);
// const accountID = 935121592917;
// const { data: mccCodesRequest } = await useFetch('/api/banking/reference/v1/codes/all', { method: 'get' });
// const mccCodes = (mccCodesRequest['_value'].codes == null) ? mccCodesRequest['_value'].codes :  ;
// console.log(userConfig.user)
// const transactionsRequest = await(await useFetch(`/api/banking/customer-accounts/v1/account/${accountID.toString()}/trans/full`))
// const transactions = transactionsRequest.data._value.transactions
// console.log(transactions.toString())

// const transactioninfo = transactions.map(transaction => {
//     return {
//         transactionID: transaction.transactionID,
//         MCCNumber: transaction.subCategory,
//         MCCDescription: mccCodes.filter(mcc => (mcc.mcc == transaction.subCategory))[0],
//         amount: transaction.amount

//     }
// }
// )
// let usedMCC = [];
// transactioninfo.forEach(transaction => {
//     //console.log(transaction)
//     let MCCDescription = transaction.MCCDescription;
//     if (MCCDescription == undefined) {
//         MCCDescription = {edited_description: 'Uncategorized'}
//     }
//     if (!(usedMCC.includes(transaction.MCCNumber))) {

//         usedMCC.push({ code: transaction.MCCNumber, description: MCCDescription.edited_description, transactions: [transaction] })
//     }
//     else {
//         usedMCC[usedMCC.find(MCC => transaction.MCCNumber == MCC.code)]
//     }
// });
//const categories = useState('categories', () => usedMCC)

// const categories = useState('categories', () => [
//     { description: 'Cable', transactions: [{ amount: 120 }] },
//     { description: 'Grocery Stores', transactions: [{ amount: 400 }] }

// ])
// console.log(usedMCC);
// console.log(transactioninfo[0].MCCDescription.edited_description)
</script>
<script>
//Notification.requestPermission();
function notify() {
    alert('You overspent on uneeded amenities, Shame!')
    //const note = new Notification('Hi there', { body: 'This is a notiification'})
}
export default {
    data() {
        return {
            categories: [
                { description: 'Cable', transactions: [{ amount: 120, original: 120 }] },
                { description: 'Grocery Stores', transactions: [{ amount: 400, original: 400 }] },
                { description: 'Grapiics Cards', transactions: [{ amount: 1200, original: 1200 }] },
                { description: 'Gummy Bears', transactions: [{ amount: 100, original: 100 }] },

            ],
        }
    }
}
</script>
<template>
    <main class="d-flex flex-column container-fluid justify-content-center align-items-center">
        <div class="gray-card" v-for="category in categories">
            <p>{{ category.description }}</p>
            <input type="number" v-model="category.transactions[0].amount">
            <p :class="{ red: ((category.transactions[0].original - category.transactions[0].amount) < 0), green: ((category.transactions[0].original - category.transactions[0].amount) > 0) }">{{ category.transactions[0].original - category.transactions[0].amount }}</p>
            <button type="button" class="btn btn-primary">Limit</button>
        </div>
        <br style="border: 1px solid black;">
    <button class="btn btn-primary" @click="notify()">Test alert!</button>
    </main>
    
</template>
<style>
/* * {
      box-sizing: border-box;
    } */

/* body {
      font-family: Arial, Helvetica, sans-serif;
    } */

/* Float four columns side by side */
.column {
    float: left;
    width: 25%;
    padding: 0 10px;
}

/* Remove extra left and right margins, due to padding */
.row {
    margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
    .column {
        width: 100%;
        display: block;
        margin-bottom: 20px;
    }
}

/* Style the counter cards */
.gray-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 16px;
    text-align: center;
    background-color: #f1f1f1;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.card>input {
    border: none;
}

.card>* {
    margin: 10px;
}

.card {
    max-width: 40rem;
}

.red {
    color: var(--bs-danger)
}
.green {
    color: var(--bs-success)
}
.container-fluid {
    height: 100%;
}
</style>