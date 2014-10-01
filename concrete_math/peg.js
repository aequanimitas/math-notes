function Peg() {
  this.disk_stack = [];
}

Peg.prototype = {
  stack: function(disk) {
    if (this.stackable(disk)) {
      this.disk_stack.push(disk);
      operation_counter += 1;
    } 
  },
  stackable: function (disk) {
    if (this.empty()) return true;
    return this.disk_stack[this.disk_stack.length - 1] > disk ? true : false;
  },
  empty: function () {
    return this.disk_stack.length == 0 ? true : false;
  }
}

module.exports = Peg;
