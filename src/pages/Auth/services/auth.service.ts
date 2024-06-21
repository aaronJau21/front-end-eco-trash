import { isAxiosError } from "axios";
import { api } from "../../../api/axios";
import { LoginRequest } from "../interfaces/LoginRequest";
import { LoginResponse } from "../interfaces/LoginResponse";
import { IRegisterResponse } from "../interfaces/RegisterResponse";
import { IRegisterRequest } from "../interfaces/RegisterRequest";

export class AuthService {
    static async login(loginRequest: LoginRequest): Promise<LoginResponse> {

        try {
            const { data } = await api.post<LoginResponse>('/auth/login', loginRequest)
            return data
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data);
            }
            throw error;
        }
    }

    static async register(registerRequest: IRegisterRequest): Promise<IRegisterResponse> {
        try {
            const { data } = await api.post<IRegisterResponse>('/auth/create-user', registerRequest)

            return data
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                throw new Error(error.response.data);
            }
            throw error;
        }
    }
}