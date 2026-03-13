import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface Server {
  id: string;
  country: string;
  city: string;
  dns: string;
  flagEmoji: string;
  flagCode: string;
}

export interface ServerRegion {
  id: string;
  name: string;
  servers: Server[];
}

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.style.scss'],
})
export class ServersModule {
  features = [
    'Private DNS on each server',
    'OpenVPN, IKEv2 and obfs4 available',
    'All servers are P2P-friendly',
    'Strict no-logs policy',
  ];

  regions: ServerRegion[] = [
    {
      id: 'europe',
      name: 'Europe',
      servers: [
        {
          id: 'no-osl',
          country: 'Norway',
          city: 'Oslo',
          dns: 'dns: no-osl.borderlessvpn.io',
          flagEmoji: '🇳🇴',
          flagCode: 'NO',
        },
        {
          id: 'no-krs',
          country: 'Norway',
          city: 'Kristiansand',
          dns: 'dns: no-krs.borderlessvpn.io',
          flagEmoji: '🇳🇴',
          flagCode: 'NO',
        },
        {
          id: 'fr-par',
          country: 'France',
          city: 'Paris',
          dns: 'dns: fr-par.borderlessvpn.io',
          flagEmoji: '🇫🇷',
          flagCode: 'FR',
        },
        {
          id: 'nl-ams',
          country: 'Netherlands',
          city: 'Amsterdam',
          dns: 'dns: nl-ams.borderlessvpn.io',
          flagEmoji: '🇳🇱',
          flagCode: 'NL',
        },
        {
          id: 'se-sth',
          country: 'Sweden',
          city: 'Stockholm',
          dns: 'dns: se-sth.borderlessvpn.io',
          flagEmoji: '🇸🇪',
          flagCode: 'SE',
        },
        {
          id: 'de-fra',
          country: 'Germany',
          city: 'Frankfurt',
          dns: 'dns: de-fra.borderlessvpn.io',
          flagEmoji: '🇩🇪',
          flagCode: 'DE',
        },
        {
          id: 'lt-vil',
          country: 'Lithuania',
          city: 'Vilnius',
          dns: 'dns: lt-vil.borderlessvpn.io',
          flagEmoji: '🇱🇹',
          flagCode: 'LT',
        },
        {
          id: 'ua-kyj',
          country: 'Ukraine',
          city: 'Kyiv',
          dns: 'dns: ua-kyj.borderlessvpn.io',
          flagEmoji: '🇺🇦',
          flagCode: 'UA',
        },
      ],
    },
    {
      id: 'asia',
      name: 'Asia',
      servers: [
        {
          id: 'th-bkk',
          country: 'Thailand',
          city: 'Bangkok',
          dns: 'dns: th-bkk.borderlessvpn.io',
          flagEmoji: '🇹🇭',
          flagCode: 'TH',
        },
        {
          id: 'ku-lu',
          country: 'Malaysia',
          city: 'Kuala Lumpur',
          dns: 'dns: ku-lu.borderlessvpn.io',
          flagEmoji: '🇲🇾',
          flagCode: 'MY',
        },
      ],
    },
    {
      id: 'america',
      name: 'America',
      servers: [
        {
          id: 'us-sea',
          country: 'USA',
          city: 'Seattle',
          dns: 'dns: us-sea.borderlessvpn.io',
          flagEmoji: '🇺🇸',
          flagCode: 'US',
        },
        {
          id: 'us-ny',
          country: 'USA',
          city: 'New York',
          dns: 'dns: us-ny.borderlessvpn.io',
          flagEmoji: '🇺🇸',
          flagCode: 'US',
        },
        {
          id: 'us-atl',
          country: 'USA',
          city: 'Atlanta',
          dns: 'dns: us-at.borderlessvpn.io',
          flagEmoji: '🇺🇸',
          flagCode: 'US',
        },
      ],
    },
    {
      id: 'oceania',
      name: 'Oceania & Africa',
      servers: [
        {
          id: 'au-syd',
          country: 'Australia',
          city: 'Sydney',
          dns: 'dns: au-syd.borderlessvpn.io',
          flagEmoji: '🇦🇺',
          flagCode: 'AU',
        },
      ],
    },
  ];
}
