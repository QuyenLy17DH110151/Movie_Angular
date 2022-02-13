import { ProductionCompany } from './productionCompany.model';

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  backdrop_path: string;
  production_companies: ProductionCompany[];
}
