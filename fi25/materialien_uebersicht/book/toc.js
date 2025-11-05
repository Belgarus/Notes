// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="einfuehrung.html">Einführung</a></li><li class="chapter-item expanded affix "><a href="regeln.html">Regeln</a></li><li class="chapter-item expanded "><a href="lernfeld1/uebersicht.html"><strong aria-hidden="true">1.</strong> Lernfeld 1</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lernfeld1/datensammlung.html"><strong aria-hidden="true">1.1.</strong> Datensammlung</a></li></ol></li><li class="chapter-item expanded "><a href="lernfeld2/uebersicht.html"><strong aria-hidden="true">2.</strong> Lernfeld 2</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lernfeld2/datensammlung.html"><strong aria-hidden="true">2.1.</strong> Datensammlung</a></li></ol></li><li class="chapter-item expanded "><a href="lernfeld3/uebersicht.html"><strong aria-hidden="true">3.</strong> Lernfeld 3</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lernfeld3/datensammlung.html"><strong aria-hidden="true">3.1.</strong> Datensammlung</a></li></ol></li><li class="chapter-item expanded "><a href="lernfeld4/uebersicht.html"><strong aria-hidden="true">4.</strong> Lernfeld 4</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lernfeld4/datensammlung.html"><strong aria-hidden="true">4.1.</strong> Datensammlung</a></li></ol></li><li class="chapter-item expanded "><a href="lernfeld5/uebersicht.html"><strong aria-hidden="true">5.</strong> Lernfeld 5</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lernfeld5/datensammlung.html"><strong aria-hidden="true">5.1.</strong> Datensammlung</a></li></ol></li><li class="chapter-item expanded "><a href="berufsschuluebergreifend/einfuehrung.html"><strong aria-hidden="true">6.</strong> Berufsschulübergreifend</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="berufsschuluebergreifend/wk.html"><strong aria-hidden="true">6.1.</strong> Wirtschafts Kunde</a></li><li class="chapter-item expanded "><a href="berufsschuluebergreifend/be.html"><strong aria-hidden="true">6.2.</strong> Business Englisch</a></li><li class="chapter-item expanded "><a href="berufsschuluebergreifend/de.html"><strong aria-hidden="true">6.3.</strong> Deutsch</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
