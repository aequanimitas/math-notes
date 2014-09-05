(function integral_circle () {
  for (var ct = 0; ct <= 0.5; ct += 0.1) {
    console.log((ring_strategy(ct) * ct) / 2);
  }
})();

function ring_strategy(r) {
  return 2 * Math.PI * r;
}
