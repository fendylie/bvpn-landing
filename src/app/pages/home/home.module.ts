import { Component } from '@angular/core';
import { BestOfferPlanModule } from '../../shared/components/best-offer-plan/best-offer-plan.module';

@Component({
  selector: 'app-home',
  imports: [BestOfferPlanModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.style.scss',
})
export class HomeModule {}
