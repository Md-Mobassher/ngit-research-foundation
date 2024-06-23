export interface Publication {
  year: number;
  type: string;
  title?: string;
  authors?: string;
  journal?: string;
  volume?: string | number;
  issue?: string | number;
  pages?: string;
  doi?: string;
  impactFactor?: string;
  quartile?: string;
  conference?: string;
  location?: string;
  date?: string;
}
