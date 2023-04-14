<script>
export default {
    name: 'CategoryCard',
    props: ['category'],
    data() {
        return {}
    }
}
</script>
<template>
    <div class="card h-100 w-100 maw-100px">
        <div class="card-body">
            <span class="card-title titlebar">
                <h3>Hi</h3><Arrow class="right" color="red"></Arrow>
            </span>
            <p class="card-text">This is your card!</p>       
        </div>

    </div>
</template>
<style>
.titlebar {
    display: inline-flex;
    height: 1em;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.right {
    height: 100%;
    aspect-ratio: 1;
}
.maw-100px {
    max-width: 768px;
    aspect-ratio: 5 / 3;
    /* idea is that if there's a chance that this will be loaded on moblie, setting an aspect ratio will   */ 
}
</style> let us run on desktop and moibile