function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  } else {
    for (const character of pin) {
      const toNumber = Number(character);
      if (isNaN(toNumber)) {
        return false;
      }
    }
    return true;
  }
}
console.log(validatePIN("a123"));
