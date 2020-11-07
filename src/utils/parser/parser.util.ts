export const dataParse = (data: any): any => {
  return JSON.parse(JSON.stringify(data))
}