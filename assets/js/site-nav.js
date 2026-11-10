/* Shared top navigation: mobile menu toggle */
(function () {
  var nav = document.getElementById('sn-header'); if (!nav) return;
  var btn = nav.querySelector('.sn-burger');
  function set(open) { nav.classList.toggle('open', open); btn.setAttribute('aria-expanded', open); }
  btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  window.addEventListener('resize', function () { if (innerWidth > 960) set(false); });
})();
