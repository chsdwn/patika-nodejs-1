const radius = process.argv[2]
if (!radius || Number.isNaN(radius) || radius <= 0) {
  return console.log('Sıfırdan büyük ve geçerli bir sayı giriniz.')
}

const area = Math.PI * radius * radius
console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`)
