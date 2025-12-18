import { describe, expect, it } from 'vitest'
import { generateTimePeriod, isDateAfter, isDateBefore, isDateInRange } from './timeFn'

describe('generateTimePeriod', () => {
  it('因该返回96个时间点', () => {
    expect(generateTimePeriod(96, 'start')).toEqual(
      [
        '00:00',
        '00:15',
        '00:30',
        '00:45',
        '01:00',
        '01:15',
        '01:30',
        '01:45',
        '02:00',
        '02:15',
        '02:30',
        '02:45',
        '03:00',
        '03:15',
        '03:30',
        '03:45',
        '04:00',
        '04:15',
        '04:30',
        '04:45',
        '05:00',
        '05:15',
        '05:30',
        '05:45',
        '06:00',
        '06:15',
        '06:30',
        '06:45',
        '07:00',
        '07:15',
        '07:30',
        '07:45',
        '08:00',
        '08:15',
        '08:30',
        '08:45',
        '09:00',
        '09:15',
        '09:30',
        '09:45',
        '10:00',
        '10:15',
        '10:30',
        '10:45',
        '11:00',
        '11:15',
        '11:30',
        '11:45',
        '12:00',
        '12:15',
        '12:30',
        '12:45',
        '13:00',
        '13:15',
        '13:30',
        '13:45',
        '14:00',
        '14:15',
        '14:30',
        '14:45',
        '15:00',
        '15:15',
        '15:30',
        '15:45',
        '16:00',
        '16:15',
        '16:30',
        '16:45',
        '17:00',
        '17:15',
        '17:30',
        '17:45',
        '18:00',
        '18:15',
        '18:30',
        '18:45',
        '19:00',
        '19:15',
        '19:30',
        '19:45',
        '20:00',
        '20:15',
        '20:30',
        '20:45',
        '21:00',
        '21:15',
        '21:30',
        '21:45',
        '22:00',
        '22:15',
        '22:30',
        '22:45',
        '23:00',
        '23:15',
        '23:30',
        '23:45',
      ],
    )
    expect(generateTimePeriod(96, 'end')).toEqual(
      [
        '00:15',
        '00:30',
        '00:45',
        '01:00',
        '01:15',
        '01:30',
        '01:45',
        '02:00',
        '02:15',
        '02:30',
        '02:45',
        '03:00',
        '03:15',
        '03:30',
        '03:45',
        '04:00',
        '04:15',
        '04:30',
        '04:45',
        '05:00',
        '05:15',
        '05:30',
        '05:45',
        '06:00',
        '06:15',
        '06:30',
        '06:45',
        '07:00',
        '07:15',
        '07:30',
        '07:45',
        '08:00',
        '08:15',
        '08:30',
        '08:45',
        '09:00',
        '09:15',
        '09:30',
        '09:45',
        '10:00',
        '10:15',
        '10:30',
        '10:45',
        '11:00',
        '11:15',
        '11:30',
        '11:45',
        '12:00',
        '12:15',
        '12:30',
        '12:45',
        '13:00',
        '13:15',
        '13:30',
        '13:45',
        '14:00',
        '14:15',
        '14:30',
        '14:45',
        '15:00',
        '15:15',
        '15:30',
        '15:45',
        '16:00',
        '16:15',
        '16:30',
        '16:45',
        '17:00',
        '17:15',
        '17:30',
        '17:45',
        '18:00',
        '18:15',
        '18:30',
        '18:45',
        '19:00',
        '19:15',
        '19:30',
        '19:45',
        '20:00',
        '20:15',
        '20:30',
        '20:45',
        '21:00',
        '21:15',
        '21:30',
        '21:45',
        '22:00',
        '22:15',
        '22:30',
        '22:45',
        '23:00',
        '23:15',
        '23:30',
        '23:45',
        '24:00',
      ],
    )
  })
  it('返回时间范围为1-2的96个时间点', () => {
    expect(generateTimePeriod(96, 'start', [1, 2])).toEqual(
      [
        '01:00',
        '01:15',
        '01:30',
        '01:45',
      ],
    )
    expect(generateTimePeriod(96, 'end', [1, 2])).toEqual(
      [
        '01:15',
        '01:30',
        '01:45',
        '02:00',
      ],
    )
  })
  it('返回时间范围为1-2的24个时间点', () => {
    expect(generateTimePeriod(24, 'start', [1, 2])).toEqual(['01:00', '02:00'])
  })
  it('因该返回24个时间点', () => {
    expect(generateTimePeriod(24, 'start')).toEqual(['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'])
    expect(generateTimePeriod(24, 'end')).toEqual(['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'])
  })
})

describe('isDateInRange', () => {
  it('判断一个日期是否在一段时间内', () => {
    expect(isDateInRange('2025-01-01', ['2025-01-01', '2025-01-02'])).toBe(true)
    expect(isDateInRange('2025-01-10', ['2025-01-01', '2025-01-02'])).toBe(false)
  })

  it('边界情况：日期等于开始时间', () => {
    expect(isDateInRange('2025-01-01', ['2025-01-01', '2025-01-10'])).toBe(true)
  })

  it('边界情况：日期等于结束时间', () => {
    expect(isDateInRange('2025-01-10', ['2025-01-01', '2025-01-10'])).toBe(true)
  })

  it('边界情况：日期早于开始时间', () => {
    expect(isDateInRange('2024-12-31', ['2025-01-01', '2025-01-10'])).toBe(false)
  })

  it('边界情况：日期晚于结束时间', () => {
    expect(isDateInRange('2025-01-11', ['2025-01-01', '2025-01-10'])).toBe(false)
  })

  it('边界情况：开始和结束时间相同', () => {
    expect(isDateInRange('2025-01-01', ['2025-01-01', '2025-01-01'])).toBe(true)
    expect(isDateInRange('2025-01-02', ['2025-01-01', '2025-01-01'])).toBe(false)
  })

  it('边界情况：不同时区的 Date 对象', () => {
    const date = new Date('2025-02-01T12:00:00Z')
    const rangeStart = new Date('2025-02-01T00:00:00+08:00') // 北京时间 2025-02-01
    const rangeEnd = new Date('2025-02-01T23:59:59+08:00')
    expect(isDateInRange(date, [rangeStart, rangeEnd])).toBe(true)
  })

  it('边界情况：日期带有时间(精确到小时/分钟/秒)', () => {
    expect(isDateInRange('2025-03-01T00:00:00', ['2025-03-01T00:00:00', '2025-03-01T23:59:59'])).toBe(true)
    expect(isDateInRange('2025-03-01T23:59:59', ['2025-03-01T00:00:00', '2025-03-01T23:59:59'])).toBe(true)
    expect(isDateInRange('2025-03-02T00:00:00', ['2025-03-01T00:00:00', '2025-03-01T23:59:59'])).toBe(false)
  })

  it('边界情况：使用Date对象和字符串混合', () => {
    expect(isDateInRange(new Date('2025-04-01'), ['2025-04-01', new Date('2025-04-10')])).toBe(true)
    expect(isDateInRange(new Date('2025-04-11'), ['2025-04-01', '2025-04-10'])).toBe(false)
  })
})

describe('isDateAfter', () => {
  it('should return true if date is after compareDate', () => {
    expect(isDateAfter('2025-01-02', '2025-01-01')).toBe(true)
    expect(isDateAfter(new Date('2025-01-02'), '2025-01-01')).toBe(true)
    expect(isDateAfter('2025-01-01T12:01:00', '2025-01-01T12:00:00')).toBe(true)
  })

  it('should return false if date is before or equal to compareDate', () => {
    expect(isDateAfter('2025-01-01', '2025-01-02')).toBe(false)
    expect(isDateAfter('2025-01-01', '2025-01-01')).toBe(false)
    expect(isDateAfter(new Date('2025-01-01T11:59:59'), new Date('2025-01-01T12:00:00'))).toBe(false)
  })

  it('handles Date object and string cross-comparison', () => {
    expect(isDateAfter(new Date('2025-01-03'), '2025-01-02')).toBe(true)
    expect(isDateAfter('2025-01-03', new Date('2025-01-02'))).toBe(true)
  })
  it('should be before today', () => {
    expect(isDateBefore('2025-12-01', new Date())).toBe(true)
  })
})

describe('isDateBefore', () => {
  it('should return true if date is before compareDate', () => {
    expect(isDateBefore('2025-01-01', '2025-01-02')).toBe(true)
    expect(isDateBefore(new Date('2025-01-01'), '2025-01-02')).toBe(true)
    expect(isDateBefore('2025-01-01T12:00:00', '2025-01-01T12:01:00')).toBe(true)
  })

  it('should return false if date is after or equal to compareDate', () => {
    expect(isDateBefore('2025-01-02', '2025-01-01')).toBe(false)
    expect(isDateBefore('2025-01-01', '2025-01-01')).toBe(false)
    expect(isDateBefore(new Date('2025-01-01T12:00:01'), new Date('2025-01-01T12:00:00'))).toBe(false)
  })

  it('handles Date object and string cross-comparison', () => {
    expect(isDateBefore(new Date('2025-01-01'), '2025-01-02')).toBe(true)
    expect(isDateBefore('2025-01-02', new Date('2025-01-03'))).toBe(true)
  })
})
