import * as types from '@store/types'
import database from '@lib/database'

const actions = {
  [types.EMAIL_SEND]: async (context, email) => {
    await database.ref('/email').push({
      email,
      date: Date.now()
    })
  }
}

export default { actions }
