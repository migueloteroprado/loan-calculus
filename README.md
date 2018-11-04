# Loan Calculus

Monthly fee calculator and amortization table of a loan

## Install

```shell
npm install loan-calculus
```

## Usage

The module exports a function with the following params:
- *amount* (number): the loan amount
- *interest* (number): yearly interest
- *months* (integer): number of months to amortize
- *genTable* (boolean): indicates if we want to obtain also the amortization table, default true
- *decimals* (integer): indicates the decimal places for the results, default 2

Returns:

An object with the following format: 

```json
{
  "amount": 1000,
  "interest": 84.92,
  "months": 12,
  "fee": 84.92,
  "totalInterest": 19.06,
  "total": 1019.06,
  "table": [
    {
      "month": 1,
      "fee": 84.92,
      "interest": 2.92,
      "amortization": 82,
      "totalInterest": 2.92,
      "totalAmortization": 82,
      "pendingAmount": 918
    },
    ...
  ]
}
```

### Example

```javascript
const calculator = require('loan-calculus');
const result = calculator(10000, 3, 24, true, 2);
console.log(result);
```

result will be:

```json
{  
   "amount": 10000,
   "fee": 429.81,
   "totalInterest": 315.49,
   "total": 10315.49,
   "table": [  
      {  
         "month": 1,
         "fee": 429.81,
         "interest": 25,
         "amortization": 404.81,
         "totalInterest": 25,
         "totalAmortization": 404.81,
         "pendingAmount": 9595.19
      },
      {  
         "month": 2,
         "fee": 429.81,
         "interest": 23.99,
         "amortization": 405.82,
         "totalInterest": 48.99,
         "totalAmortization": 810.64,
         "pendingAmount": 9189.36
      },
      {  
         "month": 3,
         "fee": 429.81,
         "interest": 22.97,
         "amortization": 406.84,
         "totalInterest": 71.96,
         "totalAmortization": 1217.47,
         "pendingAmount": 8782.53
      },
      {  
         "month": 4,
         "fee": 429.81,
         "interest": 21.96,
         "amortization": 407.86,
         "totalInterest": 93.92,
         "totalAmortization": 1625.33,
         "pendingAmount": 8374.67
      },
      {  
         "month": 5,
         "fee": 429.81,
         "interest": 20.94,
         "amortization": 408.88,
         "totalInterest": 114.85,
         "totalAmortization": 2034.21,
         "pendingAmount": 7965.79
      },
      {  
         "month": 6,
         "fee": 429.81,
         "interest": 19.91,
         "amortization": 409.9,
         "totalInterest": 134.77,
         "totalAmortization": 2444.1,
         "pendingAmount": 7555.9
      },
      {  
         "month": 7,
         "fee": 429.81,
         "interest": 18.89,
         "amortization": 410.92,
         "totalInterest": 153.66,
         "totalAmortization": 2855.03,
         "pendingAmount": 7144.97
      },
      {  
         "month": 8,
         "fee": 429.81,
         "interest": 17.86,
         "amortization": 411.95,
         "totalInterest": 171.52,
         "totalAmortization": 3266.98,
         "pendingAmount": 6733.02
      },
      {  
         "month": 9,
         "fee": 429.81,
         "interest": 16.83,
         "amortization": 412.98,
         "totalInterest": 188.35,
         "totalAmortization": 3679.96,
         "pendingAmount": 6320.04
      },
      {  
         "month": 10,
         "fee": 429.81,
         "interest": 15.8,
         "amortization": 414.01,
         "totalInterest": 204.15,
         "totalAmortization": 4093.97,
         "pendingAmount": 5906.03
      },
      {  
         "month": 11,
         "fee": 429.81,
         "interest": 14.77,
         "amortization": 415.05,
         "totalInterest": 218.92,
         "totalAmortization": 4509.01,
         "pendingAmount": 5490.99
      },
      {  
         "month": 12,
         "fee": 429.81,
         "interest": 13.73,
         "amortization": 416.08,
         "totalInterest": 232.65,
         "totalAmortization": 4925.1,
         "pendingAmount": 5074.9
      },
      {  
         "month": 13,
         "fee": 429.81,
         "interest": 12.69,
         "amortization": 417.12,
         "totalInterest": 245.33,
         "totalAmortization": 5342.22,
         "pendingAmount": 4657.78
      },
      {  
         "month": 14,
         "fee": 429.81,
         "interest": 11.64,
         "amortization": 418.17,
         "totalInterest": 256.98,
         "totalAmortization": 5760.39,
         "pendingAmount": 4239.61
      },
      {  
         "month": 15,
         "fee": 429.81,
         "interest": 10.6,
         "amortization": 419.21,
         "totalInterest": 267.58,
         "totalAmortization": 6179.6,
         "pendingAmount": 3820.4
      },
      {  
         "month": 16,
         "fee": 429.81,
         "interest": 9.55,
         "amortization": 420.26,
         "totalInterest": 277.13,
         "totalAmortization": 6599.87,
         "pendingAmount": 3400.13
      },
      {  
         "month": 17,
         "fee": 429.81,
         "interest": 8.5,
         "amortization": 421.31,
         "totalInterest": 285.63,
         "totalAmortization": 7021.18,
         "pendingAmount": 2978.82
      },
      {  
         "month": 18,
         "fee": 429.81,
         "interest": 7.45,
         "amortization": 422.37,
         "totalInterest": 293.08,
         "totalAmortization": 7443.54,
         "pendingAmount": 2556.46
      },
      {  
         "month": 19,
         "fee": 429.81,
         "interest": 6.39,
         "amortization": 423.42,
         "totalInterest": 299.47,
         "totalAmortization": 7866.96,
         "pendingAmount": 2133.04
      },
      {  
         "month": 20,
         "fee": 429.81,
         "interest": 5.33,
         "amortization": 424.48,
         "totalInterest": 304.8,
         "totalAmortization": 8291.44,
         "pendingAmount": 1708.56
      },
      {  
         "month": 21,
         "fee": 429.81,
         "interest": 4.27,
         "amortization": 425.54,
         "totalInterest": 309.07,
         "totalAmortization": 8716.98,
         "pendingAmount": 1283.02
      },
      {  
         "month": 22,
         "fee": 429.81,
         "interest": 3.21,
         "amortization": 426.6,
         "totalInterest": 312.28,
         "totalAmortization": 9143.59,
         "pendingAmount": 856.41
      },
      {  
         "month": 23,
         "fee": 429.81,
         "interest": 2.14,
         "amortization": 427.67,
         "totalInterest": 314.42,
         "totalAmortization": 9571.26,
         "pendingAmount": 428.74
      },
      {  
         "month": 24,
         "fee": 429.81,
         "interest": 1.07,
         "amortization": 428.74,
         "totalInterest": 315.49,
         "totalAmortization": 10000,
         "pendingAmount": 0
      }
   ]
}

```
