---
title: The Jump Bit design
description: How the Jump Bit design system looks and works, with a live sample page of all components.
pubDate: 2026-10-22
tags:
  - design
---

Jump Bit helps non-profit organisations with their IT. The design follows the same idea: plain, calm and easy to use. This website, our tools and our documents all share one design system.

## Monochrome by intention

The palette is ink, charcoal, greys and white. Colour carries meaning only where it matters: green, amber, red and blue mark status, and always come with a word such as "Saved" or "Error", so nobody has to rely on colour alone. A soft gold accent appears at most once per view.

Every component uses semantic tokens such as `--color-surface` or `--color-primary` instead of fixed colours. That is how light and dark mode both work without extra code: try switching your system to dark mode.

## One typeface

[Inter](https://fonts.google.com/specimen/Inter) is the only typeface, for headings, text and buttons. Headings use weight 600 with a little letter spacing; button labels are uppercase and widely tracked. The font files are served with the site, so no request goes to a third party.

## Shapes and focus

Buttons and inputs have an 8 px radius, cards 14 px, with a soft shadow and a hairline border. Every element you can reach with the keyboard shows a solid 2 px focus ring, and the colour contrast meets WCAG 2.2 AA.

## A light component layer

On top of the theme sits `jumpbit-ui.css`, a very light layer with Bootstrap-like class names: container and grid, navigation bar, forms, alerts, badges, tables and a few utilities. It needs no JavaScript. The same tokens exist for desktop applications built with Avalonia UI.

## Sample page

The sample page below shows every component. It is a static mock-up; the buttons and the form do nothing.

<iframe class="embed" src="/design/ui-example.html" title="Jump Bit UI sample page" loading="lazy"></iframe>

[Open the sample page in a new tab](/design/ui-example.html)
