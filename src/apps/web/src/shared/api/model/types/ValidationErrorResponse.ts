export interface ValidationErrorResponse {
  general?: string[];
  validationError?: Array<Record<string, string[]>>;
  action?: string[];
}
