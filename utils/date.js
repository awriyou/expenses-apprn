export function getFormattedDate(date) {
  // return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; //!ini diganti dengan yang dibawah karena lebih efisien
  return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days){
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days); //buat function digunakan untuk mengurangi berapa hari yang di inginkan
}