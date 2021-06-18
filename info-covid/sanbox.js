let time = '2020-03-31T00:00:00Z'
let date = time.split('T')[0]
console.log(date)

const monthly = [
	{
		Maret: 11971,
		April: 164969,
		Mei: 546175,
		Juni: 1211857,
		Juli: 2544132,
		Agustus: 4336124,
		September: 6879525,
		Oktober: 10928941,
		November: 14115752,
		Desember: 19834279,
	},
]
let result = []
monthly.forEach((el) => {
	for (let key in el) {
		result.push(el[key])
	}
})
console.log(result)
