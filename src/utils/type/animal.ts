export type Ianimals = {
  name: string;
  age: string;
  contact: {
    email: string;
    phone: string;
  };
  breeds: {
    primary: string;
    secondary: string;
    mixed: boolean;
    unknown: boolean;
  };
  description: string;
  photos: [{ small: string; medium: string; large: string; full: string }];
  status: string;
};
