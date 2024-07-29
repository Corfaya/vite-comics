<script>
export default {
    
}
</script>
<template>
    <header class="pt-3">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <img class="img-fluid" src="../assets/dc-logo.png" alt="DC Comics">
                        <ul class="list-unstyled d-flex align-items-center">
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Characters</a></li>
                            <li class="px-2 fw-bolder"><a class="active text-decoration-none text-dark text-uppercase" href="#">Comics</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Movies</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">TV</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Games</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Collectibles</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Videos</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Fans</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">News</a></li>
                            <li class="px-2 fw-bolder"><a class="text-decoration-none text-dark text-uppercase" href="#">Shop</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss">
    header {
        ul {
            .active {
                border-bottom: 3px solid blue;
                padding-bottom: 30px;
            }
        }
    }
</style>