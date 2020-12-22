---
id: storage-intro
title: Clientseitig Daten speichern
sidebar_label: Einführung
---

In vielen Webanwendungen ist es erwünscht oder gar notwendig, clientseitig Daten zu speichern. 
Der Browser soll also lokal Daten speichern, das kann u.a. für folgende Zwecke sinnvoll sein:
- **Anmeldedaten** werden im Browser gespeichert und dem Server bei jeder Anfrage mitgeschickt, dort auf ihre Gültigkeit überprüft
- **Trackingdaten** werden dazu eingesetzt, damit das Nutzer\*innenverhalten nachverfolgt und analysiert werden kann. Das ist nicht unbedingt im Interesse der Benutzer\*innen, sehr wohl aber im Interesse von Internetunternehmen wie Google, Facebook usw., die damit Profile erstellen können und Werbung besser platzieren können
- **Benutzer*innendefinierte Einstellungen**, so z.B. das jeweils bevorzugte Farbschema
- **Anwendungsdaten**, wie z.B. ein Dokument, an dem man gerade in einer browserbasierten Office-Anwendung arbeiten

Die erwähnten Anwendungsfälle unterscheiden sich grundlegend: Bei Anmelde- und Trackingdaten handelt es sich um recht geringe Datenmengen, die aber bei jeder Anfrage mitgeschickt werden sollen. Benutzer*innendefinierte Einstellungen müssen gegebenenfalls gar nicht an den Server geschickt werden, die Datenmengen sind auch hier gering. Anwendungsdaten können dagegen teils mehrere Megabyte groß sein, müssen dafür aber nur zu bestimmten Zeitpunkten an einen Server übertragen werden (z.B. beim Speichern
eines lokal bearbeiteten Dokuments). Für die unterschiedlichen Anwendungsfälle gibt es auch unterschiedliche Technologien, mit denen Daten clientseitig gespeichert werden:
- **Cookies** werden für kleine Datenmengen (bis 4kB) verwendet, die clientseitig gespeichert und bei jedem Request mitgeschickt werden. Cookies werden im nächsten Abschnitt genauer behandelt
- **Web Storage (lokal)** wird verwendet, um Daten persistent auf einem Client zu speichern. Sie bleiben auch nach dem Schließen des Browsers bestehen, eignen sich also z.B. zum Speichern von Einstellungen. Die Datenmengen können hier größer sein (üblicherweise 5 MB pro Domain).
- **Web Storage (session-spezifisch)** wird verwendet, um Daten auf einem Client zu speichern, die spezifisch für eine "Sitzung" (einen Tab/ein Fenster) sind. So können Sie z.B. zwei Dokumente in parallel in zwei Tabs mit der gleichen Webanwendung bearbeiten und diese im session-spezifischen Web Storage hinterlegen. Wird eine Sitzung beendet, gehen die Daten verloren, wenn sie nicht davor an den Server übertragen wurden.

## Geschichte
Cookies wurden 1994 von Netscape erdacht und in deren Browser unterstützt, 1995 zog auch Microsoft mit dem Internet Explorer nach. Die ursprüngliche Idee hinter Cookies war
es, die Datenmenge, die auf Servern gespeichert werden muss, zu reduzieren und solche Daten stattdessen clientseitig zu speichern (z.B. Inhalte eines Einkaufswagens, ...). Cookies dienten weiters dazu, auf dem eigentlich zustandslosen Protokoll HTTP auch zustandsbehaftete Anwendungen bauen zu können. Beim Login von Webanwendungen werden meist Benutzer\*innenname und Passwort vom Browser an den Server übertragen. Der Server validiert diese Daten dann, schickt dem Client anschließend ein sogenanntes *Session-Cookie*
mit dem sich der Client bei folgenden Anfragen authentifizieren kann.

Web Storage (auch DOM Storage) ist eine Weiterentwicklung von Cookies, die 2009 seit von der W3C/WHATWG als neuer Standard eingeführt wurde. Mit Web Storage können wesentlich größere Datenmengen gespeichert werden (mehrere MB statt mehrere KB). Im Unterschied zu Cookies werden die Daten im Web Storage nicht mit dem Server geteilt, sondern bleiben am Client. Im Rahmen dieses Skriptums wird Web Storage nicht weiter behandelt, Cookies werden im nächsten Abschnitt näher beschrieben.