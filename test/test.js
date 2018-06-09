const {uniq, getGuess, pickRandom} = require('../index')
const rules = require('../rules')
const tests = Object.keys(rules).map(key => rules[key])

const assert = require('assert')


const v1bad = [
  {day: 'SAT', show: 'TRL'},
  {day: 'SUN', show: 'scandal'}
]
const v1good = [
  {day: 'SAT', show: 'TRL'},
  {day: 'MON', show: 'scandal'}
]
describe('T1', function(){
  it('scandal should not be sunday', function(){
    assert.equal(tests[0](v1bad), false)
    assert.equal(tests[0](v1good), true)
  })
})


const v2 = [{show: 'empire', time: 7}]
const v3 = [{show: 'TRL', time: 6}]
describe('T2-T3', function(){
  it('empire is at 7', function(){
    assert.equal(tests[1](v2), true)
  })
  it('other shows not at 7', function(){
    assert.equal(tests[2](v3), true)
  })
})

const v4bad = [{show: 'empire', name: 'Nate'}]
const v4good = [{show: 'got', name: 'Nate'}]
describe('T4', function(){
  it('empire is NOT nate\'s fav', function(){
    assert.equal(tests[3](v4bad), false)
    assert.equal(tests[3](v4good), true)
  })
})

const v5bad = [{show: 'game of thrones', name: 'Kelsey'}]
const v5good = [{show: 'scandal', name: 'Kelsey'}]
describe('T5', function(){
  it('got NOT kelsey\'s fav', function(){
    assert.equal(tests[4](v5bad), false)
    assert.equal(tests[4](v5good), true)
  })
})

const v6bad = [{name: 'Sara', time: 7}]
const v6good = [{name: 'Sara', time: 10}]
describe('T6', function(){
  it('sara\'s show IS at 10', function(){
    assert.equal(tests[5](v6bad), false)
    assert.equal(tests[5](v6good), true)
  })
})

const v7bad = [{name: 'Sara', day: 'WEDS'}]
const v7good = [{name: 'Sara', day: 'TUES'}]
describe('T7', function(){
  it('sara NOT weds', function(){
    assert.equal(tests[6](v7bad), false)
    assert.equal(tests[6](v7good), true)
  })
})

const v8bad = [{show: 'westworld', day: 'WEDS'}]
const v8good = [{show: 'westworld', day: 'TUES'}]
describe('T8', function(){
  it('tues IS westworld', function(){
    assert.equal(tests[7](v8bad), false)
    assert.equal(tests[7](v8good), true)
  })
})

const v9bad = [{name: 'Nate', time: 9}]
const v9good = [{name: 'Nate', time: 10}]
describe('T9', function(){
 it('nate DOES NOT watch at 9', function(){
   assert.equal(tests[8](v9bad), false)
   assert.equal(tests[8](v9good), true)
 })
})

const v10bad = [{name: 'Anne', day: 'SUN'}]
const v10good = [{name: 'Anne', day: 'TUES'}]
describe('T10', function(){
  it('anne DOES NOT watch SUN', function(){
    assert.equal(tests[9](v10bad), false)
    assert.equal(tests[9](v10good), true)
  })
})

const v11bad = [{show: 'game of thrones', time: 11}, {name: 'Anne', time: 9}]
const v11good = [{show: 'game of thrones', time: 10}, {name: 'Anne', time: 9}]
describe('T11', function(){
  it('got IS ann\'s time +1', function(){
    assert.equal(tests[10](v11bad), false)
    assert.equal(tests[10](v11good), true)
  })
})

const v12bad = [{show: 'game of thrones', time: 9}, {day: 'MON', time: 11}]
const v12good = [{show: 'game of thrones', time: 9}, {day: 'MON', time: 10}]
describe('T12', function(){
  it('got IS mon time -1', function(){
    assert.equal(tests[11](v12bad), false)
    assert.equal(tests[11](v12good), true)
  })
})

let matrix = [{day: 'SAT', show: 'TRL'}, {day: 'SUN', show: 'scandal'}]
let badTarget = {day: 'SAT', show: 'famous'}
let goodTarget = {day: 'MOD', show: 'famous'}
describe('uniq', function(){
  it('should show if a guess is uniq', function(){
    assert.equal(uniq(matrix,badTarget), false)
    assert.equal(uniq(matrix,goodTarget), true)
  })
})

let matrix2 = [
  {day: 'SAT', show: 'TRL'},
  {day: 'SUN', show: 'scandal'},
  {day: 'MON', show: 'bloopers'},
  {day: 'TUES', show: 'kablamo'},
  {day: 'WED', show: 'GOT'},
  {day: 'THURS', show: 'blah'},
  {day: 'SAT', show: 'blah'}
]

//console.log(pickRandom(matrix2))

// console.log(getGuess(matrix2, {'0123': true}))
// describe('getGuess', function(){
//   it('should get a good guess', function(){
//     assert.equal(getGuess(matrix2))
//   })
// })
