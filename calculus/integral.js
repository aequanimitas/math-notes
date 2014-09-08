(function integral(strategyfn, start, end, increment) {
  for (var ct = start; ct <= end; ct += increment) {
    console.log(strategyfn(ct));
  }
})(ring_strategy, 0, 0.5, 0.1);

function ring_strategy(r) {
  return (circular(r) * r) / 2;
}

function circular(r) {
  return 2 * Math.PI * r;
}
