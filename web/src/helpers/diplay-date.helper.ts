export const displayDateHelper = (date: Date) => {
  const unformattedDate = new Date(date);
  return unformattedDate.toLocaleDateString('pt-br', {
    day: 'numeric',
    month: 'short',
    weekday: 'short'
  });
};
