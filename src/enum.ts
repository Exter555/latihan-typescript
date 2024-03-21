export enum data {
  REGULER,
  MEDIUM,
  GOLD,
}

export type customer = {
  id: number;
  nama: string;
  type: data;
};
