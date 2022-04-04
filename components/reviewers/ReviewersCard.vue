<template>
    <div class="review-card ">
        
            <img :src="review.picture.large" alt="">
        
        <div >
            <h6 >{{review.login.username}}</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus quam magni beatae possimus debitis.</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['review'],
    }
</script>

<style scoped>
    .review-card {
        margin-top: 1.5rem;
        height: 4rem;
        display: flex;
    }
   
    img {
        width: 4rem;
        height: 4rem;
        border-radius: 150%;
    }
    p {
        color: grey
    }
</style>