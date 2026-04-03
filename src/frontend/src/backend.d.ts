import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface AppointmentRequest {
    name: string;
    email: string;
    preferredDateTime: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    addAppointmentRequest(name: string, email: string, phone: string, preferredDateTime: string, message: string): Promise<void>;
    getAllAppointmentRequests(): Promise<Array<AppointmentRequest>>;
}
