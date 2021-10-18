function scuberGreetingForFeet(number){
    if (number <= 400) {
      return "This one is on me!";
    } else if (number > 2500) {
      return "No can do.";
    } else if (number > 2000) {
      return "I will gladly take your thirty bucks.";
    }
}

//console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  const message = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return message;
}

//console.log(ternaryCheckCity('NYC'));

function switchOnCharmFromTip(tipType){
  switch (tipType) {
    case 'generous':
      return "Thank you so much.";
        break;
    case 'not as generous':
      return "Thank you.";
        break;
    default:
        return "Bye.";
        break;
    }
}
console.log(switchOnCharmFromTip("I'm not paying you"));