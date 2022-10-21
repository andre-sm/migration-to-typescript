import { SourcesData } from './sources-data';

export interface SourcesDataResponse {
    status: string;
    sources: Readonly<SourcesData>[];
}
