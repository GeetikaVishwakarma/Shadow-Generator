const preview = document.getElementById('preview');
const output = document.getElementById('css-output');

const inputs = {
  hOffset: document.getElementById('h-offset'),
  vOffset: document.getElementById('v-offset'),
  blur: document.getElementById('blur'),
  spread: document.getElementById('spread'),
  color: document.getElementById('color'),
  inset: document.getElementById('inset'),
};

function updateShadow() {
  const h = inputs.hOffset.value;
  const v = inputs.vOffset.value;
  const blur = inputs.blur.value;
  const spread = inputs.spread.value;
  const color = inputs.color.value;
  const inset = inputs.inset.checked ? 'inset ' : '';

  const shadow = `${inset}${h}px ${v}px ${blur}px ${spread}px ${color}`;
  preview.style.boxShadow = shadow;
  output.textContent = `box-shadow: ${shadow};`;
}

Object.values(inputs).forEach(input => input.addEventListener('input', updateShadow));

updateShadow();
