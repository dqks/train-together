import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import cls from './SubscribeProgram.module.scss';
import { subscribeProgram } from '../model/services/subscribeProgram/subscribeProgram.ts';
import { unsubscribeProgram } from '../model/services/unsubscribeProgram/unsubscribeProgram.ts';
import Phone from '@/shared/assets/icons/phone.svg?react';
import { programsDetailsActions } from '@/entities/Program';
import { ErrorMessage } from '@/shared/ui/ErrorMessage/ErrorMessage.tsx';
import { Flex } from '@/shared/ui/Flex/Flex/Flex.tsx';

interface SubscribeProgramProps {
    isSubscribed: boolean | undefined;
    programId: number | undefined
}

export const SubscribeProgram = (props: SubscribeProgramProps) => {
    const { programId, isSubscribed } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [error, setError] = useState<string | undefined>(undefined);

    const subscribeHandler = async () => {
        if (programId) {
            try {
                const response = await subscribeProgram(programId);
                if (response.data.success) {
                    dispatch(programsDetailsActions.setProgramDetailsIsFollowed(true));
                }
            } catch (e) {
                setError(t('Произошла ошибка во время добавления в избранное'));
            }
        }
    };

    const unsubscribeHandler = async () => {
        if (programId) {
            // Добавляем try для тестов
            try {
                const response = await unsubscribeProgram(programId);
                if (response.data.success) {
                    dispatch(programsDetailsActions.setProgramDetailsIsFollowed(false));
                }
            } catch (e) {
                setError(t('Произошла ошибка во время добавления в избранное'));
            }
        }
    };

    return (
        <Flex
            direction="column"
            justify="center"
            align="center"
            gap="xs"
        >
            {isSubscribed
                ? (
                    <Button
                        className={classNames(cls.subscribeButton, {}, [cls.unsubscribeButton])}
                        type="button"
                        onClick={unsubscribeHandler}
                    >
                        <Phone className={cls.icon} />
                        {t('Удалить из избранного')}
                    </Button>
                )
                : (
                    <Button
                        className={cls.subscribeButton}
                        onClick={subscribeHandler}
                        type="button"
                    >
                        <Phone className={cls.icon} />
                        {t('Добавить в избранное')}
                    </Button>
                )}
            <ErrorMessage messages={error} />
        </Flex>
    );
};
