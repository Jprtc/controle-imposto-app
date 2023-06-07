export function convertDate(data: string) {
    // data: 28/02/2023
    const dataArray = data.split('/')
    const numberedData = dataArray.map((num) => {return parseInt(num) })
    console.log('dataArray:',dataArray)
    // console.log(numberedData)
    console.log(numberedData[0], numberedData[1], numberedData[2])
    // const convertedDate = new Date(`${dataArray[1]}/${dataArray[0]}/${dataArray[2]}`)
    // dataArray = [28,02,2023]
    return new Date(numberedData[2], (numberedData[1] -1), numberedData[0])
  }