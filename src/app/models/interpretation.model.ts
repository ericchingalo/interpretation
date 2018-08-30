export interface Interpretation{
    id: string;
  text: string;
  type: string;
  created: string;
  lastUpdated: string;
  likes: number;
  likedBy: Array<any>;
  comments: Array<{
    id: string;
    created: string;
    text: string;
    user: {
      id: string;
      name: string;
      displayName: string;
    }
  }>;
  eventReport: any;
  eventChart: any;
  chart: any;
  map: any;
  reportTable: any;
}