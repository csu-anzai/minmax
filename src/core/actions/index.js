export const addWorkout = (workout) => {
  return {
    type: 'ADD_WORKOUT',
    workout
  }
}

export const removeWorkout = (id) => {
  return {
    type: 'ADD_WORKOUT',
    id
  }
}

export const selectWorkout = (id) => {
  return {
    type: 'SELECT_WORKOUT',
    id
  }
}

export const addExercise = (exercise) => {
  return {
    type: 'ADD_EXERCISE',
    exercise
  }
}

export const removeExercise = (id) => {
  return {
    type: 'REMOVE_EXERCISE',
    id
  }
}

export const incrementReps = () => {
  return {
    type: 'INCREMENT_REP'
  }
}

export const decrementRep = () => {
  return {
    type: 'DECREMENT_REP'
  }
}

export const incrementWeight = (modifier) => {
  return {
    type: 'INCREMENT_WEIGHT',
    modifier
  }
}

export const decrementWeight = (modifier) => {
  return {
    type: 'DECREMENT_REP',
    modifier
  }
}
