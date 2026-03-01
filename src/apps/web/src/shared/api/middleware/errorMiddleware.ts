import { isRejectedWithValue } from "@reduxjs/toolkit";

import type { Middleware } from "@reduxjs/toolkit";

/**
 * Global error handling middleware for API calls.
 * Intercepts all rejected actions from RTK Query.
 */
export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // Determine the error message
    const errorData = action.payload as {
      status?: number;
      data?: { message?: string; error?: string };
    };

    const errorMessage =
      errorData?.data?.message ||
      errorData?.data?.error ||
      "Něco se nepovedlo. Zkuste to prosím později.";

    const status = errorData?.status;

    // Log the error centrally
    console.error(`[API Error] Status: ${status}, Message: ${errorMessage}`, {
      action,
    });

    // TODO: Connect to a Toast/Notification system here
    // Example: toast.error(errorMessage);
  }

  return next(action);
};
