import { UseQueryResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import loadData, { Job } from "../dataLoader";
import Badge from "./Badge";
import { Filter } from "./Filter";

export default function Jobs() {
  const queryClient = useQueryClient();
  
  const [filter, setFilter] = useState([] as string[]);
  const {data}: UseQueryResult<Job[], Error> = useQuery({ queryKey: ['todos'], queryFn: () => loadData });

  function addElement(elem: string) {
    if(!filter.includes(elem)) setFilter(prev => [...prev, elem]);
  };

  function removeElement(elem?: string) {
    return elem ? setFilter(prev => prev.filter(el => el !== elem)) : setFilter([]);
  };

  function filterFunction(job: Job) {
    let arr = [job.role, job.level, ...job.languages, ...job.tools];
    let result = true;
    filter.forEach(elem => { 
      if(!arr.includes(elem)) { result = false; return };
     });
    return result;
  };

  const jobs = data?.filter(filterFunction);

  return (
    <div className='grid grid-cols-[minmax(560px,980px)]'>
      <Filter filters={filter} removeElement={removeElement}></Filter>
      <div className='grid grid-cols-subgrid gap-9 auto-rows-[120px]'>
        {jobs ? jobs.map(e => <Badge jobDesc={e} onAddElement={addElement}/>) : <></>}
      </div>
    </div>
  )
}