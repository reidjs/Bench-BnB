export const getBenches = (filters) => {
  console.log(filters)
  return $.ajax({
    url: 'api/benches',
    method: 'GET',
    error: (err) => console.log(err)
  })
}