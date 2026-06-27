import { axiosMainApi } from "@web/shared/api/axiosMainApi";

import type { PasswordResetData } from "../model/types/passwordResetData";

const PASSWORD_RESET_API_BASE_PATH = "web/passwordReset";

export const passwordReset = async (
  payload: PasswordResetData,
): Promise<void> => {
  await axiosMainApi.post<void>(
    `${PASSWORD_RESET_API_BASE_PATH}/reset`,
    payload,
  );
};

export const verifyToken = async (token: string): Promise<void> => {
  await axiosMainApi.post<void>(
    `${PASSWORD_RESET_API_BASE_PATH}/verifyToken`,
    null,
    {
      params: {
        token,
      },
    },
  );
};
