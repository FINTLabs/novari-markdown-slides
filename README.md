---
marp: true
theme: novari
paginate: true
headingDivider: 2
---

# novari-markdown-slides

Verktøy for oss som har fått nok av PowerPoint. La oss prøve markdown, draw.io og excalidraw i stedet.

## Presentasjoner

- [novari-theme-example.md](https://github.com/FINTLabs/novari-markdown-slides/blob/main/novari-theme-example.md?plain=1) | [web](https://fintlabs.github.io/novari-markdown-slides/novari-theme-example.html) | [pdf](https://fintlabs.github.io/novari-markdown-slides/novari-theme-example.pdf)
- [informasjonsmodellen.md](https://github.com/FINTLabs/novari-markdown-slides/blob/main/informasjonsmodellen.md?plain=1) | [web](https://fintlabs.github.io/novari-markdown-slides/informasjonsmodellen.html) | [pdf](https://fintlabs.github.io/novari-markdown-slides/informasjonsmodellen.pdf)

## Template for Novari

Tilpassing av template gjøres i [marp/themes/novari.css](marp/themes/novari.css).

## Hvordan komme i gang?

Det kan startes lokalt ved å kjøre `bun start`. Forutsetter at du har `node` og `bun` installert.

Vil anbefale å bruke Visual Studio Code til å redigere presentasjoner og diagrammer.

For å redigere markdown-presentasjonene og diagrammer trenger du extensions for Marp, Draw.io og Excalidraw til Visual Studio Code: [.vscode/extensions.json](.vscode/extensions.json). Du vil bli anbefalt å installere disse når du starter opp Visual Studio Code.

## Metdata som kan benyttes på sider i presentasjonen

- `<!-- _hide: true -->` - For å skjule en side
- `<!-- _class: x -->` - For å endre stil på side: 
    - `forside-a` - Definerer tema for forsiden
    - `sisteside-a` - Definerer tema for sistesiden
- `<!-- _footer: "markdown tekst" -->` - Legger til tekst nederst på siden
- `<!-- _header: "markdown tekst" -->` - Legger til tekst øverst på siden

## Diagrammer

For å opprette et nytt diagram; 
1. Kopier et eksisterende diagram
2. Lag en tom fil som slutter på: 
    - `.drawio.svg` - for Draw.io
    - `.excalidraw.svg` - for Excalidraw

Om du har installert plugin til Visual Studio Code, kan du redigere diagrammene direkte i Visual Studio Code.

## Bilder

Bilder legges inn i repo eller hentes fra ekstern url og legges inn i side med markdown. Det er mye muligheter for å plassere bilder på en side. Se her: https://marpit.marp.app/image-syntax
