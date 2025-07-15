export interface BucketItem {
  id: string;
  title: string;
  completed: boolean;
  created_at: string;
}

export type EditPayload = { id: string; title: string };
export type TogglePayload = { id: string; completed: boolean };
