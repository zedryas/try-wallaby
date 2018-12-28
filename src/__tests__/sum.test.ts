import {sum} from '../sum'

describe ('sum', () => {
  it ('should sum an array', () => {
    expect (sum ([2, 3, 4])).toEqual (4)
  })
})
