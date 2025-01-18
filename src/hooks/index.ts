import { useState } from "react"

export const useOpenClose = () => {
    const [anchorEl, setAnchorEl] = useState<{
        element: HTMLElement | null;
        open: boolean;
    }>({
        element: null,
        open: false,
    });

    function openMenu(event: MouseEvent<HTMLElement>) {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl({
            element: event.currentTarget,
            open: true,
          });
    }

    const buttonProps = {
        onClick: openMenu
    }

    const menuProps = {
        anchorEl: anchorEl.element,
        open: anchorEl.open,
    }

    return { open: anchorEl.open, buttonProps, menuProps}
}