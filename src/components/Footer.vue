<script>
export default {

}
</script>
<template>
    <footer class="position-relative">
        <div class="bg-image">
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="d-flex py-4">
                            <div class="me-5">
                                <h4 class="py-3 text-white fw-bolder text-uppercase">DC Comics</h4>
                                <ul class="list-unstyled">
                                    <li><a class="text-decoration-none text-secondary" href="#">Characters</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Comics</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Movies</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">TV</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Games</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Videos</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">News</a></li>
                                </ul>
                                <h4 class="py-3 text-white fw-bolder text-uppercase">Shop</h4>
                                <ul class="list-unstyled">
                                    <li><a class="text-decoration-none text-secondary" href="#">Shop DC</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Shop DC Collectibles</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="me-5">
                                <h4 class="py-3 text-white fw-bolder text-uppercase">DC</h4>
                                <ul class="list-unstyled">
                                    <li><a class="text-decoration-none text-secondary" href="#">Terms Of Use</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Privacy policy (New)</a>
                                    </li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Ad Choises</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Advertising</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Jobs</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Subscription</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Talent Workshops</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">CPSC Certificates</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Ratings</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Ahop Help</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div class="me-5">
                                <h4 class="py-3 text-white fw-bolder text-uppercase">Sites</h4>
                                <ul class="list-unstyled">
                                    <li><a class="text-decoration-none text-secondary" href="#">DC</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">MAD Magazione</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">DC Kids</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">DC Universe</a></li>
                                    <li><a class="text-decoration-none text-secondary" href="#">DC Power Visa</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="offset-2 col-6">
                    <img class="img-fluid position-absolute" src="../assets/dc-logo-bg.png" alt="DC Logo">
                </div>
                </div>
                
            </div>
        </div>
        <div class="bg-secondary position-relative z-3">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="py-4 d-flex justify-content-between">
                            <button class="btn btn-outline-primary text-white rounded-0">Sign-up Now!</button>
                            <div class="d-flex">
                                <h4 class="text-primary text-uppercase me-4">Follow us</h4>
                                <a class="mx-2" href="#"><img src="../assets/footer-facebook.png" alt="Facebook"></a>
                                <a class="mx-2" href="#"><img src="../assets/footer-twitter.png" alt="Twitter"></a>
                                <a class="mx-2" href="#"><img src="../assets/footer-youtube.png" alt="Youtube"></a>
                                <a class="mx-2" href="#"><img src="../assets/footer-pinterest.png" alt="Pinterest"></a>
                                <a class="mx-2" href="#"><img src="../assets/footer-periscope.png" alt="Periscope"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style lang="scss">
footer {
    .bg-image {
        background-image: url("../assets/footer-bg.jpg");
        background-size: cover;
        z-index: 2;
    }

    .col-6 {
        img {
            top: -30px;
        }
    }
}
</style>