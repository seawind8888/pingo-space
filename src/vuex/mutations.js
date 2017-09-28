export function FETCH_LEARNEX_FINISH(state, learnex) {
  state.learnex = learnex
}

export function FETCH_SCHOOLEX_FINISH(state, [schoolex]) {
  

  schoolex.forEach((e, i) => {
    let classDateBox = []
    let classItem = {
      begin: '',
      class: []
    }
    let classDate = e.teaching_begin.slice(0, 10)
    if (classDateBox.indexOf(classDate) == -1) {
      classDateBox.push(classDate)
      classItem.begin = classDate
      classItem.class.push(e)
      state.schoolexDateBox.push(classItem)
    } else {
      state.schoolexDateBox.forEach((l) => {
        if (l.begin == classDate) {
          l.class.push(e)
        }
      })
    }
  })

  state.schoolex = schoolex
  state.isReady = true
}

export function FETCH_SCHOOLEX_CELL_FINISH(state, schoolexCell) {
  state.schoolexCell = schoolexCell
  state.isReady = true
}

export function FETCH_CLASS_LIST(state, [classList]) {
  state.classList = classList
  state.classIsReady = true
}


export function FETCH_ENROLLMENTS_FINISH(state, [enrollments]) {
  state.enrollments = enrollments
}
export function FETCH_USER_FINISH(state, [user]) {
  state.user = user
}
