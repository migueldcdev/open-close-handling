import { useOpenClose } from "../../hooks"

export const MenuComponent = () => {

    const { openButtonProps, closeButtonProps, menuProps, open } = useOpenClose()

    return(
        <>
         <button { ...openButtonProps }>Open</button>
         {open &&
            <div { ...menuProps }>
                Menu
                <button {... closeButtonProps }>X</button>
            </div>
         }
         
        </>
       
    )
}