<script>
export default {
    props: {
        cover: Object
    }
}
</script>
<template>
    <div class="col-2">
        <div class="cover-box">
            <img :src="cover.thumb" :alt="cover.series" class="img-fluid">
        </div>
    </div>
</template>
<style lang="scss" scoped>
div.cover-box {
   min-width: 200px;
    aspect-ratio: 1 / 1;
    img {
        min-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: top;
    }
}
</style>