export const $ = value => {
  const format = Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })

  return 'R$' + format.format(value)
}
