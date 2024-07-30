<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    isClicked: false,
                    label: "Characters",
                    url: "#"
                },
                {
                    isClicked: true,
                    label: "Comics",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Movies",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Tv",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Games",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Collectibles",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Videos",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Fans",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "News",
                    url: "#"
                },
                {
                    isClicked: false,
                    label: "Shop",
                    url: "#"
                },
            ]
        }
    }
}
</script>
<template>
    <header class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between align-items-center">
                        <a href="/"><img class="img-fluid" src="../assets/dc-logo.png" alt="DC Comics"></a>
                        <ul class="list-unstyled d-flex">
                            <li v-for="item, i in menuItems" :key="i" class="px-2 fw-bolder"><a class="text-decoration-none text-uppercase" :class=" { 'active' : item.isClicked } " :href="item.url"> {{ item.label }} </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables";
    header {
        height: 100px;
        img {
            width: 70px;
        }
        ul {
            a {
                color: #000;
                transition: color 0.3s ease;
                &:hover {
                    color: variables.$hover_primary;
                }
            }
            .active {
                color: variables.$primary_color;
                border-bottom: 5px solid variables.$primary_color;
                padding-bottom: 42px;
            }
        }
    }
</style>