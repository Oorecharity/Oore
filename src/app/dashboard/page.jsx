"use client"

import Navbar from '../components/dashboardComponent/Navbar';
import Sidebar from '../components/dashboardComponent/Sidebar';
import ProgressBar from '../components/dashboardComponent/progressbar';
import PrimaryButton from '../components/dashboardComponent/PrimaryButton';
import SecondaryButton from '../components/dashboardComponent/SecondaryButton';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: '40px', display: 'flex' }}>
        <Sidebar />
        <section style={{ flex: 1, paddingLeft: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProgressBar percentage={51} /> {/*Progress bar component */}
            <PrimaryButton>
              Donate {/*Primary button component */}
            </PrimaryButton>
            <SecondaryButton>
              View Project {/*Secondary button component */}
            </SecondaryButton>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
