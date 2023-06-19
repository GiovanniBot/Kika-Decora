export default async function getAllThemes() {
  try {
    const res = await fetch('http://localhost:3003/api/themes/', { next: { revalidate: 43200 }});

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
