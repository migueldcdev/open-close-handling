import { useOpenClose } from "../../hooks"

export const PopupComponent = () => {

    const { openButtonProps, closeButtonProps, menuProps, open } = useOpenClose()

    return(
        <>
         <button { ...openButtonProps }>Open</button>
         {open &&
            <div { ...menuProps }>
                Popup
                <button {... closeButtonProps }>X</button>
            </div>
         }
         
        </>
       
    )
}