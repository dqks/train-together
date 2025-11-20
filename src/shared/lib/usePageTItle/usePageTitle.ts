import { useOutletContext } from "react-router"
import type { AppContextType } from "../../../app/layout/AppLayout/ui/AppLayout"
import { useEffect } from "react";
import type { TFunction } from "i18next";


export const usePageTitle = ( title : string, t :TFunction ) => {
    const context : AppContextType = useOutletContext()
    if (context === null) {
        return;
    } else {
        useEffect(() => {
            context.setTitle(t(title))
            return () => {
            context.setTitle("")
            }
        }, [context.setTitle, t])
    }
}