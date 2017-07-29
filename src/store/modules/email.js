import * as types from '@store/types'
import database from '@lib/database'

const actions = {
  [types.EMAIL_SEND]: async (context, email) => {
    const timestamp = Date.now()
    await database.ref('/email').push({
      email,
      timestamp
    })
  }
}

export default { actions }
