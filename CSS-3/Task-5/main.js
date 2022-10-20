let rangeMinPrice = document.getElementById('rangeMinPrice');
let valueMinPrice = document.getElementById('valueMinPrice');
let rangeMaxPrice = document.getElementById('rangeMaxPrice');
let valueMaxPrice = document.getElementById('valueMaxPrice');
let rangeMinRam = document.getElementById('rangeMinRam');
let valueMinRam = document.getElementById('valueMinRam');
let rangeMaxRam = document.getElementById('rangeMaxRam');
let valueMaxRam = document.getElementById('valueMaxRam');

function range(value, range) {
  value.innerHTML = range.value;
  range.addEventListener('input', function() {
    value.innerHTML = this.value;
  }) 
}

range(valueMinPrice, rangeMinPrice);
range(valueMaxPrice, rangeMaxPrice);
range(valueMinRam, rangeMinRam);
range(valueMaxRam, rangeMaxRam);