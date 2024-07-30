<script>
export default {
    
}
</script>
<template>
    <div class="bg-hero">
        <button class="btn main-btn text-uppercase fw-bolder text-white rounded-0 position-relative">Current Series</button>
    </div>
</template>
<style lang="scss" scoped>
@use "../../styles/partials/variables";
    .bg-hero {
        background-image: url("../../assets/jumbotron.jpg");
        background-size: cover;
        height: 400px;
        .main-btn {
            left: 10%;
            top: 92%;
            padding: 10px 20px;
            font-size: 24px;
            left: 10%;
            background-color: variables.$primary_color;
            transition: all 0.3 ease;
            &:hover {
                background-color: darken(variables.$primary_color, 10%);
            }
        }
    }
</style>