import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Button } from '@/shared/ui/Button/Button.tsx';
import cls from './SubscribeProgram.module.scss';
import { subscribeProgram } from '../model/services/subscribeProgram/subscribeProgram.ts';
import { unsubscribeProgram } from '../model/services/unsubscribeProgram/unsubscribeProgram.ts';
import { programsActions } from '@/entities/Program';

interface SubscribeProgramProps {
    className?: string;
    isSubscribed: boolean | undefined;
    programId: number | undefined
}

export const SubscribeProgram = (props: SubscribeProgramProps) => {
    const { className, programId, isSubscribed } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const subscribeHandler = async () => {
        if (programId) {
            const response = await subscribeProgram(programId);
            if (response.data.success) {
                dispatch(programsActions.setProgramDetailsIsFollowed(true));
            }
        }
    };

    const unsubscribeHandler = async () => {
        if (programId) {
            const response = await unsubscribeProgram(programId);
            if (response.data.success) {
                dispatch(programsActions.setProgramDetailsIsFollowed(false));
            }
        }
    };

    return (
        <div
            className={classNames(cls.SubscribeProgram, {}, [className])}
        >
            {isSubscribed
                ? (
                    <>
                        <div className={cls.titleWrapper}>
                            <h2>
                                {t('Подпишитесь, чтобы программа'
                                    + ' отображалась в ваших подписках')}
                            </h2>
                        </div>
                        <Button
                            className={cls.unsubscribeButton}
                            onClick={unsubscribeHandler}
                            type="button"
                        >
                            {t('- Отписаться')}
                        </Button>
                    </>
                )
                : (
                    <>
                        <div className={cls.titleWrapper}>
                            <h2>
                                {t('Подпишитесь, чтобы программа'
                                    + ' отображалась в ваших подписках')}
                            </h2>
                        </div>
                        <Button onClick={subscribeHandler} type="button">{t('+ Подписаться')}</Button>
                    </>
                )}
        </div>
    );
};
