export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/[^\d+]/g, '');
  const normalised = digits.startsWith('+61') ? `0${digits.slice(3)}` : digits;
  return /^0\d{9}$/.test(normalised) || /^1[38]00\d{6}$/.test(normalised) || /^13\d{4}$/.test(normalised);
}

export function required(value: string, message: string): string | undefined {
  return value.trim() ? undefined : message;
}

export function makeReference(): string {
  const n = Math.floor(100000 + Math.random() * 900000);
  return `SC-${n}`;
}

export function todayISO(): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}