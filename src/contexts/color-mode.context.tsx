import { createContext, PropsWithChildren, useMemo, useState } from 'react';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';

enum ColorMode {
  Light = 'light',
  Dark = 'dark',
}

interface IColorModeContext {
  toggleColorMode: () => void;
}

const getDesignTokens = (mode: ColorMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#556cd6',
          },
        }
      : {
          primary: {
            main: '#19857b',
          },
        }),
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext<IColorModeContext>({ toggleColorMode: () => {} });

const ColorModeContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [mode, setMode] = useState<ColorMode>(ColorMode.Light);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (): void => {
        setMode((prevMode) => (prevMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
