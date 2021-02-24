export default async function getData() {
  const response = await fetch(
    'https://secret-everglades-21695.herokuapp.com/http://www.mrsoft.by/data.json',
  );
  return await response.json();
}
