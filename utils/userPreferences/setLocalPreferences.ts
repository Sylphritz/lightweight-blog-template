import { LOCAL_PREFERENCES_KEY } from '~/common/constants/localPreferences'
import type { LocalPreferences } from '~/common/types/localPreferences.types'
import setItem from '~/utils/storageManager/setItem'
import getItem from '~/utils/storageManager/getItem'

export default (value: LocalPreferences, replace?: boolean) => {
  setItem(
    LOCAL_PREFERENCES_KEY,
    replace
      ? value
      : Object.assign(
          getItem<LocalPreferences>(LOCAL_PREFERENCES_KEY) || {},
          value
        )
  )
}
