export interface ApiResponse {
  status: number;
  statusText: string;
  data: unknown;
  error: unknown;
  loading: boolean;
}
