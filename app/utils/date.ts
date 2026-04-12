export function normalizeDateInput(value: string) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return `${value}T00:00:00+08:00`
  }

  return value
}

export function formatZhDate(value?: string) {
  if (!value) {
    return ''
  }

  return new Intl.DateTimeFormat('zh-CN', {
    dateStyle: 'long',
    timeZone: 'Asia/Shanghai'
  }).format(new Date(normalizeDateInput(value)))
}
