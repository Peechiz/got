
module.exports = {
  // matrix => !fail ? true
  // scandal not on sunday
  T1: matrix => !matrix.some(guess => guess.show === 'scandal' && guess.day === 'SUN'),

  // empire IS at 7
  T2: matrix => !matrix.some(guess => guess.show === 'empire' && guess.time !== 7),
  T3: matrix => !matrix.some(guess => guess.show !== 'empire' && guess.time === 7),

  T4: matrix => !matrix.some(guess => guess.name === 'Nate' && guess.show === 'empire'),
  // empire NOT nate's fav

  T5: matrix => !matrix.some(guess => guess.name === 'Kelsey' && guess.show === 'game of thrones'),
  // g.o.t NOT kelsey's fav

  T6: matrix => !matrix.some(guess => guess.name === 'Sara' && guess.time !== 10),
  // sara's show IS at 10

  T7: matrix => !matrix.some(guess => guess.name === 'Sara' && guess.day === 'WEDS'),
  // sara's NOT on wed

  T8: matrix => !matrix.some(guess => guess.show === 'westworld' && guess.day !== 'TUES'),
  // tues IS westworld

  T9: matrix => !matrix.some(guess => guess.name === 'Nate' && guess.time === 9),
  // nate DOESN'T watch at 9

  T10: matrix => !matrix.some(guess => guess.name === 'Anne' && guess.day === 'SUN'),
  // anne doesn't watch on sunday

  T11: matrix => {
    const anne = matrix.filter(guess => guess.name === 'Anne')[0]
  // got's time IS anne's time +1
    const GOT = matrix.filter(guess => guess.show === 'game of thrones')[0]
    return (GOT.time === anne.time +1)
  },

  // got IS mon time -1
  T12: matrix => {
    const monday = matrix.filter(guess => guess.day === 'MON')[0]
    const GOT = matrix.filter(guess => guess.show === 'game of thrones')[0]
    if (!monday || !GOT){
      // console.log(monday, GOT)
      return false
    }
    return (GOT.time === monday.time -1)
  }
}
