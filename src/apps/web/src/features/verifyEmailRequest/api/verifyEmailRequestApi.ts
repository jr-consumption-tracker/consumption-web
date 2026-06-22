import { axiosMainApi } from "@web/shared/api/axiosMainApi";

const VERIFY_EMAIL_API_BASE_PATH = "web/verifyEmail";

export const verifyEmailResend = async (email: string): Promise<void> => {
  await axiosMainApi.post<void>(`${VERIFY_EMAIL_API_BASE_PATH}/resend`, {
    email,
  });
};
