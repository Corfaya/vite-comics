<script>
import BlueSection from './partials/Blue-section.vue';

export default {
    components: {
        BlueSection
    }
}
</script>
<template>
    <main>
        <div class="bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <h2 class="text-light py-5">--> Content goes here <--</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg_blue">
            <div class="container">
                 <div class="row">
                    <div class="col-12">
                        <BlueSection />
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

        .bg_blue {
            background-color: variables.$primary_color;
        }
    }
</style>