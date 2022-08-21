import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartCoffeeProvider } from './hooks/useCoffee'
import { Router } from './Router'
import { GlobalStyled } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartCoffeeProvider>
          <GlobalStyled />
          <Router />
        </CartCoffeeProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

