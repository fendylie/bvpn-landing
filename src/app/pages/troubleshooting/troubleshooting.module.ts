import { Component } from '@angular/core';
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
  selector: 'app-troubleshooting',
  imports: [UiAccordionModule],
  standalone: true,
  templateUrl: './troubleshooting.component.html',
  styleUrl: './troubleshooting.style.scss',
})
export class TroubleshootingModule {
  // Last category (odd one out) spans the full grid width on desktop
  isFullWidth(id: string): boolean {
    const idx = this.categories.findIndex((c) => c.id === id);
    const total = this.categories.length;
    return total % 2 !== 0 && idx === total - 1;
  }

  categories: HelpCategory[] = [
    {
      id: 'generic',
      title: 'Generic',
      items: [
        {
          id: 'acc-1',
          label: 'Slow Connection',
          content:
            'Visit our website and click "Sign Up". Fill in your email and choose a password to create your account.',
        },
        {
          id: 'acc-2',
          label: 'Unable to connect',
          content: 'Go to Account Settings → Security → Change Password and follow the prompts.',
        },
        {
          id: 'acc-3',
          label: 'Blocked from China',
          content:
            'Click "Forgot password" on the login page and we will send a reset link to your email.',
        },
        {
          id: 'acc-4',
          label: 'Netflix (and other streaming-services) does not work',
          content: 'Contact support to permanently delete your account and all associated data.',
        },
        {
          id: 'acc-5',
          label: 'Cannot access website',
          content:
            'Your subscription allows up to 5 simultaneous connections across different devices.',
        },
      ],
    },
    {
      id: 'windows',
      title: 'Windows',
      items: [
        {
          id: 'sub-1',
          label: 'Error message Unable to login',
          content:
            'We offer monthly, 6-month, and yearly subscription plans. Manage your plan from the billing dashboard.',
        },
        {
          id: 'sub-2',
          label: 'Error message Connecting spinning. Not feedback in GUI',
          content: 'We accept credit cards, PayPal, and cryptocurrency payments.',
        },
        {
          id: 'sub-3',
          label: 'Unable to connect after login',
          content:
            'Update your payment method at any time from Account → Billing → Payment Methods.',
        },
        {
          id: 'sub-4',
          label: 'Update servers',
          content:
            'You can cancel your subscription anytime. Access continues until the end of the billing period.',
        },
        {
          id: 'sub-5',
          label: 'DNS leak',
          content: 'We offer a 30-day money-back guarantee on all new subscriptions.',
        },
      ],
    },
  ];
}
