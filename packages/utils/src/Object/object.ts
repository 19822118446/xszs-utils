export function pick<T extends Record<string,any>,K extends keyof T>(obj: T,pickKeys: K[]){
  return pickKeys.reduce((acc,key)=>{
    acc[key] = obj[key]  
    return acc;
  },{} as Pick<T,K>)
}



export function omit<T extends Record<string,any>,K extends keyof T>(obj: T,omitKeys: K[]){
  const pickeys = Object.keys(obj).filter(item=> !omitKeys.includes(item as K))
  return pick(obj,pickeys)
}



