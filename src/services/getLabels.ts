export async function getLabels(typeOfLabel: string) {
  const URL: string = 'http://36.bimtrazer.com/api/PostDataProj'
  const options = {
    method: 'POST',
    body: JSON.stringify({
      ID: 'ListLabels',
      DATA: typeOfLabel
    })
  }

  const res = await fetch(URL, options)

  return res.json()
}