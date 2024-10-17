// 日付データの取得
const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

// 日付の表示
console.log(year + '年', month +1 + '月', day + '日');