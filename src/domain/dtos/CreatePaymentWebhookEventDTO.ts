export default interface CreatePaymentWebhookEventDTO {
  body: string;
  signature: string;
  secret: string;
}
