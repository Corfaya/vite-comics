<script>
import { dcComicsList, shopList, dcList, sitesList, socials } from "../data/menuLists"
export default {
    data() {
        return {
            dcComicsList,
            shopList,
            dcList,
            sitesList,
            socials
        }
    }
}
</script>
<template>
    <footer>
        <div class="bg-image">
            
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex py-4 bg-logo">
                                <div class="me-5">
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">DC Comics</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in dcComicsList" :key="`c-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">Shop</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in shopList" :key="`sh-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                </div>
                                <div class="me-5">
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">DC</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in dcList" :key="`dc-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                </div>
                                <div class="me-5">
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">Sites</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in sitesList" :key="`s-${index}`"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
        <div class="bg-color">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="py-4 d-flex justify-content-between">
                            <button class="btn text-white rounded-0">Sign-up Now!</button>
                            <div class="d-flex">
                                <h4 class="text_blue text-uppercase me-4">Follow us</h4>
                                <a v-for="img, index in socials" :key="index" class="mx-2" href="#"><img :src="img.path" :alt="img.alt"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables";
footer {
    .bg-image {
        background-image: url("../assets/footer-bg.jpg");
        background-size: cover;
        z-index: 2;
        .bg-logo {
            background-image: url("../assets/dc-logo-bg.png");
            background-position: right;
            background-repeat: no-repeat
        }
    }
    .col-12 {
        ul {
            a {
                color: #838383;
                transition: color 0.3 ease;
                &:hover {
                    color: #a5a5a5
                }
            }
        }
    }

    .bg-color {
        background-color: variables.$footer_bg;
        button {
            border: 1px solid variables.$primary_color;
            transition: all 0.3 ease;
            &:hover {
                background-color: #ffffffa1;
                color: #fff;
                border: 1px solid #ffffffa1
            }
        }
    }

    .text_blue {
        color: variables.$primary_color;
    }
}
</style>