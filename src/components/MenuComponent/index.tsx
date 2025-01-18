import { useOpenClose } from "../../hooks"

export const MenuComponent = () => {

    const { buttonProps, menuProps, open } = useOpenClose()

    return(
        <>
         <button {...buttonProps}>Open</button>
         {open &&
            <div {...menuProps}>Menu</div>
         }
         
        </>
       
    )
}