# Noto 🤔
### React Frontend + .NET Backend

Applikasjonen er laget med hensikten å ha en lett-tilgjengelig skybasert måte å lagre notater med  grunnleggende Markdown-funksjonalitet.

## Applikasjon
Se [denne linken](https://notonoteapp.herokuapp.com) for å prøve applikasjonen.

## Lokal installasjon
1. Clone repoet
2. Kjør «dotnet restore» i /API/ mappen.
3. Kjør «npm install» i /client/ mappen.
4. Start applikasjonen ved å kjøre «dotnet run» i /API/-mappen, og «npm start» i /client/-mappen.


## Funksjonalitet
Prosjektet er bygd opp med Clean Architecture,CQRS, og Mediator som designmønster. 
Valg av disse mønstrene er tatt for å kunne balansere funksjonalitet i en notat-basert app, samt for å kunne holde applikasjonen nokså sikker.


Prosjektet bruker også et par tredjeparts-bibliotek som:
* Semantic UI ( Som et designrammeverk)
* MobX  + Formik ( for State Management)
* PostgreSQL / Heroku (for hosting)
Utenom disse er det meste ellers innebygd React eller .NET-funksjonalitet.


## Merkverdigheter
[Noto Security Rating](https://www.dropbox.com/s/dzd0m01wpicg67l/Skjermbilde%202022-01-13%20kl.%2022.51.43.png)
[Youtube Security Rating](https://www.dropbox.com/s/wwsmot6mp5n2vz3/Skjermbilde%202022-01-13%20kl.%2023.05.46.png)
