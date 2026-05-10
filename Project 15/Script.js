function calculatePension()
{
let basicPay = Number(document.getElementById("basicPay").value);
let msp = Number(document.getElementById("msp").value);
let clPay = Number(document.getElementById("clPay").value);
let xPay = Number(document.getElementById("xPay").value);

let daPercent = Number(document.getElementById("daPercent").value);

let commutationPercent = Number(document.getElementById("commutationPercent").value);

let age = Number(document.getElementById("age").value);

let serviceYears = Number(document.getElementById("serviceYears").value);


// SERVICE PENSION

let totalPay = basicPay + msp + clPay + xPay;

let basicPension = totalPay / 2;

let daOnPension = basicPension * (daPercent / 100);

let fullPension = basicPension + daOnPension;


// COMMUTATION

let commutedPension = basicPension * (commutationPercent / 100);

let purchaseTable = {
20: 9.188,
21: 9.187,
22: 9.186,
23: 9.185,
24: 9.184,
25: 9.183,
26: 9.182,
27: 9.180,
28: 9.178,
29: 9.176,
30: 9.173,
31: 9.169,
32: 9.164,
33: 9.159,
34: 9.152,
35: 9.145,
36: 9.136,
37: 9.126,
38: 9.116,
39: 9.103,
40: 9.090,
41: 9.075,
42: 9.059,
43: 9.040,
44: 9.019,
45: 8.996,
46: 8.971,
47: 8.943,
48: 8.913,
49: 8.881,
50: 8.846,
51: 8.808,
52: 8.768,
53: 8.724,
54: 8.678,
55: 8.627,
56: 8.572,
57: 8.512,
58: 8.446,
59: 8.371,
60: 8.287,
61: 8.194,
62: 8.093,
63: 7.982,
64: 7.862,
65: 7.731
};

let purchaseValue = purchaseTable[age];

if(!purchaseValue)
{
alert("Invalid age for commutation table");
return;
}

let totalCommutationAmount =
commutedPension * 12 * purchaseValue;

let residualPension =
basicPension - commutedPension;

let residualDA =
residualPension * (daPercent / 100);

let pensionAfterCommutation =
residualPension + residualDA;


// GRATUITY

let qualifyingService = serviceYears + 5;

if(qualifyingService > 33)
{
qualifyingService = 33;
}

let lastEmoluments = basicPay + msp + xPay;

let gratuityDA =
lastEmoluments * (daPercent / 100);

let totalEmoluments =
lastEmoluments + gratuityDA;

let grossGratuity =
(totalEmoluments * qualifyingService) / 4;


// OUTPUT

document.getElementById("totalPay").innerText =
"Total Pay : " + totalPay.toFixed(2);

document.getElementById("basicPension").innerText =
"Basic Pension : " + basicPension.toFixed(2);

document.getElementById("daOnPension").innerText =
"DA on Pension : " + daOnPension.toFixed(2);

document.getElementById("fullPension").innerText =
"Full Service Pension : " + fullPension.toFixed(2);

document.getElementById("commutedPension").innerText =
"Commuted Pension : " + commutedPension.toFixed(2);

document.getElementById("purchaseValue").innerText =
"Purchase Value : " + purchaseValue;

document.getElementById("commutationAmount").innerText =
"Commutation Amount : " + totalCommutationAmount.toFixed(2);

document.getElementById("residualPension").innerText =
"Residual Pension : " + residualPension.toFixed(2);

document.getElementById("pensionAfterCommutation").innerText =
"Pension After Commutation : " + pensionAfterCommutation.toFixed(2);

document.getElementById("lastEmoluments").innerText =
"Last Emoluments : " + lastEmoluments.toFixed(2);

document.getElementById("gratuityDA").innerText =
"DA on Emoluments : " + gratuityDA.toFixed(2);

document.getElementById("totalEmoluments").innerText =
"Total Emoluments : " + totalEmoluments.toFixed(2);

document.getElementById("qualifyingService").innerText =
"Qualifying Service : " + qualifyingService;

document.getElementById("grossGratuity").innerText =
"Gross Gratuity : " + grossGratuity.toFixed(2);
}