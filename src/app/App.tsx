import { Header } from './components/Header';
import { DepartmentBanner } from './components/DepartmentBanner';
import { ProfileSection } from './components/ProfileSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DepartmentBanner />
      <ProfileSection />
    </div>
  );
}
