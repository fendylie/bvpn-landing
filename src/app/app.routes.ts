import { Routes } from '@angular/router';
import { LoginModule } from './pages/auth/login/login.module';
import { HomeModule } from './pages/home/home.module';
import { DownloadDevicesModule } from './pages/download-devices/download-devices.module';
import { ContactUsModule } from './pages/contact-us/contact-us.module';
import { ServersModule } from './pages/servers/servers.module';
import { TroubleshootingModule } from './pages/troubleshooting/troubleshooting.module';
import { FaqModule } from './pages/faq/faq.module';

export const routes: Routes = [
  { path: '', component: HomeModule },
  { path: 'download-devices', component: DownloadDevicesModule },
  { path: 'contact-us', component: ContactUsModule },
  { path: 'servers', component: ServersModule },
  { path: 'faq', component: FaqModule },
  { path: 'troubleshooting', component: TroubleshootingModule },
  {
    path: 'login',
    component: LoginModule,
    data: {
      title: 'Login',
      tags: [
        {
          name: 'description',
          content: 'Funnel Journey Login page',
        },
      ],
    },
  },
];
