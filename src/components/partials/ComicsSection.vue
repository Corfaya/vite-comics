<script>
export default {
    props: {
        cover: Object
    }
}
</script>
<template>
    <div class="col-2 mx-auto">
        <div class="cover-box">
            <img :src="cover.thumb" :alt="cover.series" class="img-fluid">
            <p class="text-uppercase mt-3">{{ cover.series }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
div.cover-box {
    margin: 50px 0;
    min-width: 200px;
    aspect-ratio: 1 / 1;
    img {
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
    }
    p {
        color: white;
    }
}
</style>