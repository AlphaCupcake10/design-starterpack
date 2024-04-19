import LenisWrapper from "./LenisWrapper"
import { ModalProvier } from "./ModalContext"
import { ThemeProvider } from "./ThemeContext"

function AllContexts(props:{children:React.ReactNode}) {
  return (
    <LenisWrapper>
        <ThemeProvider>
          <ModalProvier>
            {props.children}
          </ModalProvier>
        </ThemeProvider>
    </LenisWrapper>
  )
}

export default AllContexts