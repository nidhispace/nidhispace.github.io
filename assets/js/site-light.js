/* Shared behaviour for the light pages: reveal-on-scroll and footer year */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .1 });
    items.forEach(function (el) { io.observe(el); });
  } else items.forEach(function (el) { el.classList.add('in'); });
})();
