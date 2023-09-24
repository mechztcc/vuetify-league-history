import axios from "axios";

const api = "https://br1.api.riotgames.com/";
const token = "RGAPI-73834842-8f0b-4288-9902-2842759cc9ca";

export async function findSummoner(name: string) {
  const data = await axios.get(
    `${api}lol/summoner/v4/summoners/by-name/${name}?api_key=${token}`
  );
  console.log(data);
}
