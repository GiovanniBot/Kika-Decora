import getTheme from '@/lib/getTheme';

type Params = {
  params: {
    themeId: string
  }
}

export default async function ThemePage({ params: { themeId } }: Params) {
  const themeData: Promise<Theme> = getTheme(themeId)

  const theme = await themeData

  return (
    <div>
      {theme.name}
    </div>
  )
}
