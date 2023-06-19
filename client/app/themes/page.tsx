import type { Metadata } from 'next'
import getAllThemes from '@/lib/getAllThemes';
export const metadata: Metadata = {
  title: 'Kika Decora - Temas',
}

export default async function Themes() {
  const themesData: Promise<Theme[]> = getAllThemes()

  const themes = await themesData

  return (
    <main>
      <ul>
        {themes.map((theme) => (
          <li key={theme.themeId}>{theme.name}</li>
        ))}
      </ul>
    </main>
  )
}