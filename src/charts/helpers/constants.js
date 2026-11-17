import { curveBasis, curveCardinal, curveCatmullRom, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore } from 'd3-shape';
import { timeDay as d3TimeDay, timeFriday as d3TimeFriday, timeHour as d3TimeHour, timeMillisecond as d3TimeMillisecond, timeMinute as d3TimeMinute, timeMonday as d3TimeMonday, timeMonth as d3TimeMonth, timeSaturday as d3TimeSaturday, timeSecond as d3TimeSecond, timeSunday as d3TimeSunday, timeThursday as d3TimeThursday, timeTuesday as d3TimeTuesday, timeWednesday as d3TimeWednesday, timeWeek as d3TimeWeek, timeYear as d3TimeYear, utcDay as d3UtcDay, utcFriday as d3UtcFriday, utcHour as d3UtcHour, utcMillisecond as d3UtcMillisecond, utcMinute as d3UtcMinute, utcMonday as d3UtcMonday, utcMonth as d3UtcMonth, utcSaturday as d3UtcSaturday, utcSecond as d3UtcSecond, utcSunday as d3UtcSunday, utcThursday as d3UtcThursday, utcTuesday as d3UtcTuesday, utcWednesday as d3UtcWednesday, utcWeek as d3UtcWeek, utcYear as d3UtcYear } from 'd3-time';

    
    
    const FORMAT_LOCALE_URL = 'https://cdn.jsdelivr.net/npm/d3-format/locale';

    const axisTimeCombinations = {
        MINUTE_HOUR: 'minute-hour',
        HOUR_DAY: 'hour-daymonth',
        DAY_MONTH: 'day-month',
        MONTH_YEAR: 'month-year',
        CUSTOM: 'custom'
    };

    const timeBenchmarks = {
        ONE_AND_A_HALF_YEARS: 47304000000,
        ONE_YEAR: 31536000365,
        ONE_DAY: 86400001
    };

    const curveMap = {
        linear: curveLinear,
        basis: curveBasis,
        cardinal: curveCardinal,
        catmullRom: curveCatmullRom,
        monotoneX: curveMonotoneX,
        monotoneY: curveMonotoneY,
        natural: curveNatural,
        step: curveStep,
        stepAfter: curveStepAfter,
        stepBefore: curveStepBefore
    };

    const emptyDonutData = [{
        'quantity': 1,
        'percentage': 100
    }];

    const timeIntervals = {
        timeMillisecond: d3TimeMillisecond,
        utcMillisecond: d3UtcMillisecond,
        timeSecond: d3TimeSecond,
        utcSecond: d3UtcSecond,
        timeMinute: d3TimeMinute,
        utcMinute: d3UtcMinute,
        timeHour: d3TimeHour,
        utcHour: d3UtcHour,
        timeDay: d3TimeDay,
        utcDay: d3UtcDay,
        timeWeek: d3TimeWeek,
        utcWeek: d3UtcWeek,
        timeSunday: d3TimeSunday,
        utcSunday: d3UtcSunday,
        timeMonday: d3TimeMonday,
        utcMonday: d3UtcMonday,
        timeTuesday: d3TimeTuesday,
        utcTuesday: d3UtcTuesday,
        timeWednesday: d3TimeWednesday,
        utcWednesday: d3UtcWednesday,
        timeThursday: d3TimeThursday,
        utcThursday: d3UtcThursday,
        timeFriday: d3TimeFriday,
        utcFriday: d3UtcFriday,
        timeSaturday: d3TimeSaturday,
        utcSaturday: d3UtcSaturday,
        timeMonth: d3TimeMonth,
        utcMonth: d3UtcMonth,
        timeYear: d3TimeYear,
        utcYear: d3UtcYear
    };

const lineGradientId = 'lineGradientId';
export {
    axisTimeCombinations,
    curveMap,
    emptyDonutData,
    timeBenchmarks,
    lineGradientId,
    timeIntervals,
    FORMAT_LOCALE_URL,
};

export default {
    axisTimeCombinations,
    curveMap,
    emptyDonutData,
    timeBenchmarks,
    lineGradientId,
    timeIntervals,
    FORMAT_LOCALE_URL,
};
