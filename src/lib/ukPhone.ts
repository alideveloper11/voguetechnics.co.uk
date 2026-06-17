export const UK_PHONE_MIN_DIGITS = 11;
export const UK_PHONE_MAX_DIGITS = 15;

export function stripPhoneDigits(raw: string): string {
  return raw.replace(/\D/g, "").slice(0, UK_PHONE_MAX_DIGITS);
}

export function formatUKPhone(raw: string): string {
  const d = stripPhoneDigits(raw);
  if (d.length <= 5) return d;
  if (d.length <= 8) return `${d.slice(0, 5)} ${d.slice(5)}`;
  return `${d.slice(0, 5)} ${d.slice(5, 8)} ${d.slice(8)}`;
}

export function validateUKPhoneDigits(digits: string): string {
  if (!digits) return "Phone number is required.";
  if (digits.length < UK_PHONE_MIN_DIGITS)
    return `Please enter a valid phone number (minimum ${UK_PHONE_MIN_DIGITS} digits).`;
  return "";
}
