import moment from "moment"

export const createDateInLocale = (selectedDate) => {
  console.log(selectedDate)
  if (selectedDate == null) return

  console.log()

  let formatLocale = moment(selectedDate).format("H:mm a")
  return formatLocale
}
