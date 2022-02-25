const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber > months.length || monthNumber < 1 ){
  return months[monthNumber] }
    return months [monthNumber -1]
}
