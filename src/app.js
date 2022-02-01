const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    // "Popcorn",
    // "Gemwoman",
    // "Bolt",
    // "Antwoman",
    // "Mask",
    // "Tiger",
    // "Captain",
    // "Catwoman",
    // "Fish",
    // "Hulk",
    // "Ninja",
    // "Black Cat",
    // "Volverine",
    // "Thor",
    // "Slayer",
    // "Vader",
    // "Slingo"
  ];
  
  // Player Class
  class Player {
    constructor(id, name, type) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.strength = this.getRandomStrength();
      this.image = "images/super-" + (this.id + 1) + ".png";
    }
  
    // getting random strength
    getRandomStrength = () => {
      return Math.ceil(Math.random() * 100);
    };
  
    // Create a player for displaying
    view = () => {
      // Accumulate HTML template
      let player = document.createElement("div");
      player.classList.add("player");
      player.setAttribute("data-id", this.id);
      let image = document.createElement("img");
      image.setAttribute("src", this.image);
      let name = document.createElement("div");
      name.textContent = this.name;
      name.classList.add("name");
      let strength = document.createElement("div");
      strength.textContent = this.strength;
      strength.classList.add("strength");
      player.append(image, name, strength);
      return player;
    };
  }
  
  // Superwar Class
  class Superwar {
    constructor(players) {
      // Create a field players
      this.players = players.map((pname, id) => {
        let type = id % 2 == 0 ? "hero" : "villan";
        return new Player(id, pname, type);
      });
    }
  
    // Display players in HTML
    viewPlayers = () => {
      let team = document.getElementById("heroes");
      team.innerHTML = "";
      let fragment = this.buildPlayers("hero");
      team.append(fragment);
  
      team = document.getElementById("villains");
      team.innerHTML = "";
      fragment = this.buildPlayers("villain");
      team.append(fragment);
    };
  
    // Build players fragment
    buildPlayers = (type) => {
      let fragment = document.createDocumentFragment();
      this.players
        .filter((player) => player.type == type)
        .forEach((player) => fragment.append(player.view()));
      return fragment;
    };
  }
  
  window.onload = () => {
    const superwar = new Superwar(PLAYERS);
    superwar.viewPlayers();
  };