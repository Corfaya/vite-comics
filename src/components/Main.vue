<script>
import BlueSection from './partials/Blue-section.vue'
import Hero from './partials/Hero.vue';
import ComicsSection from './partials/ComicsSection.vue';
import comics from '../data/comicsList';
export default {
    components: {
        Hero,
        ComicsSection,
        BlueSection
    },
    data() {
        return {
            comics
        }
    }
}
</script>
<template>
    <main>
        <Hero />
        <div class="bg-color pt-5">
            <div class="container">
                <div class="row">
                    <ComicsSection v-for="thumb, index in comics" :key="`t-${index}`" :cover="thumb"/>
                    <div class="col-12">
                        <div class="d-flex justify-content-center my-4">
                            <button class="btn text-uppercase fw-bolder text-white rounded-0">Load More</button>
                        </div>
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
            .col-12 {
                button {
                    background-color: variables.$primary_color;
                    border: 1px solid variables.$primary_color;
                    padding: 10px 60px;
                    transition: all 0.3 ease;
                    &:hover {
                        background-color: #ffffffa1;
                        color: #fff;
                        border: 1px solid #ffffffa1
                    }
                }
            }
        }

        .bg_blue {
            background-color: variables.$primary_color;
        }
    }
</style>