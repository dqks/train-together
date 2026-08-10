import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import cls from './ProfilePage.module.scss';
import { UserCard } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader.tsx';
import { ProfileInfo } from './ProfleInfo/ProfileInfo';
import { useTabTitle } from '@/shared/lib/useTabTitle/useTabTitle.ts';
import { DynamicModuleLoader, type ReducerList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '../model/slice/profileSlice';
import { getProfileInfo } from '../model/selectors/getProfileInfo/getProfileInfo';
import { fetchProfileInfo } from '../model/services/fetchProfileInfo/fetchProfileInfo';
import { getIsInitializing } from '../model/selectors/getIsInitializing/getIsInitializing';

interface ProfilePageProps {
    className?: string;
}

const reducers: ReducerList  = {
    profile: profileReducer
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const profileInfo = useSelector(getProfileInfo);
    const isInitializing = useSelector(getIsInitializing);
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(fetchProfileInfo(Number(params.id)));
    }, [dispatch]);

    useTabTitle(profileInfo?.nickname || "Профиль");

    if (isInitializing) {
        return <PageLoader />;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ProfilePage, {}, [className])}>
                <UserCard
                    name={profileInfo?.nickname}
                    email={profileInfo?.email}
                    programCount={profileInfo?.programCount}
                    subscribeCount={100}
                />
                <ProfileInfo
                    userId={Number(params.id)}
                    programCount={profileInfo?.programCount}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
