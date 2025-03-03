function creerCarte(carteZZZ) {
    const carteZZZ = document.createElement("carteZZZ");


let carteZZZ = {
    perso: "Zhu Yhan",
    pv: 6000,
    type: "ether",
    bouton: "gris",
    image: "zhu-yhan.png", // Nom du fichier image
    description: "Zhu Yuan is a playable agent in Zenless Zone Zero and the leader of the criminal investigation.",
    attaques: [
        {
            nom: "Buckshot Blast",
            degat: 1000,
            description: "Press to activate. Shoots Ether Buckshots that deal Ether DMG. This can be repeated 3 times by repeatedly pressing. Anti-Interrupt level is increased while using this skill.",
            icon: "attack",
        },
        {
            nom: "Full Barrage",
            degat: 2000,
            description: "When Zhu Yuan has enough Energy, press to activate. Shoots a series of Ether Buckshots, that explode and deal massive Ether DMG. Upon activation, gain 3 Enhanced Shotshells. Character is invulnerable while using this skill.",
            icon: "attack and fire",
        },
    ],
    typeElectrick: false,
    carteBorderColor: "#d9c751",
    background: "white",
};
