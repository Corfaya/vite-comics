<script>
import BlueSection from './partials/Blue-section.vue'
import Hero from './partials/Hero.vue';
import ComicsSection from './partials/ComicsSection.vue';

export default {
    components: {
        Hero,
        ComicsSection,
        BlueSection
    }
}
</script>
<template>
    <main>
        <Hero />
        <div class="bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                            <ComicsSection />
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