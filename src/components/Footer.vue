<script>
export default {
    data() {
        return {
            dcComicsList: [
                {
                    label: "Characters",
                    path: "#"
                },
                {
                    label: "Comics",
                    path: "#"
                },
                {
                    label: "Movies",
                    path: "#"
                },
                {
                    label: "TV",
                    path: "#"
                },
                {
                    label: "Games",
                    path: "#"
                },
                {
                    label: "Videos",
                    path: "#"
                },
                {
                    label: "News",
                    path: "#"
                }
            ],
            shopList: [
                {
                    label: "Shop DC",
                    path: "#"
                },
                {
                    label: "Shop DC Collectibles",
                    path: "#"
                }
            ],
            dcList: [
                {
                    label: "Terms Of Use",
                    path: "#"
                },
                {
                    label: "Privacy policy (New)",
                    path: "#"
                },
                {
                    label: "Ad Choises",
                    path: "#"
                },
                {
                    label: "Advertising",
                    path: "#"
                },
                {
                    label: "Jobs",
                    path: "#"
                },
                {
                    label: "Subscription",
                    path: "#"
                },
                {
                    label: "Talent Workshops",
                    path: "#"
                },
                {
                    label: "CPSC Certificates",
                    path: "#"
                },
                {
                    label: "Ratings",
                    path: "#"
                },
                {
                    label: "Shop Help",
                    path: "#"
                },
                {
                    label: "Contact Us",
                    path: "#"
                }
            ],
            sitesList: [
                {
                    label: "DC",
                    path: "#"
                },
                {
                    label: "MAD Magazione",
                    path: "#"
                },
                {
                    label: "DC Kids",
                    path: "#"
                },
                {
                    label: "DC Universe",
                    path: "#"
                },
                {
                    label: "DC Power Visa",
                    path: "#"
                }
            ],
            socials: [
                {
                alt: "Facebook",
                path: "./src/assets/footer-facebook.png"
            },
            {
                alt: "Twitter",
                path: "./src/assets/footer-twitter.png"
            },
            {
                alt: "Youtube",
                path: "./src/assets/footer-youtube.png"
            },
            {
                alt: "Pinterest",
                path: "./src/assets/footer-pinterest.png"
            },
            {
                alt: "Periscope",
                path: "./src/assets/footer-periscope.png"
            },

            ]
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
                                        <li v-for="link, index in dcComicsList" :key="index"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">Shop</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in shopList" :key="index"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                </div>
                                <div class="me-5">
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">DC</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in dcList" :key="index"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
                                    </ul>
                                </div>
                                <div class="me-5">
                                    <h4 class="py-3 text-white fw-bolder text-uppercase">Sites</h4>
                                    <ul class="list-unstyled">
                                        <li v-for="link, index in sitesList" :key="index"><a class="text-decoration-none" :href="link.path">{{link.label}}</a></li>
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