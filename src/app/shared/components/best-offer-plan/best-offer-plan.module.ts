import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  billing: string;
  featured: boolean;
  ctaLabel: string;
  ctaLink: string;
}

@Component({
  selector: 'app-best-offer-plan',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatRippleModule],
  templateUrl: './best-offer-plan.component.html',
  styleUrls: ['./best-offer-plan.style.scss'],
})
export class BestOfferPlanModule {
  plans: Plan[] = [
    {
      id: 'monthly',
      name: 'Monthly plan',
      price: '$7.99',
      period: 'per month',
      billing: 'Billed every month',
      featured: false,
      ctaLabel: 'Start now',
      ctaLink: '#',
    },
    {
      id: 'yearly',
      name: 'Yearly plan',
      price: '$3.70',
      period: 'per month',
      billing: 'Billed $44.4 every 12 months',
      featured: true,
      ctaLabel: 'Start now',
      ctaLink: '#',
    },
    {
      id: 'biannual',
      name: '6 months plan',
      price: '$5.50',
      period: 'per month',
      billing: 'Billed $33 every 6 months',
      featured: false,
      ctaLabel: 'Start now',
      ctaLink: '#',
    },
  ];

  onPlanSelect(plan: Plan): void {
    console.log('Selected plan:', plan.id);
    // Navigate or emit event as needed
  }
}
