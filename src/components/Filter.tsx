export function Filter({filters, removeElement, className}: {filters: string[], removeElement: Function, className?: string}) {

  return filters.length == 0 ? <></> :
    <div className="relative flex w-full px-7 py-5 items-center bg-white shadow-lg rounded-md -translate-y-full">
      <div className="flex flex-wrap gap-4 max-w-[90%]">
        { filters.map(e => 
          <div className="flex items-stretch">
            <div className="py-2 px-4 bg-[hsl(180,52%,96%)] rounded-l-md">{e}</div>
            <button className="bg-[hsl(180,29%,50%)] hover:bg-[hsl(180,14%,20%)] rounded-r-md px-2" onClick={() => removeElement(e)}><img src="/icon-remove.svg"/></button>
          </div>
        )}
      </div>
      <button className="hover:underline ml-auto" onClick={() => removeElement()}>Clear</button>
    </div> 
}