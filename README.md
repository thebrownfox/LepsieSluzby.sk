# Lepšie služby

## O projekte

> Priestor, kde sa môžu občania, podnikatelia, ale aj úradníci, zapojiť a upozorniť na problémy elektronických služieb štátu, alebo zaslať podnety v podobe návrhov na ich zlepšenie. Každý podnet je odborne spracovaný, posúdený a posunutý do rúk zodpovedných úradov a správcov elektronických služieb. Všetky podnety sú uverejnené v časti „Zadané podnety“, kde môžete získať prehľad o tom, v akom stave riešenia podnety sú.

## Development

1. Clone this repository
2. Run `yarn` or `npm install` to get dependencies
3. Run `yarn dev` or `npm run dev` to start hotreload server on `localhost:3000`
4. To build project run `yarn build` or `npm run build` and the APP will be in `dist` directory

## What it does?

- fetches issues via rest api with the use of JQL
- creates jira issues anonymously through google recaptcha v3 (custom plugin deployed on jira side)
