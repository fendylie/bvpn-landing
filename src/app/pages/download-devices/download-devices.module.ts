import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface DownloadItem {
  id: string;
  label: string;
  icon: string;
  downloadLink: string;
  installLink: string;
}

export interface DownloadSection {
  id: string;
  title: string;
  description?: string;
  items: DownloadItem[];
}

@Component({
  selector: 'app-download-devices',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './download-devices.component.html',
  styleUrls: ['./download-devices.style.scss'],
})
export class DownloadDevicesModule {
  sections: DownloadSection[] = [
    {
      id: 'client',
      title: 'Client based software',
      description:
        'Borderless offers a broad selection of clients to your device.\nInstalling and connecting only takes a few minutes.',
      items: [
        {
          id: 'win64',
          label: 'BVPN for Windows 64 bit',
          icon: 'window',
          downloadLink: '#',
          installLink: '#',
        },
        {
          id: 'android',
          label: 'BVPN for Android',
          icon: 'android',
          downloadLink: '#',
          installLink: '#',
        },
        { id: 'ios', label: 'BVPN for IOS', icon: 'apple', downloadLink: '#', installLink: '#' },
        {
          id: 'linux',
          label: 'VPN for Linux',
          icon: 'terminal',
          downloadLink: '#',
          installLink: '#',
        },
        {
          id: 'macos',
          label: 'VPN for Mac OS X',
          icon: 'laptop_mac',
          downloadLink: '#',
          installLink: '#',
        },
      ],
    },
    {
      id: 'alternative',
      title: 'Alternative downloads',
      items: [
        {
          id: 'ovpn-win',
          label: 'Openvpn for Windows 10',
          icon: 'window',
          downloadLink: '#',
          installLink: '#',
        },
        {
          id: 'ovpn-android',
          label: 'Openvpn for Android',
          icon: 'android',
          downloadLink: '#',
          installLink: '#',
        },
        {
          id: 'ovpn-ios',
          label: 'Openvpn for IOS',
          icon: 'apple',
          downloadLink: '#',
          installLink: '#',
        },
        {
          id: 'shapeshifter',
          label: 'Shapeshifter Obfs4',
          icon: 'apple',
          downloadLink: '#',
          installLink: '#',
        },
      ],
    },
    {
      id: 'router',
      title: 'Router based software',
      description:
        'Set up your router as a vpn client.\nProtect everything from a tv to mobilephones at home.',
      items: [
        { id: 'vilfo', label: 'Vilfo', icon: 'wifi', downloadLink: '#', installLink: '#' },
        {
          id: 'ddwrt',
          label: 'DDWRT for routers',
          icon: 'wifi',
          downloadLink: '#',
          installLink: '#',
        },
      ],
    },
  ];

  onDownload(item: DownloadItem): void {
    console.log('Download:', item.id);
  }

  onInstall(item: DownloadItem): void {
    console.log('How to install:', item.id);
  }
}
