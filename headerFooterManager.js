class SpecialHeader extends HTMLElement {
    connectedCallback() {
        // Dynamic logo and links (can be configured globally)
        const logoSrc = "img/user/header-logo-LxR0VE.svg";
        const logoAlt = "Company Logo";
        const navLinks = [
            { name: "Home", url: "index.html" },
            { name: "Products", url: "markets.html" },
            { name: "Company", dropdown: [
                { name: "About", url: "about.html" },
                { name: "Blog", url: "blog.html" },
                { name: "Contact", url: "contact.html" }
            ] },
            { name: "Resources", dropdown: [
                { name: "Help Center", url: "help-center.html" },
                { name: "Customers", url: "customers.html" },
                { name: "Roadmap", url: "roadmap.html" },
                { name: "Legal Docs", url: "legal-docs.html", icon: "fas fa-gavel fa-sm" }
            ] }
        ];

        this.innerHTML = `
            <header class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="index.html">
                         <h1 style="color:#ffd700; margin-top:10px">Gold in Bank!</h1>

                        
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">${this.generateNavItems(navLinks)}</ul>
                        <div class="optional-link d-flex align-items-center ms-4">
                            <a href="signin.html" class="btn btn-link me-3" aria-label="Login"><i class="fas fa-circle-user"></i> Login</a>
                           
                        </div>
                    </div>
                </div>
            </header>
        `;
    }

    generateNavItems(navLinks) {
        return navLinks.map(link => {
            if (link.dropdown) {
                return `
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">${link.name}</a>
                        <ul class="dropdown-menu">
                            ${link.dropdown.map(sub => `<li><a class="dropdown-item" href="${sub.url}">${sub.name} ${sub.icon ? `<i class='${sub.icon}'></i>` : ""}</a></li>`).join('')}
                        </ul>
                    </li>
                `;
            } else {
                return `<li class="nav-item"><a class="nav-link" href="${link.url}">${link.name}</a></li>`;
            }
        }).join('');
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="py-5 in-cirro-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 footer-logo">
                        <img src="img/user/footer-logo.svg" alt="Company Footer Logo" width="122" height="36" class="mb-1 d-block">
                        <a class="lead footer-email" href="mailto:info@example.com">info@example.com</a>
                    </div>
                    <div class="col-lg-9 d-flex justify-content-lg-end">
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#">Contact</a></li>
                            <li class="list-inline-item"><a href="#">FAQ</a></li>
                            <li class="list-inline-item"><a href="#">Careers</a></li>
                            <li class="list-inline-item"><a href="#">Partners</a></li>
                            <li class="list-inline-item"><a href="#">Integrations</a></li>
                            <li class="list-inline-item"><a href="#">Security</a></li>
                        </ul>
                        <div class="social-media-list small hstack gap-3 ms-lg-5">
                            <a href="#" class="text-decoration-none"><i class="fab fa-facebook-square"></i> Facebook</a>
                            <a href="#" class="text-decoration-none"><i class="fab fa-twitter"></i> Twitter</a>
                            <a href="#" class="text-decoration-none"><i class="fab fa-linkedin"></i> Linkedin</a>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-12 text-center">
                        <p class="mb-0 copyright-text">© ${new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                        <nav class="nav justify-content-center mt-2">
                            <a class="nav-link" href="#">Risk Disclosure</a>
                            <a class="nav-link" href="#">Privacy Policy</a>
                            <a class="nav-link" href="#">Return Policy</a>
                            <a class="nav-link" href="#">Customer Agreement</a>
                            <a class="nav-link" href="#">AML Policy</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
