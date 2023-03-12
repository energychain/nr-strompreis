# nr-strompreis
NodeRed Node to retrieve electricity price in Germany (local and national)

## Introduction
Retrieves and provides data by public service for [Marktdaten-Strompreis](https://corrently.io/books/marktdaten-strompreis).

### Input
Uses either msg.payload or msg.payload.zip as zipcode (Postleitzahl) to calculate local prices. Overwrites `Postal Code` given in node configuration. 

### Outputs
Latest electricits price for Germany as msg.payload:

Sample Output
```json
{
      "start_timestamp": 1669314600000,
      "end_timestamp": 1669318200000,
      "marketprice": 285.5,
      "unit": "Eur/MWh",
      "localprice": 269.51,
      "localcell": "Wiesloch(69168)"
}
```

## Maintainer / Imprint

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
kontakt@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)
</addr>


## LICENSE
[Apache-2.0](LICENSE)