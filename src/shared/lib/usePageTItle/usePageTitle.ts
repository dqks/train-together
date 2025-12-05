import { useOutletContext } from 'react-router';
import { useEffect } from 'react';
import type { TFunction } from 'i18next';
import type { AppContextType } from '../../../app/layout/AppLayout/ui/AppLayout';

export const usePageTitle = (title : string, t :TFunction) => {
    const context : AppContextType = useOutletContext();
    useEffect(() => {
        if (context === null) {
            return;
        }
        context.setTitle(t(title));
        return () => {
            context.setTitle('');
        };
    }, [context.setTitle, t]);
};
