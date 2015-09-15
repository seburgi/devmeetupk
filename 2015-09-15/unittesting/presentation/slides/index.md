- title : Unit Testing - DevMeetupK #03
- description : Introduction to Unit Testing in JavaScript
- author : Sebastian Burgstaller
- theme : night
- transition : default

***

# Unit Testing

### mit JavaScript

Sebastian Burgstaller

[@seburgi](https://twitter.com/seburgi) - [seburgi.com](http://seburgi.com)

***

### Warum Testen?

Wir testen unsere Software um die gewünschte Qualität zu erreichen und über die Zeit zu gewährleisten.

***

### Testarten

* Akzeptanztest
* Abnahmetest
* Benutzbarkeitstest
* Codereview
* Installationstest
* Integrationstest
* Stresstest
* Sicherheitstest
* ...
* <b>Unit Test</b>

***

### Manuelle vs. automatisierte Tests

---

### Manuelle Tests

* Können schnell wertvolles Feedback liefern
* Jede Wiederholung (z.B. nach jedem Deployment) bindet Resourcen für eine bestimmte Zeit

---

### Automatisierte Tests

* Sind am Anfang tendenziell zeitaufwendiger
* Können beliebig oft wiederholt werden
* Ermöglichen 
 * Testausführung nach jeder Codeänderung
 * Automatisiertes erzeugen von Testprotokollen
 * Continous Integration

***

### Der Unit Test

> "A unit test is an automated piece of code that invokes a unit of work in the system and then checks a single assumption about the behavior of that unit of work."

[http://artofunittesting.com/definition-of-a-unit-test/](http://artofunittesting.com/definition-of-a-unit-test/)

---

### Triple A

* <b>Arrange</b> - Testobjekt und Abhängigkeiten vorbereiten
* <b>Act</b> - Zu testende Aktion durchführen
* <b>Assert</b> - Ergebnis prüfen

---

### Beispiel

	[lang=js]
	var converter = new ColorConverter(); // Arrange
	var result = converter.rgbToHex(255, 0, 0);  // Act
	expect(result).to.equal("ff0000"); // Assert

---

### Tipps

* Testing Framework verwenden
* Zur Größe eines Unit Tests

---

### Demo Hex-Converter

***

### TDD - Test Driven Development

* Die Tests entstehen vor dem eigentlichen Code
* Initial mehr Aufwand als wenn einfach nur Code geschrieben wird
* Gibt lanfristig Sicherheit beim Erweitern und Umbauen des Codes
* Ständig wachsende Dokumentation des Codes

---

### Red, Green, Refactor

---


### <span style="color: red">Red<span>

* Test schreiben und ausführen
* Ergebnis: <span style="color: red">Fehler!</span>
* Wir formulieren damit unsere Erwartungshaltung gegenüber unserem Code.

---

### <span style="color: green">Green<span>

* Wir verändern unseren Code so, dass der Test <span style="color: green">grün</span> wird.
* Dafür soll der kürzeste und einfachste Weg gewählt werden.
* Damit haben wir einen Aspekt des gewünschten Verhaltens umgesetzt.
* Alle bisherigen Tests dürfen danach nicht fehlschlagen.

---

### <span style="color: orange">Refactor<span>

* In dieser Phase wird der gerade geschriebene Code verbessert
* Ziel ist, den Code wartbar und sauber strukturiert zu halten
 * Duplikate werden entfernt
 * Wiederverwendbare Funktionalität wird ausgelagert
 * ...
* Alle bisherigen Tests dürfen danach nicht fehlschlagen.

---

### Demo FizzBuzz

> * Schreiben Sie eine Funktion die eine beliebige Menge von Zahlen entgegennehmen kann.
> * Wenn eine Zahl durch drei teilbar ist, tauschen Sie die Zahl gegen das Wort "Fizz" aus.
> * Wenn die Zahl dagegen durch fünf teilbar ist, tauschen Sie die Zahl gegen das Wort "Buzz" aus.
> * Sollte die Zahl sowohl durch drei als auch durch fünf teilbar sein, tauschen sie die Zahl gegen das Wort "FizzBuzz" aus.

***

### Frontend Frameworks

Unit Testen funktioniert nicht nur bei selbstgeschriebenem Code, ohne externe Abhängigkeiten.
Clientseitige Frameworks wie Angular, oder React sind sogar extra darauf <b>optimiert</b> testbar zu sein!

---

### Angular

* [karma](http://karma-runner.github.io/0.13/index.html)
* [mocha](http://mochajs.org/)
* [ngMock](https://docs.angularjs.org/api/ngMock)

---

### Demo Angular
[https://github.com/johnpapa/ng-patterns-testing]

***

### Zusammenfassung

Wir schreiben Unit Tests um

* die Qualität zu erhöhen
* sicher Änderungen in bestehendem Code durchführen zu können
* auf Dauer Zeit zu sparen
* nachts besser schlafen zu können ;-)

---

### JavaScript speziell

* es gibt gute Test-Frameworks (mocha, chai, qunit, ...)
* moderne Frontend Libraries unterstützen beim Testen


Es gibt also keine Ausrede für fehlende Tests bei Frontend Code ;-)


***

### Fragen?

<br>
<br>

Sebastian Burgstaller

[@seburgi](https://twitter.com/seburgi) - [seburgi.com](http://seburgi.com)

