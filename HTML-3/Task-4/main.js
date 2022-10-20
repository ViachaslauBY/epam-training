let rangeMinPrice = document.getElementById('rangeMinPrice');
let valueMinPrice = document.getElementById('valueMinPrice');
let rangeMaxPrice = document.getElementById('rangeMaxPrice');
let valueMaxPrice = document.getElementById('valueMaxPrice');
let rangeMinRam = document.getElementById('rangeMinRam');
let valueMinRam = document.getElementById('valueMinRam');
let rangeMaxRam = document.getElementById('rangeMaxRam');
let valueMaxRam = document.getElementById('valueMaxRam');


function Range(value, range) {
  value.innerHTML = range.value;
  range.oninput = function() {
    value.innerHTML = this.value;
  };
}

let item1 = new Range(valueMinPrice, rangeMinPrice);
let item2 = new Range(valueMaxPrice, rangeMaxPrice);
let item3 = new Range(valueMinRam, rangeMinRam);
let item4 = new Range(valueMaxRam, rangeMaxRam);