import { Job } from "../dataLoader";

export default function Badge({jobDesc, onAddElement}: { jobDesc: Job, onAddElement: Function}) {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = jobDesc;

  return (
    <div className={"rounded-md flex items-center shadow-lg bg-white px-6 box-border" + `${featured ? ' border-l-[6px] border-[hsl(180,29%,50%)]' : ''}`}>
      <img src={logo}></img>
      <div className="ml-5 flex flex-col gap-1">
        <div className="flex gap-4 text-white">
          <span className="text-[hsl(180,29%,50%)]">{company}</span>
          { jobDesc.new == true ? <div className="leading-[0] p-[8px] bg-[hsl(180,29%,50%)] rounded-full flex items-center uppercase">new!</div> : <></>  }
          { featured == true ? <div className="leading-[0] p-[8px] bg-[hsl(180,14%,20%)] text-white rounded-full flex items-center uppercase">featured</div> : <></> }
        </div>
        <h3 className="text-[hsl(180,14%,20%)]">{position}</h3>
        <div className="flex gap-4 items-center">
          <p>{postedAt}</p>
          <div className="w-[4px] h-[4px] bg-[hsl(180,8%,52%)] rounded-full"></div>
          <p>{contract}</p>
          <div className="w-[4px] h-[4px] bg-[hsl(180,8%,52%)] rounded-full"></div>
          <p>{location}</p>          
        </div>
      </div>
      <div className="flex ml-auto gap-5 flex-wrap justify-center">
        <div onClick={() => onAddElement(role)} className="p-2 rounded bg-[hsl(180,52%,96%)] hover:text-white hover:bg-[hsl(180,29%,50%)]">{role}</div>
        <div onClick={() => onAddElement(level)} className="p-2 rounded bg-[hsl(180,52%,96%)] hover:text-white hover:bg-[hsl(180,29%,50%)]">{level}</div>
        {languages.map(e => <div onClick={() => onAddElement(e)} className="p-2 rounded bg-[hsl(180,52%,96%)] hover:text-white hover:bg-[hsl(180,29%,50%)]">{e}</div>)}
        {tools.map(e => <div onClick={() => onAddElement(e)} className="p-2 rounded bg-[hsl(180,31%,95%)] hover:text-white hover:bg-[hsl(180,29%,50%)]">{e}</div>)}
      </div>
    </div>
  );
};

