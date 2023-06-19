// export default async function getTheme(themeId: string) {
//   const res = await fetch(`http://localhost:3003/api/themes/${themeId}`, { next: { revalidate: 10 }});

//     if (!res.ok) throw new Error('Failed to fetch theme data')

//     return res.json()
// }

export default async function getTheme(themeId: string) {
  try {
    const res = await fetch(`http://localhost:3003/api/themes/${themeId}`, { next: { revalidate: 10 }});

    if (!res.ok) {
      throw new Error('Failed to fetch theme data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
