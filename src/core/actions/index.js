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

export const addRep = () => {
  return {
    type: 'ADD_REP'
  }
}

export const removeRep = () => {
  return {
    type: 'REMOVE_REP'
  }
}
