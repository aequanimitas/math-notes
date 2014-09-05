(function integral(strategyfn, start, end, increment) {
  for (var ct = start; ct <= end; ct += increment) {
    console.log(strategyfn(ct));
  }
})(ring_strategy, 0, 0.5, 0.1);

function ring_strategy(r) {
  return ((2 * Math.PI * r) * r) / 2;
}
