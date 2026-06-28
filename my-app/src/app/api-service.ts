export async function getCenters() {
  const res = await fetch('https://infovenezuelaterremoto.org/api/centros');
  const json = await res.json();
  return json.data;
}