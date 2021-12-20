import NumFactoryStateTypes from './modules/Common/types'

export default interface RootStateTypes {
  text: string
}

export interface AllStateTypes extends RootStateTypes {
  numFactoryModule: NumFactoryStateTypes
}
