import { useTranslation } from 'react-i18next';
import cls from './OveriviewContent.module.scss';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Select } from '@/shared/ui/Select/Select.tsx';

export const OverviewContent = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className={cls.profileSection}>
                <h3 className={cls.subtitle}>{t('Статистика')}</h3>
                <div className={cls.creatorStats}>
                    <div className={cls.creatorStat}>
                        <span className={cls.creatorStatValue}>3</span>
                        <span className={cls.creatorStatLabel}>{t('Программ')}</span>
                    </div>
                    <div className={cls.creatorStat}>
                        <span className={cls.creatorStatValue}>156</span>
                        <span className={cls.creatorStatLabel}>{t('Подписчиков')}</span>
                    </div>
                    <div className={cls.creatorStat}>
                        <span className={cls.creatorStatValue}>150</span>
                        <span className={cls.creatorStatLabel}>{t('Звезд')}</span>
                    </div>
                </div>
            </div>
            <div className={cls.profileSection}>
                <h3 className={cls.subtitle}>{t('О себе')}</h3>
                <div className="form-group">
                    <Textarea
                        value="Люблю силовые тренировки и составление эффективных программ."
                        rows={3}
                        placeholder="Расскажите о себе, своём опыте и подходе к тренировкам..."
                    />
                </div>
            </div>
            <div className={cls.profileSection}>
                <h3 className={cls.subtitle}>{t('Личная информация')}</h3>
                <form className={cls.profileForm}>
                    <div className={cls.formRow}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">{t('Имя')}</label>
                            <Input name="name" id="name" type="text" value="Максим" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">{t('Email')}</label>
                            <Input id="email" name="email" type="email" value="maxim@example.com" disabled />
                        </div>
                    </div>
                    <div className={cls.formRow}>
                        <div className="form-group">
                            <label htmlFor="city" className="form-label">
                                {t('Город')}
                            </label>
                            <Input name="city" id="city" type="text" value="Москва" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="member" className="form-label">{t('Участник с')}</label>
                            <Input id="member" name="member" type="text" value="Январь 2025" disabled />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">{t('Цель')}</label>
                        <Select value="mass">
                            <option value="mass">Набор массы</option>
                            <option value="weight-loss">Похудение</option>
                            <option value="endurance">Выносливость</option>
                            <option value="strength">Сила</option>
                        </Select>
                    </div>
                    <Button type="button">{t('Сохранить изменения')}</Button>
                </form>
            </div>
        </>

    );
};
