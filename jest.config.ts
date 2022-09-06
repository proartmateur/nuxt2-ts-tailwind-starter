import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
//import { defaults as tsjPreset } from 'ts-jest/presets'
import { jsWithTs as tsjPreset } from 'ts-jest/presets'
//import { jsWithBabel as tsjPreset } from 'ts-jest/presets'
const config: InitialOptionsTsJest = {
  // [...]
  transform: {
    ...tsjPreset.transform,
    //".*\\.(vue)$": "vue-jest",
     //"^.+\\.tsx?$": "ts-jest"
    // [...]
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: [
    'ts', // if using TypeScript
  ],

}
export default config
