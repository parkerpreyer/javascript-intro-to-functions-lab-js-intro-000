function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

sayHiToGrandma(string) {
  let lowercase = string.toLowerCase()
  let uppercase = string.toUpperCase()
  let love = "I love you, Grandma."

  if (string === lowercase) {
    return "I can'\t hear you!"
  } else if (string === uppercase) {
    return "YES INDEED!"
  } else if (string === love) {
    return love
  }
}
