import { LOCAL_PREFERENCES_KEY } from '~/common/constants/localPreferences'
import type { LocalPreferences } from '~/common/types/localPreferences.types'
import getItem from '~/utils/storageManager/getItem'

export default (): LocalPreferences =>
  getItem<LocalPreferences>(LOCAL_PREFERENCES_KEY) || {}
