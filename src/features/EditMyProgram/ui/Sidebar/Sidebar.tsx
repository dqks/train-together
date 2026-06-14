import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
import { Select } from '@/shared/ui/Select/Select.tsx';
import { ToggleSwitch } from '@/shared/ui/ToggleSwitch/ToggleSwitch.tsx';
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx';
import Save from '@/shared/assets/icons/save.svg?react';
import type { Difficulty, Goal } from '@/entities/Program';

interface SidebarProps {
    isPublic: boolean;
    isLoading: boolean
    daysAmount: number | undefined;
    // exerciseAmount: number;
    programGoals: Goal[] | undefined
    programDifficulties: Difficulty[] | undefined
    selectedProgramGoalId: number | undefined
    selectedProgramDifficultyId: number | undefined
    onCancel: () => void;
    onChangeIsPublic: (isPublic: boolean) => void;
    onChangeGoal: (id: string) => void;
    onChangeDiff: (id: string) => void;
    onSave: () => void;
}

export const Sidebar = (props : SidebarProps) => {
    const { t } = useTranslation();

    const {
        isPublic,
        isLoading,
        programGoals,
        programDifficulties,
        selectedProgramGoalId,
        selectedProgramDifficultyId,
        daysAmount,
        onSave,
        onCancel,
        onChangeIsPublic,
        onChangeGoal,
        onChangeDiff,
    } = props;

    const goalOptions = programGoals
        ?.map((goal) => (
            <option
                key={goal.id}
                value={goal.id}
            >
                {goal.name}
            </option>
        ));

    const diffOptions = programDifficulties
        ?.map((diff) => (
            <option
                key={diff.id}
                value={diff.id}
            >
                {diff.name}
            </option>
        ));

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
                    <Select
                        onChange={onChangeDiff}
                        defaultValue={selectedProgramDifficultyId}
                        className={cls.formInput}
                    >
                        {diffOptions}
                    </Select>
                </div>

                <div className={cls.formGroup}>
                    <label
                        htmlFor="difficulty"
                        className={cls.formLabel}
                    >
                        {t('Цель')}
                    </label>
                    <Select
                        onChange={onChangeGoal}
                        defaultValue={selectedProgramGoalId}
                        className={cls.formInput}
                    >
                        {goalOptions}
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
                        <span className={cls.statsPreviewValue}>{daysAmount}</span>
                    </div>
                    <div className={cls.statsPreviewItem}>
                        <span className={cls.statsPreviewLabel}>{t('Упражнений')}</span>
                        {/* TODO */}
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
