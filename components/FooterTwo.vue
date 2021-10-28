<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <div class="row">
                <div class="col-md-9 col-lg-4 col-xl-4">
                    <div class="widget-item mt-0">
                        <div class="about-widget">
                            <n-link to="/" class="footer-logo">
                                <img src="/images/logo/logo.png" alt="Logo">
                            </n-link>
                            <p>Sou Técnico em Informática pela Escola Estadual de Ensino Profissional Dona Creusa do Carmo Rocha, me formei em 2019 e no momento trabalho como desenvolvedor web júnior...</p>
                            <div class="widget-newsletter">
                                <form>
                                    <input type="email" class="form-control" placeholder="Digite Seu E-mail">
                                    <button type="submit" class="btn btn-theme">
                                        Inscreva-se Agora <i class="icon icofont-long-arrow-right"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-6">
                    <div class="widget-item menu-wrap-two-column">
                        <h4 class="widget-title">Serviços</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">
                        <nav class="widget-menu-wrap">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                        <li><n-link to="/service-details">LP - Network Secure</n-link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="col-md-4 col-lg-2 col-xl-2 lg-pr-0">
                    <div class="widget-item menu-wrap-column">
                        <h4 class="widget-title">Links Rápidos</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                        <nav class="widget-menu-wrap">
                            <ul class="nav-menu nav">
                                <li><n-link to="/">Home</n-link></li>
                                <li><n-link to="/">Sobre</n-link></li>
                                <li><n-link to="/">Serviços</n-link></li>
                                <li><n-link to="/">Blog</n-link></li>
                                <li><n-link to="/">Contato</n-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="widget-copyright">
                                <p>© 2021 <span>Guilherme Viana</span> <i class="icofont-heart"></i></p>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="widget-social-icons">
                                <a href="https://www.linkedin.com/in/guilherme-viana-b6078a190/"><i class="icofont-linkedin"></i></a>
                                <a href="#"><i class="icofont-instagram"></i></a>
                                <a href="#"><i class="icofont-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>