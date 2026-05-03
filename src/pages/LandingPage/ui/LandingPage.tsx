import cls from './LandingPage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames.ts';
import { Footer } from '@/shared/ui/Footer/Footer.tsx';
import { Header } from '@/widgets/Header';
import { HeroSection } from './HeroSection/HeroSection.tsx';
import { RequirementsSection } from './RequirementsSection/RequirementsSection.tsx';
import { SaveProgramSection } from './SaveProgramSection/SaveProgramSection.tsx';
import { CustomExerciseSection } from './CustomExerciseSection/CustomExerciseSection.tsx';
import { PopularProgramsSection } from './PopularProgramsSection/PopularProgramsSection.tsx';

interface LandingPageProps {
    className?: string;
}

const LandingPage = ({ className }: LandingPageProps) => (
    <div className={classNames(cls.MainPage, {}, [className])}>
        <Header />
        <HeroSection />
        <RequirementsSection />
        <SaveProgramSection />
        <CustomExerciseSection />
        <PopularProgramsSection />
        <Footer />
    </div>
);
export default LandingPage;
