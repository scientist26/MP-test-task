export default async function getData() {
  const response = await fetch(
    'https://evening-basin-27448.herokuapp.com/http://www.mrsoft.by/data.json',
  );
  return await response.json();
}
