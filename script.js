document.getElementById("calculate").addEventListener("click", function () {
  const n = parseFloat(document.getElementById("periods").value);
  const r = parseFloat(document.getElementById("interestRate").value) / 100;
  const f = parseFloat(document.getElementById("inflationRate").value) / 100;

  if (!isNaN(n) && !isNaN(r) && !isNaN(f)) {
    const epf = (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const pva = Array.from({ length: n }, (_, i) => 1 / Math.pow(1 + f, i + 1)).reduce((a, b) => a + b, 0);
    const roi = (epf * pva - 1) * 100;

    if (roi < 0) {
      document.getElementById("roiResult").textContent = `Lender will end up losing ${Math.abs(roi).toFixed(2)}% in terms of present value.`;
    } else {
      document.getElementById("roiResult").textContent = `Lender will profit ${Math.abs(roi).toFixed(2)}% in terms of present value.`;
    }
  } else {
    alert("Please enter valid values for N, R, and F.");
  }
});

