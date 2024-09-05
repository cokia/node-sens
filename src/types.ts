export type NCPClientOptions = {
  phoneNumber: string;
  serviceId: string;
  secretKey: string;
  accessKey: string;
};

export type sendSMSType = {
  to: string;
  content: string;
  subject?: string;
  countryCode?: string;
  type?: "SMS" | "LMS";
};

export type sendSMSReturnType = {
  success: boolean;
  msg: string;
  status: number;
};

export type prepareSignatureReturnType = {
  timestamp: string;
  signature: string;
};