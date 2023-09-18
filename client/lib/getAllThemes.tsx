export default async function getAllThemes() {
  try {
    const res = await fetch('https://kika-decor.onrender.com/api/themes/', { next: { revalidate: 30 }}); //43200

    if (!res.ok) {
      throw new Error('Failed to fetch themes data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
