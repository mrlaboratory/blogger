var qsa = (e, l) => {
    let t = document.querySelectorAll(e);
    for (let e = 0; e < t.length; e++) l(t[e], e)
};
window.addEventListener("load", () => {
    qsa(".main-container .blog-posts .post .post_thumb a", t => {
            let e = document.createElement("img");
            e.alt = "Image", e.sizes = "(max-width: 420px) 360px, (max-width: 600px) 480px, (max-width: 768px) 576px, (min-width: 1024px) 860px, 860px", e.src = t.getAttribute("data-src"), e.srcset = t.getAttribute("data-srcset"), e.onload = (() => {
                t.removeAttribute("class"), t.appendChild(e)
            })
        }),
        qsa("#PopularPosts1 .post .post_thumb a", t => {
            let e = document.createElement("img");
            e.alt = "Image", e.sizes = "130px", e.src = t.getAttribute("data-src"), e.srcset = t.getAttribute("data-srcset"), e.onload = (() => {
                t.removeAttribute("class"), t.appendChild(e)
            })
        })
});
