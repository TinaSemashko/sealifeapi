// our DB type
export type Bateau = {
  id: string;
  model: string;
  displacement: string;
  speedMax: string;
  length: string;
  tankFuelCapacity: string;
  engPower: string;
  id_type: string;
  prix: string;
};

// our type after we run through Humps
export type BateauCamel = {
  id: string;
  model: string;
  displacement: string;
  speedMax: string;
  length: string;
  tankFuelCapacity: string;
  engPower: string;
  idType: string;
  prix: string;
};
