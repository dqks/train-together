import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import cls from './SubscribeProgram.module.scss';
import { subscribeProgram } from '../model/services/subscribeProgram/subscribeProgram.ts';
import { unsubscribeProgram } from '../model/services/unsubscribeProgram/unsubscribeProgram.ts';
import Phone from '@/shared/assets/icons/phone.svg?react';
import { programsDetailsActions } from '@/entities/Program';

interface SubscribeProgramProps {
    isSubscribed: boolean | undefined;
    programId: number | undefined
}

export const SubscribeProgram = (props: SubscribeProgramProps) => {
    const { programId, isSubscribed } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const subscribeHandler = async () => {
        if (programId) {
            const response = await subscribeProgram(programId);
            if (response.data.success) {
                dispatch(programsDetailsActions.setProgramDetailsIsFollowed(true));
            }
        }
    };

    const unsubscribeHandler = async () => {
        if (programId) {
            const response = await unsubscribeProgram(programId);
            if (response.data.success) {
                dispatch(programsDetailsActions.setProgramDetailsIsFollowed(false));
            }
        }
    };

    return (
        isSubscribed
            ? (
                <>
                    <Button
                        className={classNames(cls.subscribeButton, {}, [cls.unsubscribeButton])}
                        type="button"
                        role='UnsubscribeButton'
                        onClick={unsubscribeHandler}
                    >
                        <Phone className={cls.icon} />
                        {t('Удалить из избранного')}
                    </Button>
                </>
            )
            : (
                <Button
                    className={cls.subscribeButton}
                    onClick={subscribeHandler}
                    type="button"
                    role='SubscribeButton'
                >
                    <Phone className={cls.icon} />
                    {t('Добавить в избранное')}
                </Button>
            )
    );
};
