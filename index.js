const rules = require('./rules')
const tests = Object.keys(rules).map(key => rules[key])

const SHOWS = ['scandal', 'empire', 'game of thrones', 'westworld']
const DAYS = ['MON', 'TUES', 'WEDS', 'THURS', 'FRI', 'SAT', 'SUN']
const TIMES = [7,8,9,10,11]
const NAMES = ['Anne', 'Nate', 'Sara', 'Kelsey']


let schedule = [] // [{name, day, time, show}]

  NAMES.forEach(name => {
    DAYS.forEach(day => {
      TIMES.forEach(time => {
        SHOWS.forEach(show => {
          schedule.push({name, day, time, show})
        })
      })
    })
  })

const pickRandom = arr => {
  const i = Math.floor(Math.random() * (arr.length -1))
  const pick = arr[i]
  return {i, pick}
}

const runTests = matrix => {
  const passed = !tests.map((test, i) => {
    return test(matrix)
  }).some(result => result === false)
  return passed
}

const uniq = (matrix, target) => {
  if (!matrix.length) return true;

  return matrix.reduce((bool, guess)=>{
    // if ANY guess matches target, return false
    Object.keys(guess).forEach(key => {
      if (guess[key] === target[key]){
        bool = false
      }
    })
    return bool
  }, true)
}


function getGuess(schedule, cache){
  let guess = []
  let location = []
  while (guess.length !== 4) {
    let {pick, i} = pickRandom(schedule)
    if (uniq(guess, pick)){
      guess.push(pick)
      location.push(i)
    }
  }
  const KEY = location.sort((a,b) => a-b).join('')

  if (cache[KEY] === true){
    return getGuess(schedule, cache)
  } else {
    return {guess, KEY}
  }
}
if (require.main === module){
  let cache = {}
  let found = false
  while (!found){
    process.stdout.write('.')
    let {guess, KEY} = getGuess(schedule, cache)
    if (!runTests(guess)){
      cache[KEY] = true
      // console.log(cache)
    } else {
      console.log('we did it!')
      console.log(guess)
      return guess
      found = true
    }
  }
} else {
  console.log('testing...');
}




module.exports = {tests, uniq, getGuess, pickRandom}
