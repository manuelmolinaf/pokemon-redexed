export interface PokemonTable {
  count:number,
  next:string | null,
  previous:string | null,
  results:PokemonTableItem[]

}

export interface PokemonTableItem {
  name:string,
  url:string
}