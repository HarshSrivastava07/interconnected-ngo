import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {
  stripePromise = loadStripe('YOUR_STRIPE_API_KEY');
  elements: any;
  card: any;

  constructor() { }

  async ngOnInit() {
    this.elements = (await this.stripePromise).elements();

    // Create an instance of the card Element.
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
  }

  async handleSubmit() {
    const stripe = await this.stripePromise;
    const result = await stripe.confirmCardPayment('YOUR_CLIENT_SECRET', {
      payment_method: {
        card: this.card,
      }
    });

    if (result.error) {
      // Show error to your customer
      console.error(result.error.message);
    } else if (result.paymentIntent.status === 'succeeded') {
      window.location.href = 'https://www.stripe.com/in';
    }
  }
}
