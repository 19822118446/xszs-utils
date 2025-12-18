import { chunk, isEquals, unique } from './Array/arrayFn'
import { clearEmptyFields, findNodeInTree, flatToTreeRecursive, getSettledDataArray, groupBy, isArray, isBoolean, isNull, isNumber, isObject, isString, isUndefined, isWhatType, modifyKeyNameForRecordList } from './Data/data'
import { downloadFileByUri, fileIsWhatMediaType } from './File/file'
import { getArrayAverage, getArrayTotal, getRandomNumber } from './Math/math'
import { generateTimePeriod, roundUpToHour } from './Time/timeFn'

export {
  chunk,
  clearEmptyFields,
  downloadFileByUri,
  fileIsWhatMediaType,
  findNodeInTree,
  flatToTreeRecursive,
  generateTimePeriod,
  getArrayAverage,
  getArrayTotal,
  getRandomNumber,
  getSettledDataArray,
  groupBy,
  isArray,
  isBoolean,
  isEquals,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined,
  isWhatType,
  modifyKeyNameForRecordList,
  roundUpToHour,
  unique,
}
