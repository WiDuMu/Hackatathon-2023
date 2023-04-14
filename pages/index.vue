<script setup>
const goals = useState('goals', () => [
    {
        name: "Pay off student loans",
        amount: 15000

    }
])
</script>

<template>
    <main class="container-fluid text-center">
        <div class="">
            <h1>Goal: {{ goals[0]["name"] }}</h1>
            <h2 class="warning">Remaining amount: {{ goals[0]["amount"] }}</h2>
        </div>
        <div class="row">
            <div class="col">
                <div class="card container">
                    <table class="table">
                        <thead>
                            <tr class="">
                                <th scpoe="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>:)</td>
                                <td>Pete's Pizza</td>
                                <td>$500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col">
                <table>
                    <tr><td>HI</td></tr>
                </table>
            </div>
            <div class="col">

            </div>
        </div>

    </main>
</template>
<style>
.box {
    border: 1px black solid;
    min-width: 100px;
    min-height: 100px;
}

.center {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>