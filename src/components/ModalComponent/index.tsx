import { ReactElement } from "react"
import { useOpenClose } from "../../hooks"

export const ModalComponent = ({children}: {children: ReactElement}) => {

    const { openButtonProps, closeButtonProps, menuProps, open } = useOpenClose()

    return(
        <>
         <button { ...openButtonProps }>Open</button>
         {open &&
            <div { ...menuProps }>
                {children}
                <button {... closeButtonProps }>X</button>
            </div>
         }
         
        </>
       
    )
}