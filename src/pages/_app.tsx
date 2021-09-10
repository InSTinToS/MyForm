import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles'

import theme from '../styles/theme'

import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from 'store'

export interface Overflow {
  x?: string
  y?: string
  overflow?: string
}

export interface GlobalContextProps {
  overflow?: {
    overflow?: Overflow
    setOverflow?: Dispatch<SetStateAction<Overflow>>
  }
}

export const GlobalContext = createContext<GlobalContextProps>({})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [overflow, setOverflow] = useState<Overflow>({ overflow: 'auto' })

  return (
    <GlobalContext.Provider value={{ overflow: { overflow, setOverflow } }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </GlobalContext.Provider>
  )
}

export default MyApp
