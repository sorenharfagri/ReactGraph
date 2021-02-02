/*
    Метод для преобразования данных с api в понятный apex-у вид
    Конвертирует дату в timestamp
    Формирует данные для кругового графика
    Можно сделать гибче, за счет декомпозиции
*/

export function ConvertGraphData(data) {

    const pieData = {
        labels: [],
        series: []
    }

    data.forEach(value => {
        value.name = value.title
        delete value.title

        let totalSumm = 0

        value.data.forEach(value => {
            value[0] = Date.parse(value[0])
            totalSumm += value[1]
        })

        pieData.labels.push(value.name)
        pieData.series.push(totalSumm)
    })

    return {
        data,
        pieData
    }
}