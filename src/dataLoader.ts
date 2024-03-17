import dt from './data.json' assert { type: 'json' };

export type Job = {
  id: number,
  company: string,
  logo: string,
  new: boolean,
  featured: boolean,
  position: string,
  role: string,
  level: string,
  postedAt: string,
  contract: string,
  location: string,
  languages: string[],
  tools: string[]
}

const loadData = new Promise<Job[]>((res) => {
  setTimeout(() => {
    res(dt);
  }, 3000);
});

export default loadData;