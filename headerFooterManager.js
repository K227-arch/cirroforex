class SpecialHeader extends HTMLElement {
    connectedCallback() {
                this.innerHTML = `
            <header class="navbar navbar-expand-lg navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="img/user/header-logo-LxR0VE.svg" alt="logo" width="122" height="36" class="d-inline-block">
            </a>
            <div class="collapse navbar-collapse d-flex justify-content-between d-none d-xl-block" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="index.html" id="dropdown-home" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                       
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="markets.html">Markets</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown-company" data-bs-toggle="dropdown" aria-expanded="false">Company</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="about.html">About</a></li>
                            <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                            <li><a class="dropdown-item" href="contact.html">Contact</a></li>
                        </ul>
                    </li>
                   
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown-resources" data-bs-toggle="dropdown" aria-expanded="false">Resources</a>
                        <ul class="dropdown-menu dropdown-large-menu">
                            <li>
                                <div class="row">
                                    <div class="col-6">
                                        <ul class="list-unstyled">
                                            <li><a class="dropdown-item" href="help-center.html">Help Center</a></li>
                                            <li><a class="dropdown-item" href="customers.html">Customers</a></li>
                                            <li><a class="dropdown-item" href="roadmap.html">Roadmap</a></li>
                                            <li><a class="dropdown-item" href="legal-docs.html">Legal Docs<i class="fas fa-gavel fa-sm"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="col-6 border-start child-menu-text">
                                        <p>Adipiscing elit sed do eiusmod incididunt ut labore dolore magna lorem ipsum sit dolor amet consectetur</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="optional-link d-flex align-items-center ms-4 d-none d-xl-block">
                    <a href="signin.html" class="btn btn-link me-3"><i class="fas fa-circle-user"></i>Login</a>
                    <a href="signin.html" class="btn btn-info">Request a demo</a>
                </div>
            </div>
        </div>
    </header>
      `;
    }
 }

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="py-5 in-cirro-footer">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="row gx-0 mb-3">
                        <div class="col-md-12 col-lg-3 footer-logo">
                            <img src="img/user/footer-logo-5vqlhb.svg" alt="footer-logo" width="122" height="36" class="mb-1 d-block">
                            <a class="lead footer-email" href="mailto:info@cirro-invest.id">info@cirro-invest.id</a>
                        </div>
                        <div class="col-md-12 col-lg-9">
                            <div class="d-flex flex-column flex-xl-row justify-content-xl-end">
                                <ul class="list-inline in-footer-link order-last order-xl-first">
                                    <li class="list-inline-item"><a href="#">Contact</a></li>
                                    <li class="list-inline-item"><a href="#">FAQ</a></li>
                                    <li class="list-inline-item"><a href="#">Carreers</a></li>
                                    <li class="list-inline-item"><a href="#">Partners</a></li>
                                    <li class="list-inline-item"><a href="#">Integrations</a></li>
                                    <li class="list-inline-item"><a href="#">Security</a></li>
                                </ul>
                                <!-- social media begin -->
                                <div class="social-media-list small hstack gap-3 ms-lg-5 order-first order-xl-last">
                                <div><a href="https://www.facebook.com/indonez" class="color-facebook text-decoration-none"><i class="fab fa-facebook-square"></i> Facebook</a></div>
                                <div><a href="https://twitter.com/indonez_tw" class="color-twitter text-decoration-none"><i class="fab fa-twitter"></i> Twitter</a></div>
                                <div><a href="#some-link" class="color-linkedin text-decoration-none"><i class="fab fa-linkedin"></i> Linkedin</a></div>
                                </div>
                                <!-- social media end -->
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-3 mt-5 d-flex">
                            <div class="align-self-end">
                                <p class="mb-0 copyright-text">©2022 Cirro Invest Ltd. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-9 d-lg-flex justify-content-lg-end d-none d-lg-block">
                            <div class="align-self-end">
                                <nav class="nav in-footer-link-2">
                                    <a class="nav-link border-end-md" href="#">Risk Disclosure</a>
                                    <a class="nav-link border-end-md" href="#">Privacy policy</a>
                                    <a class="nav-link border-end-md" href="#">Return policy</a>
                                    <a class="nav-link border-end-md" href="#">Customer Agreement</a>
                                    <a class="nav-link pe-0" href="#">AML policy</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;
    }
}


customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
