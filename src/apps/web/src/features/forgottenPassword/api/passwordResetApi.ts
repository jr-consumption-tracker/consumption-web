import { axiosMainApi } from "@web/shared/api/axiosMainApi";

const PASSWORD_REST_API_BASE_PATH = "web/passwordReset";

export const passwordResetRequest = async (email: string): Promise<void> => {
  await axiosMainApi.post<void>(`${PASSWORD_REST_API_BASE_PATH}/request`, {
    email,
  });
};
