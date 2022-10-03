import React from 'react'
import { DateTime } from 'luxon'

const FormattedDate: React.FC<{ iso: string }> = ({ iso }) => {
  const parsed = DateTime.fromISO(iso)

  return <time dateTime={iso}>{parsed.toLocaleString()}</time>
}

export default FormattedDate
