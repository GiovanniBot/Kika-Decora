export default async function getTheme(themeId: string) {
  try {
    const res = await fetch(`https://kika-decor.onrender.com/api/themes/${themeId}`, { next: { revalidate: 30 }});

    if (!res.ok) {
      throw new Error('Failed to fetch theme data.');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
