interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2024, 12, day - 1))))
    .map((weekDay) => {
      if (short) {
        return weekDay.substring(0, 3).toUpperCase()
      }
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}

// SELECT *
//       EXTRACT(DAY FROM S.date) AS date,
//       COUNT(S.date) AS amount,
//       ((UTI.time_end_in_minutes - UTI.time_start_in_minutes) / 60) AS size

//     FROM schedulings S

//     LEFT JOIN user_time_intervals UTI
//       ON UTI.week_day = WEEKDAY(DATE_ADD(S.date, INTERVAL 1 DAY))

//     WHERE S.user_id = ${user.id}
//       AND DATE_FORMAT(S.date, "%Y-%m") = ${`${year}-${month}`}

//     GROUP BY
//       date,
//       size

//     HAVING amount >= size
