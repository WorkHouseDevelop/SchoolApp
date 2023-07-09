import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.school.app',
  appName: 'schoolApp',
  webDir: 'dist/school-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
