export class Membre {
  constructor(
    public id: number,
    public name: string,
    public prenom: string,
    public adresse: string,
    public ville: string,
    public province: string,
    public codePostal: string,
    public profession: string,
    public courriel: string,
    public téléphone: string,
    public age: number,
    public Ornitaouais: boolean,
    public phoneCache: boolean,
    public nomCache: boolean,
    public conseilAdministration: boolean,
    public animationExcursion: boolean,
    public animationKiosque: boolean,
    public gestionSiteWeb: boolean,
    public recensementNoël: boolean,
    public rédactionRévision: boolean,
    public promotionPublicité: boolean,
    public comptabilitéAdministration: boolean,
    public autres: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
