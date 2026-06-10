import zipData from "@/data/zipcodes_dict.json";

export async function GET(request, { params }) {
  const { query } = params;
  if (!query) return new Response(JSON.stringify([]), { status: 200 });

  const q = query.trim().toLowerCase();
  const isNumeric = /^\d+$/.test(q);

  const exactMatches = [];
  const paddedStartMatches = [];
  const prefixMatches = [];
  const paddedEndMatches = [];
  const substringMatches = [];
  const cityMatches = [];
  const stateMatches = [];

  Object.entries(zipData).forEach(([zip, info]) => {
    const zipLower = zip.toLowerCase();

    if (zipLower === q) {
      exactMatches.push({ zip, ...info });
      return;
    }

    if (isNumeric) {
      const normalizedZipStart = q.padStart(5, "0");
      const normalizedZipEnd = q.padEnd(5, "0");

      if (zipLower === normalizedZipStart && q.length < 5) {
        paddedStartMatches.push({ zip, ...info });
        return;
      }
      if (zipLower === normalizedZipEnd && q.length < 5) {
        paddedEndMatches.push({ zip, ...info });
        return;
      }
    }

    if (zipLower.startsWith(q)) {
      prefixMatches.push({ zip, ...info });
      return;
    }

    if (isNumeric && zipLower.includes(q)) {
      substringMatches.push({ zip, ...info });
      return;
    }

    if (info.city.toLowerCase().includes(q)) {
      cityMatches.push({ zip, ...info });
      return;
    }

    if (info.state.toLowerCase() === q) {
      stateMatches.push({ zip, ...info });
      return;
    }
  });

  const sortByZip = (a, b) => a.zip.localeCompare(b.zip);

  const results = [
    ...exactMatches.sort(sortByZip),
    ...paddedStartMatches.sort(sortByZip),
    ...prefixMatches.sort(sortByZip),
    ...paddedEndMatches.sort(sortByZip),
    ...substringMatches.sort(sortByZip),
    ...cityMatches.sort(sortByZip),
    ...stateMatches.sort(sortByZip),
  ].slice(0, 10);

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
