import { combineReducers } from 'redux'

import workouts from './workouts'
import exercises from './exercises'

const minmaxreducers = combineReducers({
  workouts,
  exercises
})

export default minmaxreducers
