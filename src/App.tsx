import * as React from 'react';
import { Router } from '@reach/router';

import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';

import { MyProfile } from './pages/MyProfile';
import { PersonalInfo } from './pages/PersonalInfo';
import { MyServices } from './pages/MyServices';

import './styles/App.scss';

const MyProfilePage = (_props: any) => <MyProfile />;
const PersonalInfoPage = (_props: any) => <PersonalInfo />
const MyServicesPage = (_props: any) => <MyServices />

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Router>
          <MyProfilePage path="/" />
          <PersonalInfoPage path="/personal-info" />
          <MyServicesPage path="/services" />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
