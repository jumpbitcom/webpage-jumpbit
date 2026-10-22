---
title: Das Jump-Bit-Design
description: Wie das Designsystem von Jump Bit aussieht und funktioniert, mit einer Beispielseite aller Komponenten.
pubDate: 2026-10-22
tags:
  - design
---

Jump Bit unterstützt gemeinnützige Organisationen in IT-Fragen. Das Design folgt derselben Idee: schlicht, ruhig und einfach zu bedienen. Diese Website, unsere Werkzeuge und unsere Dokumente teilen sich ein Designsystem.

## Bewusst einfarbig

Die Palette besteht aus Tiefschwarz, Anthrazit, Grautönen und Weiss. Farbe trägt nur dort Bedeutung, wo es darauf ankommt: Grün, Orange, Rot und Blau zeigen einen Status an und stehen immer zusammen mit einem Wort wie «Gespeichert» oder «Fehler», damit niemand allein auf die Farbe angewiesen ist. Ein sanfter Goldton erscheint höchstens einmal pro Ansicht.

Alle Komponenten verwenden semantische Tokens wie `--color-surface` oder `--color-primary` statt fester Farben. So funktionieren der helle und der dunkle Modus ohne zusätzlichen Code: Stellen Sie Ihr System einmal auf den dunklen Modus um.

## Eine Schrift

[Inter](https://fonts.google.com/specimen/Inter) ist die einzige Schrift, für Titel, Text und Schaltflächen. Titel sind halbfett mit etwas Laufweite, Beschriftungen von Schaltflächen in Grossbuchstaben und weit gesperrt. Die Schriftdateien liefern wir mit der Website aus, es geht also keine Anfrage an Dritte.

## Formen und Fokus

Schaltflächen und Eingabefelder haben einen Radius von 8 px, Karten 14 px, mit einem weichen Schatten und einer feinen Linie. Jedes Element, das Sie mit der Tastatur erreichen, zeigt einen deutlichen Fokusrahmen von 2 px, und die Farbkontraste erfüllen WCAG 2.2 AA.

## Eine leichte Komponentenschicht

Auf dem Theme baut `jumpbit-ui.css` auf, eine sehr leichte Schicht mit Klassennamen wie bei Bootstrap: Container und Raster, Navigationsleiste, Formulare, Hinweise, Badges, Tabellen und einige Hilfsklassen. Sie kommt ohne JavaScript aus. Dieselben Tokens gibt es auch für Desktop-Anwendungen mit Avalonia UI.

## Beispielseite

Die Beispielseite unten zeigt alle Komponenten. Sie ist ein statisches Muster auf Englisch; Schaltflächen und Formular haben keine Funktion.

<iframe class="embed" src="/design/ui-example.html" title="Beispielseite Jump Bit UI" loading="lazy"></iframe>

[Beispielseite in einem neuen Tab öffnen](/design/ui-example.html)
