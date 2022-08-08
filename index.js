function scuberGreetingForFeet(rideFeet){
    if (rideFeet <= 400) {
      return "This one is on me!";
    } else if (rideFeet >= 400 && rideFeet <= 2000) {
        return "That will be twenty bucks.";
    } else if (rideFeet > 2000 && rideFeet <= 2500) {
        return "I will gladly take your thirty bucks.";
    } else if (rideFeet > 2500) {
        return "No can do.";
    } 
}

    console.log(scuberGreetingForFeet(2001));


function ternaryCheckCity(place) {
  const city = "NYC"
    return (place === "NYC"? "Ok, sounds good." : "No go.")
}

//console.log(ternaryCheckCity("NYC")) 



function switchOnCharmFromTip(tipType) {
  switch (tipType) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye."
  }
}

//console.log(switchOnCharmFromTip(6));