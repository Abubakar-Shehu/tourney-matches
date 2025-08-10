import { matchData } from "../data/matchData"
import { Match } from "./Match"

export const MatchList = (props) => {
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      <Match />
    </section>
  )
}