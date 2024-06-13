import { MdHeartBroken } from "react-icons/md";

function NoFavorites() {
  return (
    <div className="no-data">
      <MdHeartBroken />
      <h2>No Favorite Items!</h2>
      <p>You don’t have any favorite items. Go to home and add some.</p>
    </div>
  )
}

export default NoFavorites