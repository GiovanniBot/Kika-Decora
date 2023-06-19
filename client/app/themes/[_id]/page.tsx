import getTheme from '@/lib/getTheme';

type Params = {
  params: {
    _id: string
  }
}

export default async function ThemePage({ params: { _id } }: Params) {
  const themeData: Promise<Theme> = getTheme(_id)

  const theme = await themeData

  return (
    <div>
      {theme.name}
    </div>
  )
}
