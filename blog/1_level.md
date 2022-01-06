---
sidebar_position: 1
---

# Buchhaltung - Level 1

### Buchungssätze einem Geschäftsfall zuordnen

Hier wir dir ein Buchungssatz vorgegeben und du wählst den passenden Geschäftsfall aus.

:pushpin:**Wichtige Fragestellungen:**

1. Soll oder Haben?<br/>
2. Welche Kontoart - Aktiv oder Passiv?<br/>
3. Zugang :chart_with_upwards_trend: oder Abgang :chart_with_downwards_trend:?<br/>

#### Aufgabe 1

Buchungssatz: **Kasse an Bank**

Wähle einen Geschäftsvorfall:

<div>
  <input type="radio" id="wrong" name="drone" value="wrong"
         checked></input>
  <label for="huey">Barabhebung von deinem Bankonto</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Bareinzahlung auf deinem Bankkonto</label>
</div>

<details>
  <summary>Lösung:</summary>
  <div>
    <div>Barabhebung von deinem Bankkonto</div>
      <br/>
    <details>
      <summary>
        Warum?
      </summary>
      <div>
        1. Soll o. Haben? Kasse = Soll, Bank = Haben<br/>
        2. Kontoart? Kasse = Aktiv, Bank = Aktiv<br/>
        3. Zugang o. Abgang? Kasse = Zugang, Bank = Abgang<br/>
        Kasse wird mehr (Barabhebung), Bank wird weniger (Abheben vom Bankkonto)
      </div>
    </details>
  </div>
</details>

#### Aufgabe 2

Buchungssatz: **Darlehensschulden an Bank**

Wähle einen Geschäftsvorfall:

<div>
  <input type="radio" id="wrong" name="drone" value="wrong"
         checked></input>
  <label for="huey">Wir bekommen ein Darlehen ausgezahlt</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Wir tilgen ein Darlehen durch eine Banküberweisung</label>
</div>

<details>
  <summary>Lösung:</summary>
  <div>
    <div>Wir tilgen ein Darlehen durch eine Banküberweisung</div>
      <br/>
    <details>
      <summary>
        Warum?
      </summary>
      <div>
        1. Soll o. Haben? Darlehnsschulden = Soll, Bank = Haben<br/>
        2. Kontoart? Darlehnsschulden = Passiv, Bank = Aktiv<br/>
        3. Zugang o. Abgang? Darlehnsschulden = Abgang, Bank = Abgang<br/>
        Darlehen wird weniger (Tilgung), Bank wird (Überweisung)
      </div>
    </details>
  </div>
</details>

#### Aufgabe 3

Buchungssatz: **Umsatzsteuer an Bank**

Wähle einen Geschäftsvorfall:

<div>
  <input type="radio" id="wrong" name="drone" value="wrong"
         checked></input>
  <label for="huey">Banküberweisung der Zahllast an das Finanzamt</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Finanzamt zahlt und zuviel gezahlte Umsatzsteuer</label>
</div>

<details>
  <summary>Lösung:</summary>
  <div>
    <div>Banküberweisung der Zahllast an das Finanzamt</div>
      <br/>
    <details>
      <summary>
        Warum?
      </summary>
      <div>
        1. Soll o. Haben? Umsatzsteuer = Soll, Bank = Haben<br/>
        2. Kontoart? Umsatzsteuer = Passiv, Bank = Aktiv<br/>
        3. Zugang o. Abgang? Umsatzsteuer = Abgang, Bank = Abgang<br/>
        Zahllast beglichen, Bank (Überweisung)
      </div>
    </details>
  </div>
</details>

:boom: Jetzt werden **drei** Konten betroffen.

#### Aufgabe 4

Buchungssatz: **Verb. aus Lieferungen und Leistungen an Kasse und an Bank**

Wähle einen Geschäftsvorfall:

<div>
  <input type="radio" id="wrong" name="drone" value="wrong"
         checked></input>
  <label for="huey">Wir nehmen einen Werbedienstleisteung in anspruch und bezahlen teils bar und teils durch Banküberweisung</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Kunde zahlt unsere Ausgangsrechnung teils bar und teils durch Banküberweisung</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Wir begleichen Eingangsrechnung für Werbung in bar und den Rest durch Banküberweisung </label>
</div>

<details>
  <summary>Lösung:</summary>
  <div>
    <div>Wir begleichen Eingangsrechnung für Werbung in bar und den Rest durch Banküberweisung</div>
      <br/>
    <details>
      <summary>
        Warum?
      </summary>
      <div>
        1. Soll o. Haben? Verb. L+L = Soll, Kasse = Haben, Bank = Haben<br/>
        2. Kontoart? Verb. L+L = Passiv, Kasse = Aktiv, Bank = Aktiv<br/>
        3. Zugang o. Abgang? Verb. L+L = Abgang, Kasse = Abgang, Bank = Abgang<br/>
        Verb. L+L werden beglichen, Kasse wird weniger, Bank wird weniger
      </div>
    </details>
  </div>
</details>

:boom:**Was ist ein Zielkauf?**<br/>
Kauf, bei dem die Rechnung erst nach Lieferung zu einem bestimmten Zeitpunkt zur Zahlung fällig wird

#### Aufgabe 5

Buchungssatz: **Büro- und Geschäftsausstattungen (BuGA) und Vorsteuer an Verb. aus Lieferungen und Leistungen**

Wähle einen Geschäftsvorfall:

<div>
  <input type="radio" id="wrong" name="drone" value="wrong"
         checked></input>
  <label for="huey">Verkauf von BuGA auf Rechnung</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Zielkauf von BuGA, Rechnung Netto 5.000 EUR</label>
</div>
<div>
  <input type="radio" id="right" name="drone" value="right"
         checked></input>
  <label for="right">Falsch gelieferte BuGA geht an den Lieferer zurück, Gutschrift des Lieferes</label>
</div>

<details>
  <summary>Lösung:</summary>
  <div>
    <div>Zielkauf von BuGA, Rechnung Netto 5.000 EUR</div>
      <br/>
    <details>
      <summary>
        Warum?
      </summary>
      <div>
        1. Soll o. Haben? BuGA = Soll, Vorsteuer = Soll, Verb. L+L = Haben<br/>
        2. Kontoart? BuGA = Aktiv, Vorsteuer = Aktiv, Verb. L+L = Passiv<br/>
        3. Zugang o. Abgang? BuGA = Zugang, Vorsteuer = Zugang, Verb. L+L = Zugang<br/>
        BuGA wird eingekauft, Vorsteuer bezahlt, Rechnung = Verbindl. L+L
      </div>
    </details>
  </div>
</details>
