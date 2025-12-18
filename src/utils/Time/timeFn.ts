import { groupBy } from '../Data/data'
import { getArrayTotal } from '../Math/math'

/**
 * 生成时间点数组
 * @param timeMode - 时间模式，96表示96个时间点，24表示24个时间点
 * @param beginMode - 开始模式，start表示开始时间，end表示结束时间
 * @param dateRange - 日期范围，[开始时间, 结束时间]
 * @example
 * generateTimePeriod(96, 'start') -> ["00:00", "00:15", "00:30"...,"23:45"]
 * generateTimePeriod(24, 'end') -> ["01:00", "02:00", "03:00"...,"24:00"]
 * generateTimePeriod(24, 'start', [1, 2]) -> ["01:00", "02:00"]
 * generateTimePeriod(24, 'end', [1, 2]) -> ["02:00", "03:00"]
 * @returns 时点数组
 */
export function generateTimePeriod(timeMode: 96 | 24, beginMode: 'start' | 'end' = 'start', dateRange?: [number, number]) {
  let timeNum: number = timeMode
  if (dateRange) {
    if ((dateRange[0] >= 0 && dateRange[1] <= 24) && dateRange[0] <= dateRange[1]) {
      if (timeMode === 96) {
        timeNum = (dateRange[1] - dateRange[0]) * 4
      }
      else {
        timeNum = dateRange[1] - dateRange[0] + 1
      }
    }
    else {
      console.warn('dateRange is invalid')
    }
  }

  if (timeMode === 96) {
    let startTime = beginMode === 'start' ? 0 : 15
    if (timeNum !== timeMode)
      startTime = dateRange![0] * 4 * 15 + (beginMode === 'start' ? 0 : 15)
    return Array.from({ length: timeNum }, (_) => {
      const hour = Math.floor(startTime / 60)
      const minute = startTime % 60
      startTime += 15
      return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
    })
  }
  else {
    const result: string[] = []
    const startTime = dateRange ? dateRange![0] : 0
    const endTime = dateRange ? dateRange![1] : 23
    for (let i = startTime; i <= endTime; i++) {
      if (beginMode === 'start') {
        result.push(`${i.toString().padStart(2, '0')}:00`)
      }
      else {
        result.push(`${(i + 1).toString().padStart(2, '0')}:00`)
      }
    }
    return result
  }
}

/**
 * 时间取整函数：向上取整到最近的整点
 * @param timeStr - 时间字符串，格式为 "HH:mm"
 * @returns 向上取整后的时间字符串
 */
export function roundUpToHour(timeStr: string): string {
  const [hour, minute] = timeStr.split(':').map(Number)
  if (minute > 0) {
    return hour === 23 ? '24:00' : `${(hour + 1).toString().padStart(2, '0')}:00`
  }
  return `${hour.toString().padStart(2, '0')}:00`
}

/**
 * 根据指定建值分组并计算合计值
 * @param data 数据
 * @param groupByKey 分组键值
 * @param calcKeys 计算键值
 * @returns 聚合后的数据
 */
export function getGroupDateTotal<T extends Record<string, any>>(data: T[], groupByKey: keyof T, calcKeys?: keyof T | (keyof T)[]): Map<string, Record<string, number>> {
  const groupData = groupBy(data, groupByKey)
  const map = new Map()
  Object.entries(groupData).forEach(([key, value]) => {
    map.set(key, getArrayTotal(value, calcKeys))
  })
  return map
}

/**
 * 判断一个日期是否在一段时间内
 * @param date 日期
 * @param range 时间范围
 * @returns 是否在时间范围内
 */

export function isDateInRange(date: string | Date, range: [string | Date, string | Date]): boolean {
  const dateObj = new Date(date)
  const rangeStart = new Date(range[0])
  const rangeEnd = new Date(range[1])
  return dateObj >= rangeStart && dateObj <= rangeEnd
}

/**
 * 判断一个日期在对比日期之后
 * @param date 日期
 * @param compareDate 对比日期
 * @returns 是否在对比日期之后
 */
export function isDateAfter(date: string | Date, compareDate: string | Date): boolean {
  const dateObj = new Date(date)
  const compareDateObj = new Date(compareDate)
  return dateObj > compareDateObj
}

/**
 * 判断一个日期在对比日期之前
 * @param date 日期
 * @param compareDate 对比日期
 * @returns 是否在对比日期之前
 */
export function isDateBefore(date: string | Date, compareDate: string | Date): boolean {
  const dateObj = new Date(date)
  const compareDateObj = new Date(compareDate)
  return dateObj < compareDateObj
}
