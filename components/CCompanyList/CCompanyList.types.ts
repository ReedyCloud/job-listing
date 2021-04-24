type Company = {
  id: string;
  createdAt: string;
  name: string;
  location_state: string;
};

export type CompanyList = {
  items: Company[];
};
