import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/classNames/classNames.ts';
import { AppRouter } from './providers/router';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter />
        </div>
    );
};
