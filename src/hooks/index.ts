import React, { useState } from "react"

export const useOpenClose = () => {
    const [anchorEl, setAnchorEl] = useState<{
        element: HTMLElement | null;
        open: boolean;
    }>({
        element: null,
        open: false,
    });

    function openMenu(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl({
            element: event.currentTarget,
            open: true,
        });
    }

    function closeMenu(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        event.stopPropagation();
        setAnchorEl({
            element: event.currentTarget,
            open: false,
        });
    }

    const openButtonProps = {
        onClick: openMenu
    }

    const closeButtonProps = {
        onClick: closeMenu
    }

    const menuProps = {
        anchorel: anchorEl.element,
        open: anchorEl.open,
    }

    return { 
        open: anchorEl.open,
        openButtonProps,
        closeButtonProps,
        menuProps 
    }
}