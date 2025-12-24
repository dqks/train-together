import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './UserInfo.module.scss';
import userPicture from '../../../../shared/assets/images/userPicture.jpg';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { Input } from '@/shared/ui/Input/Input.tsx';
import { Textarea } from '@/shared/ui/Textarea/Textarea.tsx';
import { getUserNickname } from '@/entities/User/model/selectors/getUserNickname/getUserNickname.ts';

interface UserInfoProps {
    className?: string;
}

export const UserInfo = ({ className } : UserInfoProps) => {
    const { t } = useTranslation();
    const nickname = useSelector(getUserNickname);
    const [editMode, setEditMode] = useState(false);

    const editHandler = () => {
        setEditMode((prev) => !prev);
    };

    return (
        <div className={classNames(cls.UserInfo, {}, [className])}>
            <img className={cls.avatar} alt="Avatar" src={userPicture} />
            {
                editMode
                    ? (
                        <form className={cls.form}>
                            <div className={cls.inputWrapper}>
                                <label htmlFor="nickname">Nick</label>
                                <Input
                                    type="text"
                                    placeholder="Nick"
                                    name="nickname"
                                    id="nickname"
                                    value={nickname || ''}
                                />
                            </div>
                            <div className={cls.inputWrapper}>
                                <label htmlFor="bio">Bio</label>
                                <Textarea
                                    className={cls.bioTextarea}
                                    placeholder="Add a bio"
                                    name="bio"
                                    id="bio"
                                />
                            </div>
                            <div className={cls.buttonWrapper}>
                                <Button type="button" onClick={editHandler}>
                                    {t('Сохранить')}
                                </Button>
                                <Button type="button" onClick={editHandler}>
                                    {t('Отменить')}
                                </Button>
                            </div>
                        </form>
                    )
                    : (
                        <>
                            <h2 className={cls.nick}>{nickname}</h2>
                            <p>Bio</p>
                            <Button
                                type="button"
                                onClick={editHandler}
                                className={cls.editButton}
                            >
                                {t('Редактировать профиль')}
                            </Button>
                        </>
                    )
            }
        </div>
    );
};
