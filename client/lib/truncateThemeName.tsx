export default async function truncateThemeName(ThemeName: string) {
  const screenWidth = window.innerWidth; // Todo: window.innerWidth is not available on the server side, so this function will not work on the server side. We need to find a way to make it work on the client side.

  if (screenWidth >= 1024 || screenWidth <= 1370) {
    return ThemeName.length > 12 ? ThemeName.substring(0, 15 - 3) + '...' : ThemeName;
  }

}