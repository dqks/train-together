import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { ToggleSwitch } from '@/shared/ui/ToggleSwitch/ToggleSwitch.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';

interface SidebarProps {
    isPublic: boolean;
    onCancel: () => void;
    onChangeIsPublic: (isPublic: boolean) => void;
    onSave: () => void;
    isLoading: boolean
}

export const Sidebar = (props : SidebarProps) => {
    const { t } = useTranslation();

    const {
        isPublic, isLoading, onSave, onCancel, onChangeIsPublic,
    } = props;

    return (
        <aside className={cls.programSidebar}>
            <div className={cls.settingsCard}>
                <h3 className={cls.settingsTitle}>{t('Настройки программы')}</h3>

                <div className={cls.formGroup}>
                    <label
                        htmlFor="difficulty"
                        className={cls.formLabel}
                    >
                        {t('Уровень сложности')}
                    </label>
                    <Select className={cls.formInput}>
                        <option value="beginner">{t('Новичок')}</option>
                        <option value="intermediate">{t('Средний')}</option>
                        <option value="advanced">{t('Продвинутый')}</option>
                    </Select>
                </div>

                <div className={cls.formGroup}>
                    <label
                        htmlFor="difficulty"
                        className={cls.formLabel}
                    >
                        {t('Цель')}
                    </label>
                    <Select className={cls.formInput}>
                        <option value="beginner">{t('Новичок')}</option>
                        <option value="intermediate">{t('Средний')}</option>
                        <option value="advanced">{t('Продвинутый')}</option>
                    </Select>
                </div>

                <div className={cls.toggleGroup}>
                    <ToggleSwitch
                        checked={isPublic}
                        onChange={onChangeIsPublic}
                        label={t('Публичная программа')}
                    />
                    <p className={cls.formHint}>
                        {t('Программа будет видима всем пользователям')}
                    </p>
                </div>
            </div>

            <div className={cls.statsPreviewCard}>
                <h3 className={cls.statsPreviewTitle}>{t('Статистика')}</h3>
                <div className={cls.statsPreviewList}>
                    <div className={cls.statsPreviewItem}>
                        <span className={cls.statsPreviewLabel}>{t('Дней')}</span>
                        <span className={cls.statsPreviewValue}>2</span>
                    </div>
                    <div className={cls.statsPreviewItem}>
                        <span className={cls.statsPreviewLabel}>{t('Упражнений')}</span>
                        <span className={cls.statsPreviewValue}>2</span>
                    </div>
                </div>
            </div>

            <div className={cls.editActions}>
                <Button
                    onClick={onCancel}
                    theme={ThemeButton.OUTLINE}
                    type="button"
                >
                    {t('Отмена')}
                </Button>
                <Button
                    type="button"
                    onClick={onSave}
                    disabled={isLoading}
                >
                    <Save />
                    {t('Сохранить')}
                </Button>
            </div>
        </aside>
    );
};
