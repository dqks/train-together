import { useOutletContext } from 'react-router';
import { useEffect } from 'react';
import type { TFunction } from 'i18next';
import type { AppContextType } from '@/app/layout/AppLayout/ui/AppLayout.tsx';

export const usePageTitle = (title : string, t :TFunction, showTitle :boolean = true) => {
    const context : AppContextType = useOutletContext();
    useEffect(() => {
        if (context === null) {
            return;
        }

        if (!showTitle) {
            context.setShowTitle(false);
        } else {
            context.setShowTitle(true);
            context.setTitle(t(title));
        }

        // eslint-disable-next-line consistent-return
        return () => {
            context.setTitle('');
        };
    }, [context.setTitle, t]);
};
