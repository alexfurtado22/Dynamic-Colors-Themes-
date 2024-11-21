type ThemeColors =
  | 'Pink'
  | 'Green'
  | 'Blue'
  | 'Green'
  | 'Purple'
  | 'Yellow'
  | 'Red'
  | 'Wine'
  | 'Zinc'
  | 'Orange'
interface ThemeColorStateParams {
  themeColor: ThemeColors
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>
}
