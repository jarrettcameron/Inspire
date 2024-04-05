import { TODO } from './models/TODO.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  activePopup = null

  image = null
  quote = null
  weather = null

  settings = {
    militaryTime: false,
    city: 'Boise',
    categories: '',
    temperaturePreference: 'F'
  }

  /** @type{TODO[]} */
  todos = []
}

export const AppState = createObservableProxy(new ObservableAppState())