const isoTimeFormat = (dateTime) => {
  if (!dateTime) return ""

  const date = new Date(dateTime)

  // Invalid date check
  if (isNaN(date.getTime())) return ""

  const localTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // 12-hour format
  })

  return localTime
}

export default isoTimeFormat