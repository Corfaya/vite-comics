<script>
export default {
    
}
</script>
<template>
    <main class="position-relative z-3">
        <div class="py-5 bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <h2 class="text-light">--> Content goes here <--</h2>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    @use "../styles/partials/variables";
    main {
        .bg-color {
            background-color: variables.$main_bg;
        }
    }
</style>