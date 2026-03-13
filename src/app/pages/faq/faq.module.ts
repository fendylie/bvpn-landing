import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UiAccordionItem,
  UiAccordionModule,
} from '../../core/shared/components/accordion/accordion.module';

export interface HelpCategory {
  id: string;
  title: string;
  items: UiAccordionItem[];
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, UiAccordionModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.style.scss'],
})
export class FaqModule {
  // Last category (odd one out) spans the full grid width on desktop
  isFullWidth(id: string): boolean {
    const idx = this.categories.findIndex((c) => c.id === id);
    const total = this.categories.length;
    return total % 2 !== 0 && idx === total - 1;
  }

  categories: HelpCategory[] = [
    {
      id: 'account',
      title: 'Account',
      items: [
        {
          id: 'acc-1',
          label: 'How to register an account?',
          content:
            'Visit our website and click "Sign Up". Fill in your email and choose a password to create your account.',
        },
        {
          id: 'acc-2',
          label: 'Change password',
          content: 'Go to Account Settings → Security → Change Password and follow the prompts.',
        },
        {
          id: 'acc-3',
          label: 'How can I reset my password?',
          content:
            'Click "Forgot password" on the login page and we will send a reset link to your email.',
        },
        {
          id: 'acc-4',
          label: 'Delete account',
          content: 'Contact support to permanently delete your account and all associated data.',
        },
        {
          id: 'acc-5',
          label: 'Concurrent users',
          content:
            'Your subscription allows up to 5 simultaneous connections across different devices.',
        },
      ],
    },
    {
      id: 'subscription',
      title: 'Subscription',
      items: [
        {
          id: 'sub-1',
          label: 'Subscription',
          content:
            'We offer monthly, 6-month, and yearly subscription plans. Manage your plan from the billing dashboard.',
        },
        {
          id: 'sub-2',
          label: 'Payment methods',
          content: 'We accept credit cards, PayPal, and cryptocurrency payments.',
        },
        {
          id: 'sub-3',
          label: 'Change payment',
          content:
            'Update your payment method at any time from Account → Billing → Payment Methods.',
        },
        {
          id: 'sub-4',
          label: 'Cancel subscription',
          content:
            'You can cancel your subscription anytime. Access continues until the end of the billing period.',
        },
        {
          id: 'sub-5',
          label: 'Refundable',
          content: 'We offer a 30-day money-back guarantee on all new subscriptions.',
        },
        {
          id: 'sub-6',
          label: 'Can I have a free trial?',
          content: 'Yes! We offer a 7-day free trial with no credit card required.',
        },
      ],
    },
    {
      id: 'apps',
      title: 'Apps',
      items: [
        {
          id: 'app-1',
          label: 'Windows app',
          content:
            'Download the BVPN client for Windows 64-bit from our downloads page and follow the installation wizard.',
        },
        {
          id: 'app-2',
          label: 'Android',
          content:
            'Install our app from Google Play or download the APK directly from our website.',
        },
        {
          id: 'app-3',
          label: 'iOS',
          content: 'Download Borderless VPN from the App Store and sign in with your credentials.',
        },
        {
          id: 'app-4',
          label: 'Other',
          content: 'We support OpenVPN and IKEv2 configurations for manual setup on any device.',
        },
      ],
    },
    {
      id: 'security',
      title: 'Security features',
      items: [
        {
          id: 'sec-1',
          label: 'Protocols',
          content:
            'We support OpenVPN, IKEv2, and obfs4 (Shapeshifter) for maximum compatibility and security.',
        },
        {
          id: 'sec-2',
          label: 'Encryption',
          content:
            'All traffic is encrypted with AES-256-GCM, the industry standard for VPN security.',
        },
        {
          id: 'sec-3',
          label: 'DNS Leak-protection',
          content:
            'Our clients use private DNS servers and DNS leak protection to keep your queries private.',
        },
        {
          id: 'sec-4',
          label: 'IPv6 blocking',
          content:
            'IPv6 traffic is blocked by default to prevent any leaks outside the VPN tunnel.',
        },
        {
          id: 'sec-5',
          label: 'Kill-switch',
          content:
            'The kill-switch cuts all internet traffic if the VPN connection unexpectedly drops.',
        },
        {
          id: 'sec-6',
          label: 'Web-filter',
          content: 'Our built-in web filter blocks ads and malicious domains at the DNS level.',
        },
        {
          id: 'sec-7',
          label: 'Servers',
          content: 'All servers run private DNS and are P2P-friendly with a strict no-logs policy.',
        },
      ],
    },
    {
      id: 'p2p',
      title: 'Port Forwarding / P2P',
      items: [
        {
          id: 'p2p-1',
          label: 'Servers',
          content:
            'P2P is allowed on all our servers. Choose the location closest to you for best speeds.',
        },
        {
          id: 'p2p-2',
          label: 'Ports',
          content:
            'We support port forwarding on selected servers. Contact support to enable it for your account.',
        },
        {
          id: 'p2p-3',
          label: 'Is it possible to get a static ip?',
          content:
            'Static IPs are available as an add-on. Please contact our support team for pricing.',
        },
        {
          id: 'p2p-4',
          label: 'Can i get a dedicated IP?',
          content:
            'Dedicated IPs are available on our enterprise plans. Reach out to discuss your needs.',
        },
      ],
    },
  ];
}
